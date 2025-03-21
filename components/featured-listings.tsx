"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star } from "lucide-react"
import { useMarketplace } from "@/lib/context/marketplace-context"
import { motion } from "framer-motion"

export default function FeaturedListings() {
  const { featuredListings } = useMarketplace()

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {featuredListings.map((listing, index) => (
        <motion.div
          key={listing.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link href={`/marketplace/${listing.id}`} className="block h-full">
            <Card className="h-full group transition-all duration-500 hover:scale-[1.02]" glowEffect>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="line-clamp-1 text-lg group-hover:text-primary transition-colors duration-300">
                    {listing.title}
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="bg-secondary/10 border-secondary/30 text-secondary group-hover:bg-secondary/20 transition-colors duration-300"
                  >
                    {listing.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-2 text-sm text-muted-foreground">{listing.description}</p>
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <span className="font-medium text-neon-purple group-hover:text-secondary transition-colors duration-300">
                    {listing.language}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{listing.sales} sales</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Star className="mr-1 h-3.5 w-3.5 fill-primary text-primary" />
                    {listing.rating}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="border-t border-muted/20 bg-muted/5 px-6 py-3">
                <div className="flex w-full items-center justify-between">
                  <span className="text-lg font-bold text-primary neon-text">{listing.price} ETH</span>
                  <Button
                    variant="neon-outline"
                    size="sm"
                    className="group-hover:bg-primary/20 transition-all duration-300"
                  >
                    View Details
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

