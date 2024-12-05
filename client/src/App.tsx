/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { getEthereumContract } from '@/utils/ethereum'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TradingViewChart } from './components/trading-view-chart'

export default function Home() {
  const [contract, setContract] = useState<ethers.Contract | null>(null)
  const [account, setAccount] = useState<string | null>(null)
  const [balance, setBalance] = useState<string>('0')
  const [depositAmount, setDepositAmount] = useState<string>('')
  const [withdrawAmount, setWithdrawAmount] = useState<string>('')
  const [orderPrice, setOrderPrice] = useState<string>('')
  const [orderAmount, setOrderAmount] = useState<string>('')
  const [buyOrders, setBuyOrders] = useState<any[]>([])
  const [sellOrders, setSellOrders] = useState<any[]>([])
  const [oraclePrice, setOraclePrice] = useState<string>('0')

  useEffect(() => {
    const init = async () => {
      const contract = await getEthereumContract()
      if (contract) {
        setContract(contract)
        const accounts = await window.ethereum?.request?.({ method: 'eth_accounts' })
        if (accounts.length > 0) {
          setAccount(accounts[0])
          updateBalance(accounts[0])
        }
        updateOraclePrice()
        updateOrders()
      }
    }
    init()
  }, [])

  const updateBalance = async (address: string) => {
    if (contract) {
      const balance = await contract.balances(address)
      setBalance(ethers.formatEther(balance))
    }
  }

  const updateOraclePrice = async () => {
    if (contract) {
      const price = await contract.latestPrice()
      setOraclePrice(ethers.formatUnits(price, 8))
    }
  }

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum?.request?.({ method: 'eth_requestAccounts' })
        const accounts = await window.ethereum?.request?.({ method: 'eth_accounts' })
        setAccount(accounts[0])
        updateBalance(accounts[0])
      } catch (error) {
        console.error('Failed to connect wallet:', error)
      }
    }
  }

  const depositFunds = async () => {
    if (contract && depositAmount) {
      try {
        const tx = await contract.depositFunds({ value: ethers.parseEther(depositAmount) })
        await tx.wait()
        updateBalance(account!)
        setDepositAmount('')
      } catch (error) {
        console.error('Failed to deposit funds:', error)
      }
    }
  }

  const withdrawFunds = async () => {
    if (contract && withdrawAmount) {
      try {
        const tx = await contract.withdrawFunds(ethers.parseEther(withdrawAmount))
        await tx.wait()
        updateBalance(account!)
        setWithdrawAmount('')
      } catch (error) {
        console.error('Failed to withdraw funds:', error)
      }
    }
  }

  const placeOrder = async (isBuyOrder: boolean) => {
    if (contract && orderPrice && orderAmount) {
      try {
        const tx = await contract.placeOrder(isBuyOrder, ethers.parseEther(orderPrice), ethers.parseEther(orderAmount))
        await tx.wait()
        updateOrders()
        setOrderPrice('')
        setOrderAmount('')
      } catch (error) {
        console.error('Failed to place order:', error)
      }
    }
  }

  const updateOrders = async () => {
    if (contract) {
      const buyOrders = await contract.getBuyOrders()
      const sellOrders = await contract.getSellOrders()
      setBuyOrders(buyOrders)
      setSellOrders(sellOrders)
    }
  }

  const executeOrder = async (orderIndex: number, isBuyOrder: boolean) => {
    if (contract) {
      try {
        const tx = await contract.executeOrder(orderIndex, isBuyOrder)
        await tx.wait()
        updateOrders()
        updateBalance(account!)
      } catch (error) {
        console.error('Failed to execute order:', error)
      }
    }
  }

  const updatePriceFromOracle = async () => {
    if (contract) {
      try {
        const tx = await contract.updatePrice()
        await tx.wait()
        updateOraclePrice()
      } catch (error) {
        console.error('Failed to update price from oracle:', error)
      }
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Perpetra</h1>
      
      {!account ? (
        <Button onClick={connectWallet}>Connect Wallet</Button>
      ) : (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Address: {account}</p>
            <p>Balance: {balance} ETH</p>
          </CardContent>
        </Card>
      )}

      <TradingViewChart />

      <Card className="mb-8 mt-8">
        <CardHeader>
          <CardTitle>Oracle Price</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Current ETH/USD Price: ${oraclePrice}</p>
          <Button onClick={updatePriceFromOracle} className="mt-4">Update Price from Oracle</Button>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Deposit Funds</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="number"
            placeholder="Amount in ETH"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            className="mb-4"
          />
          <Button onClick={depositFunds}>Deposit</Button>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Withdraw Funds</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="number"
            placeholder="Amount in ETH"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            className="mb-4"
          />
          <Button onClick={withdrawFunds}>Withdraw</Button>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Place Order</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="number"
            placeholder="Price in USD"
            value={orderPrice}
            onChange={(e) => setOrderPrice(e.target.value)}
            className="mb-4"
          />
          <Input
            type="number"
            placeholder="Amount in ETH"
            value={orderAmount}
            onChange={(e) => setOrderAmount(e.target.value)}
            className="mb-4"
          />
          <div className="flex gap-4">
            <Button onClick={() => placeOrder(true)}>Place Buy Order</Button>
            <Button onClick={() => placeOrder(false)}>Place Sell Order</Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Buy Orders</CardTitle>
          </CardHeader>
          <CardContent>
            {buyOrders.map((order, index) => (
              <div key={index} className="mb-2 flex justify-between items-center">
                <span>
                  Price: {ethers.formatEther(order.price)} USD, 
                  Amount: {ethers.formatEther(order.amount)} ETH
                </span>
                {/* <Button onClick={() => executeOrder(index, true)}>Execute</Button> */}
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sell Orders</CardTitle>
          </CardHeader>
          <CardContent>
            {sellOrders.map((order, index) => (
              <div key={index} className="mb-2 flex justify-between items-center">
                <span>
                  Price: {ethers.formatEther(order.price)} USD, 
                  Amount: {ethers.formatEther(order.amount)} ETH
                </span>
                <Button onClick={() => executeOrder(index, false)}>Execute</Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

