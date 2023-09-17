"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className={`${pathname == "/" && "mt-[65vh] mb-32"}`}>
      {pathname == "/" && (
        <div>
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
          pathname != "/" &&
          "fixed top-1/2 left-2 transform -translate-y-1/2 mt-[9vw]"
        }`}
      >
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
              className={` ${
                pathname === "/magazine" ? "bg-primary" : "" + ""
              }`}
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
    </div>
  );
}
