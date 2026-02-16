import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 pb-20 md:pb-0">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg">
                3D
              </div>
              <span className="font-bold text-xl">PrintHub</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              India&apos;s marketplace for 3D printed creations. Buy unique items or
              open your own shop.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3">Marketplace</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/explore" className="hover:text-foreground transition-colors">Explore</Link></li>
              <li><Link href="/explore?category=figurines" className="hover:text-foreground transition-colors">Figurines</Link></li>
              <li><Link href="/explore?category=home-decor" className="hover:text-foreground transition-colors">Home Decor</Link></li>
              <li><Link href="/explore?category=gadgets" className="hover:text-foreground transition-colors">Gadgets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Sellers</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/dashboard" className="hover:text-foreground transition-colors">Open a Shop</Link></li>
              <li><Link href="/dashboard" className="hover:text-foreground transition-colors">Seller Dashboard</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; 2026 PrintHub. All rights reserved.</p>
          <p>Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}
