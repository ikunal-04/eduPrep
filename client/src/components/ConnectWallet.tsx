import { Button } from '@/components/ui/button'

export default function ConnectWallet() {
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum?.request?.({ method: 'eth_requestAccounts' })
        window.location.reload() // Reload the page to initialize the app with the connected wallet
      } catch (error) {
        console.error('Failed to connect wallet:', error)
      }
    } else {
      console.error('Metamask is not installed')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">PerpetualDEX</h1>
      <p className="mb-4">Please connect your wallet to use the application.</p>
      <Button onClick={connectWallet}>Connect Wallet</Button>
    </div>
  )
}

