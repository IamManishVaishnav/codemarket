import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header"
import { MarketplaceProvider } from "@/lib/context/marketplace-context"
import GridBackground from "@/components/grid-background"
import ParticleEffect from "@/components/particle-effect"
import CursorGlow from "@/components/cursor-glow"
import CustomCursor from "@/components/custom-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CodeMarket - Buy and Sell Code",
  description: "A marketplace for developers to buy and sell code snippets and projects",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} min-h-screen bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <MarketplaceProvider>
            <GridBackground />
            <ParticleEffect />
            <CursorGlow />
            <CustomCursor />
            <Header />
            <main className="container mx-auto px-4 py-8">{children}</main>
            <Toaster />
          </MarketplaceProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'