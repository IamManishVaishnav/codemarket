"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Code, Sparkles, ShieldCheck } from "lucide-react"
import FeaturedListings from "@/components/featured-listings"
import { motion } from "framer-motion"
import MagneticButton from "@/components/magnetic-button"

export default function Home() {
  return (
    <div className="space-y-12 py-6">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge className="px-4 py-2 text-sm bg-secondary/10 border-secondary/30 text-secondary" variant="outline">
              The Marketplace for Developers
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Buy and Sell Code{" "}
            <span className="text-primary neon-text glitch" data-text="Securely">
              Securely
            </span>
          </motion.h1>

          <motion.p
            className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            A decentralized marketplace for developers to buy and sell code snippets, components, and full projects with
            secure blockchain transactions.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link href="/marketplace">
              <MagneticButton variant="neon" size="lg" className="gap-2 group">
                Browse Marketplace
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>
            </Link>
            <Link href="/sell">
              <MagneticButton variant="neon-outline" size="lg" className="gap-2 group">
                Sell Your Code
                <Code className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="container space-y-6 py-8 md:py-12 lg:py-16">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <motion.h2
            className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary neon-text">Features</span>
          </motion.h2>
          <motion.p
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our platform offers a secure and user-friendly way to buy and sell code.
          </motion.p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="border-primary/20 hover:border-primary/50 transition-all duration-500" glowEffect>
              <CardHeader>
                <Code className="h-10 w-10 text-primary animate-pulse-glow" />
                <CardTitle className="mt-4">Code Marketplace</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Browse and purchase high-quality code snippets, components, and full projects from verified
                  developers.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="border-secondary/20 hover:border-secondary/50 transition-all duration-500" glowEffect>
              <CardHeader>
                <ShieldCheck className="h-10 w-10 text-secondary animate-pulse-glow" />
                <CardTitle className="mt-4">Secure Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All transactions are secured through blockchain technology, ensuring safe and transparent payments.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="border-neon-purple/20 hover:border-neon-purple/50 transition-all duration-500" glowEffect>
              <CardHeader>
                <Sparkles className="h-10 w-10 text-neon-purple animate-pulse-glow" />
                <CardTitle className="mt-4">Developer Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join a thriving community of developers sharing knowledge and high-quality code solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="container py-8 md:py-12 lg:py-16">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <motion.h2
            className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-secondary neon-purple-text">Featured Listings</span>
          </motion.h2>
          <motion.p
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Check out some of our top code listings from verified developers.
          </motion.p>
        </div>
        <div className="mt-8">
          <FeaturedListings />
        </div>
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/marketplace">
            <MagneticButton variant="neon-outline" size="lg" className="group">
              View All Listings
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

