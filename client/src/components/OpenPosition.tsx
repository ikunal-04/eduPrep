import { useState } from 'react'
import { ethers } from 'ethers'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

interface OpenPositionProps {
  contract: ethers.Contract
}

export default function OpenPosition({ contract }: OpenPositionProps) {
  const [asset, setAsset] = useState('')
  const [isLong, setIsLong] = useState(true)
  const [size, setSize] = useState('')
  const [leverage, setLeverage] = useState('')

  const handleOpenPosition = async () => {
    try {
      const tx = await contract.openPosition(
        asset,
        isLong,
        ethers.parseEther(size),
        ethers.parseEther(leverage)
      )
      await tx.wait()
      console.log('Position opened successfully')
    } catch (error) {
      console.error('Error opening position:', error)
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Open Position</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="asset">Asset Address</Label>
          <Input
            id="asset"
            value={asset}
            onChange={(e) => setAsset(e.target.value)}
            placeholder="0x..."
          />
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="isLong"
            checked={isLong}
            onCheckedChange={setIsLong}
          />
          <Label htmlFor="isLong">Long Position</Label>
        </div>
        <div>
          <Label htmlFor="size">Size</Label>
          <Input
            id="size"
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            placeholder="0.0"
          />
        </div>
        <div>
          <Label htmlFor="leverage">Leverage</Label>
          <Input
            id="leverage"
            type="number"
            value={leverage}
            onChange={(e) => setLeverage(e.target.value)}
            placeholder="1"
          />
        </div>
        <Button onClick={handleOpenPosition}>Open Position</Button>
      </div>
    </div>
  )
}

