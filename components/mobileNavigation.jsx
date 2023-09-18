"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";

export default function MobileNavigation({ className }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  if (pathname != "/")
    return (
      <div className="fade-in">
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <div className="flex justify-between">
            <Dialog.Trigger asChild>
              <button className="lg:hidden text-medium grow">MENU</button>
            </Dialog.Trigger>
          </div>
          <Dialog.Portal>
            <Dialog.Content className="bg-primary fixed top-0 left-0 pt-5 px-4 w-screen h-screen z-50">
              <nav className="relative">
                <Dialog.Close asChild>
                  <button className="mx-auto block lg:hidden text-medium">
                    CLOSE
                  </button>
                </Dialog.Close>
                <ul className="space-y-2 mt-8">
                  <li>
                    <Link
                      href="/about"
                      className={` ${
                        pathname === "/about" ? "active-page" : ""
                      } text-medium`}
                    >
                      <span>About</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/magazine"
                      className={` ${
                        pathname === "/magazine" ? "active-page" : ""
                      } text-medium`}
                    >
                      <span>Magazine</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/a-z"
                      className={` ${
                        pathname === "/a-z" ? "active-page" : ""
                      } text-medium`}
                    >
                      <span>A-Z</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop"
                      className={` ${
                        pathname === "/shop" ? "active-page" : ""
                      } text-medium`}
                    >
                      <span>Shop</span>
                    </Link>
                  </li>
                  <li>
                    <button class="snipcart-checkout" id="checkout">
                      <span>Checkout</span>
                    </button>
                  </li>
                  <li>
                    <Link href="/impressum" className="text-medium">
                      <span>Impressum</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    );
}
