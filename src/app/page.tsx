"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  Truck,
  Shield,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ItemCard } from "@/components/cards/item-card";
import { ShopCard } from "@/components/cards/shop-card";
import { CATEGORIES } from "@/types";
import { FEATURED_SHOPS, TRENDING_ITEMS } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm">
                <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                India&apos;s 3D Print Marketplace
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              Discover Unique{" "}
              <span className="text-primary">3D Printed</span>{" "}
              Creations
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground max-w-lg mx-auto"
            >
              Buy amazing 3D printed items from talented makers or open your own
              shop and start selling today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8"
            >
              <Button size="lg" className="rounded-full px-8 w-full sm:w-auto" asChild>
                <Link href="/explore">
                  Explore Items
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 w-full sm:w-auto"
                asChild
              >
                <Link href="/dashboard">Open Your Shop</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* Features Strip */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Palette, text: "Unique Designs" },
              { icon: Shield, text: "Secure Payments" },
              { icon: Truck, text: "Fast Delivery" },
              { icon: Sparkles, text: "Quality Guaranteed" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-2 justify-center"
              >
                <feature.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Categories</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/explore" className="text-muted-foreground">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.value}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i }}
            >
              <Link
                href={`/explore?category=${cat.value}`}
                className="flex flex-col items-center gap-2 min-w-[80px] p-3 rounded-2xl bg-muted/50 hover:bg-primary/10 hover:shadow-md transition-all"
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-xs font-medium text-center whitespace-nowrap">
                  {cat.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending Items */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Trending Now 🔥</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/explore" className="text-muted-foreground">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {TRENDING_ITEMS.map((item, i) => (
            <ItemCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* Featured Shops */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Shops ⭐</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/explore" className="text-muted-foreground">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FEATURED_SHOPS.map((shop, i) => (
            <ShopCard key={shop.id} shop={shop} index={i} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-primary p-8 md:p-16 text-center text-primary-foreground"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Start Selling Your 3D Prints
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-md mx-auto">
            Join hundreds of makers already selling on PrintHub. Free to start,
            no monthly fees.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="mt-8 rounded-full px-8"
            asChild
          >
            <Link href="/dashboard">
              Open Your Shop — It&apos;s Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary-foreground/10 blur-2xl" />
          <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-primary-foreground/5 blur-2xl" />
        </motion.div>
      </section>
    </main>
  );
}
