"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Menu,
  X,
  ShoppingCart,
  Store,
  Home,
  Compass,
  User,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Desktop & Mobile Top Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 12 }}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg"
            >
              3D
            </motion.div>
            <span className="hidden sm:inline-block font-bold text-xl">
              PrintHub
            </span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search 3D prints..."
                className="pl-10 rounded-full bg-muted/50"
              />
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/explore">Explore</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard" className="gap-2">
                <Store className="h-4 w-4" />
                Open Shop
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] text-primary-foreground flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              {searchOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Search className="h-5 w-5" />
              )}
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] text-primary-foreground flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t md:hidden"
            >
              <div className="p-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search 3D prints..."
                    className="pl-10 rounded-full bg-muted/50"
                    autoFocus
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/80 backdrop-blur-xl md:hidden">
        <div className="flex items-center justify-around py-2">
          <BottomNavItem href="/" icon={Home} label="Home" />
          <BottomNavItem href="/explore" icon={Compass} label="Explore" />
          <Link
            href="/dashboard/items/new"
            className="flex flex-col items-center"
          >
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex h-12 w-12 -mt-5 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
            >
              <Plus className="h-6 w-6" />
            </motion.div>
          </Link>
          <BottomNavItem href="/dashboard" icon={Store} label="Shop" />
          <BottomNavItem href="/profile" icon={User} label="Profile" />
        </div>
      </nav>
    </>
  );
}

function BottomNavItem({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <Link href={href} className="flex flex-col items-center gap-0.5">
      <motion.div whileTap={{ scale: 0.85 }}>
        <Icon className="h-5 w-5 text-muted-foreground" />
      </motion.div>
      <span className="text-[10px] text-muted-foreground">{label}</span>
    </Link>
  );
}
