'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleMenu = () => {
    setToggle((prev) => !prev);
  };

  const isLoggedIn = true;
  return (
    <header className="w-full mb-16 pt-3 px-6 sm:px-16">
      <nav className="flex justify-between">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src="/logo2.png"
            alt="tripSnap Logo"
            width={80}
            height={80}
            className="object-contain"
          />
          <p className="max-sm:hidden font-satoshi font-semibold text-3xl bg-gradient-to-r from-yellow-400 via-amber-300 to-blue-500 bg-clip-text text-transparent tracking-wide">
            TripSnap
          </p>
        </Link>
        {/* Desktop navigation  */}
        <div className="sm:flex hidden items-center">
          {isLoggedIn ? (
            <div className="flex items-center gap-3 md:gap-5 ">
              <Link
                href="/explore"
                className="rounded-full border-2 border-neutral-700 bg-neutral-700 py-1.5 px-5 text-white transition-all hover:bg-neutral-100 hover:text-neutral-700 text-center font-inter"
              >
                Explore
              </Link>
              <Link
                href="/share"
                className="rounded-full border-2 border-neutral-700 bg-neutral-700 py-1.5 px-5 text-white transition-all hover:bg-neutral-100 hover:text-neutral-700 text-center font-inter"
              >
                Share
              </Link>
              <button
                type="button"
                className="rounded-full border-2 border-neutral-700 bg-neutral-100 py-1.5 px-5 text-neutral-700 transition-all hover:bg-neutral-700 hover:text-white text-center font-inter"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="rounded-full border-2 border-neutral-700 bg-neutral-100 py-1.5 px-5 text-neutral-700 transition-all hover:bg-neutral-700 hover:text-white text-center font-inter"
            >
              Sign In
            </button>
          )}
        </div>
        {/* Mobile Navigation */}
        <div className="sm:hidden flex items-center">
          {isLoggedIn ? (
            <div>
              <h2
                className="rounded-full border-2 border-neutral-700 bg-neutral-100 py-1.5 px-5 text-neutral-700 transition-all hover:bg-neutral-700 hover:text-white text-center font-inter"
                onClick={handleMenu}
              >
                Menu
              </h2>
              {toggle && (
                <div className="absolute right-5 top mt-1 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-400 to-yellow-300 flex flex-col gap-2 justify-end items-end drop-shadow-2xl">
                  <Link
                    href="/explore"
                    className="text-sm font-inter text-neutral-700 hover:text-neutral-400 font-medium"
                  >
                    Explore
                  </Link>
                  <Link
                    href="/share"
                    className="text-sm font-inter text-neutral-700 hover:text-neutral-400 font-medium"
                  >
                    Share
                  </Link>
                  <button
                    type="button"
                    className="text-sm font-inter text-neutral-700 font-medium transition-all hover:text-white"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              type="button"
              className="rounded-full border-2 border-neutral-700 bg-neutral-100 py-1.5 px-5 text-neutral-700 transition-all hover:bg-neutral-700 hover:text-white text-center font-inter"
            >
              Sign In
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
