"use client"

import { useState } from "react"
import Layout from "./Layout"
import Asset, { type AssetData } from "./Asset"
import PortfolioSummary from "./PortfolioSummary"

const initialAssets: AssetData[] = [
  { id: 1, name: "Apple Stock", type: "Stock", value: 10000 },
  { id: 2, name: "Bitcoin", type: "Cryptocurrency", value: 5000 },
  { id: 3, name: "Real Estate Property", type: "Real Estate", value: 250000 },
  { id: 4, name: "Government Bonds", type: "Bonds", value: 25000 },
  { id: 5, name: "Gold", type: "Commodity", value: 15000 },
]

export default function AssetPortfolio() {
  const [assets] = useState<AssetData[]>(initialAssets)

  return (
    <Layout>
      <PortfolioSummary assets={assets} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {assets.map((asset) => (
          <Asset key={asset.id} asset={asset} />
        ))}
      </div>
    </Layout>
  )
}

