"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import AddToCart from "./addToCart";

export default function Navigation({ className }) {
  const pathname = usePathname();

  return (
    <div
      className={`${
        pathname == "/" ? "lg:mt-[65vh] lg:mb-32 " : " "
      }  ${className}`}
    >
      {pathname == "/" && (
        <div className="">
          <p>
            <b>SOFT EIS</b> is an independent print magazine published in
            Berlin. Each issue deconstructs a different topic by pulling at its
            strings to examine the space between.
          </p>
          <hr />
          <h3 className="mb-2">Magazine</h3>
          <ul>
            <li>
              <Link href="/magazine/issue03-loss">ISSUE03 LOSS</Link>
            </li>
            <li>
              <Link href="/magazine/issue02-identity">ISSUE02 IDENTITY</Link>
            </li>
            <li>
              <Link href="/magazine/issue01-sex">ISSUE01 SEX</Link>
            </li>
          </ul>
          <hr />
        </div>
      )}
      <nav
        className={`${
          pathname != "/"
            ? "lg:fixed lg:top-1/2 lg:left-4 transform -translate-y-1/2 mt-[12vw] xl:mt-[11vw] 2xl:mt-[10vw]"
            : ""
        }`}
      >
        <ul>
          <li>
            <Link
              href="/about"
              className={` ${pathname === "/about" ? "active-page" : ""}`}
            >
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              href="/magazine"
              className={` ${pathname === "/magazine" ? "active-page" : ""}`}
            >
              <span>Magazine</span>
            </Link>
          </li>
          <li>
            <Link
              href="/a-z"
              className={` ${pathname === "/a-z" ? "active-page" : ""}`}
            >
              <span>A-Z</span>
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className={` ${pathname === "/shop" ? "active-page" : ""}`}
            >
              <span>Shop</span>
            </Link>
          </li>
          <li>
            <button className="snipcart-checkout" id="checkout">
              <span>Checkout</span>
            </button>
          </li>
          <li>
            <Link href="/impressum">
              <span>Impressum</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="fixed top-4 right-4">
        <AddToCart />
      </div>
    </div>
  );
}
