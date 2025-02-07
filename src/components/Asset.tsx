export interface AssetData {
    id: number
    name: string
    type: string
    value: number
  }
  
  interface AssetProps {
    asset: AssetData
  }
  
  export default function Asset({ asset }: AssetProps) {
    return (
      <div className="bg-white shadow rounded-lg p-4 mb-4">
        <h3 className="text-lg font-semibold">{asset.name}</h3>
        <p className="text-gray-600">{asset.type}</p>
        <p className="text-xl font-bold mt-2">${asset.value.toLocaleString()}</p>
      </div>
    )
  }
  
  