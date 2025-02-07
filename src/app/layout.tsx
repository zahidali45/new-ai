import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AI Web Engineer Portfolio",
  description: "Showcasing the capabilities of an AI web engineer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Muhammad Zahid</h1>
            <ul className="flex space-x-4">
              <li>
                <a href="#capabilities" className="hover:underline">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:underline">
                  Demo
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer className="bg-gray-200 p-4 text-center">
          <p>&copy; 2025 AI Web Engineer. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}

