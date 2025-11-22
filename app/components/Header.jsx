"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-dark shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">MyJobSite</Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/contactus" className="hover:text-blue-600">
            Contact Us
          </Link>
          <Link href="/privacypolicy" className="hover:text-blue-600">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
