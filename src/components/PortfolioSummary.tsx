import type { AssetData } from "./Asset"

interface PortfolioSummaryProps {
  assets: AssetData[]
}

export default function PortfolioSummary({ assets }: PortfolioSummaryProps) {
  const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0)

  return (
    <div className="bg-blue-100 rounded-lg p-4 mb-8">
      <h2 className="text-2xl font-bold mb-2">Portfolio Summary</h2>
      <p className="text-xl">
        Total Value: <span className="font-bold">${totalValue.toLocaleString()}</span>
      </p>
      <p>Number of Assets: {assets.length}</p>
    </div>
  )
}

