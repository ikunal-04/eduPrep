import { useState } from 'react'
import { ethers } from 'ethers'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface ClosePositionProps {
  contract: ethers.Contract
}

export default function ClosePosition({ contract }: ClosePositionProps) {
  const [asset, setAsset] = useState('')

  const handleClosePosition = async () => {
    try {
      const tx = await contract.closePosition(asset)
      await tx.wait()
      console.log('Position closed successfully')
    } catch (error) {
      console.error('Error closing position:', error)
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Close Position</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="closeAsset">Asset Address</Label>
          <Input
            id="closeAsset"
            value={asset}
            onChange={(e) => setAsset(e.target.value)}
            placeholder="0x..."
          />
        </div>
        <Button onClick={handleClosePosition}>Close Position</Button>
      </div>
    </div>
  )
}

