"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link
            href="/about"
            className={` ${pathname === "/about" ? "bg-primary" : ""}`}
          >
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link
            href="/magazine"
            className={` ${pathname === "/magazine" ? "bg-primary" : "" + ""}`}
          >
            <span>Magazine</span>
          </Link>
        </li>
        <li>
          <Link
            href="a-z"
            className={` ${pathname === "/a-z" ? "bg-primary" : "" + ""}`}
          >
            <span>A-Z</span>
          </Link>
        </li>
        <li>
          <Link href="">
            <span>Checkout</span>
          </Link>
        </li>
        <li>
          <Link href="/impressum">
            <span>Impressum</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
