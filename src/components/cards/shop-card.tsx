"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Star, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Shop } from "@/types";

export function ShopCard({ shop, index = 0 }: { shop: Shop; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/shop/${shop.slug}`}>
        <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300">
          {/* Cover */}
          <div className="relative h-32 overflow-hidden">
            <Image
              src={shop.coverImage}
              alt={shop.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Content */}
          <CardContent className="relative p-4 pt-0">
            <Avatar className="absolute -top-6 left-4 h-12 w-12 border-2 border-background shadow-md">
              <AvatarImage src={shop.logo} alt={shop.name} />
              <AvatarFallback>{shop.name.charAt(0)}</AvatarFallback>
            </Avatar>

            <div className="pt-8">
              <h3 className="font-semibold text-base group-hover:text-primary transition-colors">
                {shop.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                {shop.description}
              </p>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium">{shop.rating}</span>
                  <span className="text-xs text-muted-foreground">
                    · {shop.totalSales} sales
                  </span>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
