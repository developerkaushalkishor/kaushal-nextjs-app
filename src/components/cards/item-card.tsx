"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Star, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Item } from "@/types";

export function ItemCard({ item, index = 0 }: { item: Item; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/item/${item.id}`}>
        <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-background">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={item.images[0]}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Badge className="absolute top-2 left-2 text-[10px]" variant="secondary">
              {item.material}
            </Badge>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="absolute bottom-2 right-2"
            >
              <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          {/* Content */}
          <CardContent className="p-3">
            <h3 className="font-medium text-sm line-clamp-1 group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <div className="flex items-center gap-1 mt-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-muted-foreground">
                {item.rating} ({item.reviews})
              </span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="font-bold text-base">₹{item.price.toLocaleString("en-IN")}</span>
              <span className="text-[10px] text-muted-foreground">{item.shop.name}</span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
