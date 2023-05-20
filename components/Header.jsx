'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Header = () => {
  const [providers, setProviders] = useState(null);
  const [toggle, setToggle] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const loadProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    loadProviders();
  }, []);

  const handleMenu = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header className="w-full mb-16 pt-3 px-6 sm:px-16">
      <nav className="flex justify-between">
        <Link href="/" className="flex gap-2 items-center">
          <Image src="/logo2.png" alt="tripSnap Logo" width={80} height={80} />
          <p className="max-sm:hidden font-satoshi font-semibold text-3xl bg-gradient-to-r from-yellow-400 via-amber-300 to-blue-500 bg-clip-text text-transparent tracking-wide">
            TripSnap
          </p>
        </Link>
        {/* Desktop navigation  */}
        <div className="sm:flex flex-col items-end gap-3 hidden">
          {session ? (
            <>
              <p className="text-neutral-700 text-xl">
                Welcome,{' '}
                <span className="italic font-semibold text-gray-500">
                  {session.user.name}
                </span>
              </p>
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
                  onClick={signOut}
                >
                  Sign Out
                </button>
              </div>
            </>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    key={provider.name}
                    type="button"
                    className="rounded-full border-2 border-neutral-700 bg-neutral-100 mt-4 py-1.5 px-5 text-neutral-700 transition-all hover:bg-neutral-700 hover:text-white text-center font-inter"
                    onClick={() => signIn(provider.id)}
                  >
                    Sign In
                  </button>
                ))}
            </>
          )}
        </div>
        {/* Mobile Navigation */}
        <div className="sm:hidden flex items-center">
          {session ? (
            <div>
              <Image
                src={session.user.image}
                alt="profile image"
                width={45}
                height={45}
                className="object-contain rounded-full cursor-pointer"
                onClick={handleMenu}
              />
              {toggle && (
                <div className="absolute right-5 top mt-1 px-6 py-2 rounded-lg shadow-2xl flex flex-col gap-2 justify-end items-end">
                  <Link
                    href="/explore"
                    className="text-sm font-inter text-neutral-700 hover:text-neutral-400 font-medium"
                  >
                    Explore
                  </Link>
                  <Link
                    href="/share"
                    className="text-sm font-inter text-neutral-700 hover:text-neutral-400 font-medium"
                    onClick={() => setToggle(false)}
                  >
                    Share
                  </Link>
                  <button
                    type="button"
                    className="text-sm font-inter text-neutral-700 font-medium transition-all hover:text-white"
                    onClick={() => {
                      setToggle(false);
                      signOut();
                    }}
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
              onClick={() => signIn(providers.id)}
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
