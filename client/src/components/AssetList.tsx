import { useState, useEffect } from 'react'
import { ethers } from 'ethers'

interface AssetListProps {
  contract: ethers.Contract
}

export default function AssetList({ contract }: AssetListProps) {
  const [assets, setAssets] = useState<string[]>([])

  useEffect(() => {
    const fetchAssets = async () => {
      // In a real application, you would need to implement a way to get the list of supported assets
      // For this example, we'll use a dummy list
      const dummyAssets = ['0x1234...', '0x5678...', '0x9abc...']
      setAssets(dummyAssets)
    }

    fetchAssets()
  }, [contract])

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Supported Assets</h2>
      <ul>
        {assets.map((asset, index) => (
          <li key={index} className="mb-2">
            {asset}
          </li>
        ))}
      </ul>
    </div>
  )
}

