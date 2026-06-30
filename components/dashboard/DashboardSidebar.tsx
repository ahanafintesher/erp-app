"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Boxes,
  Users,
  Truck,
  ShoppingCart,
  ReceiptText,
  DollarSign,
} from "lucide-react";

import { cn } from "@/lib/utils";

const sidebarItems = [
  {
    title: "Total Products",
    href: "/dashboard/total-products",
    icon: Boxes,
  },
  {
    title: "Customers",
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    title: "Suppliers",
    href: "/dashboard/suppliers",
    icon: Truck,
  },
  {
    title: "Purchases",
    href: "/dashboard/purchases",
    icon: ShoppingCart,
  },
  {
    title: "Sales",
    href: "/dashboard/sales",
    icon: ReceiptText,
  },
  {
    title: "Revenue",
    href: "/dashboard/revenue",
    icon: DollarSign,
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex h-screen w-64 flex-col border-r bg-background">
      <div className="border-b px-6 py-5">
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}