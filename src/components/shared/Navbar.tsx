
"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const navigation = [
  { name: "Browse Jobs", path: "/jobs" },
  { name: "Company", path: "/company" },
  { name: "Pricing", path: "/pricing" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      console.error("Sign out failed:", error);
      return;
    }

    router.push("/sign-in");
  };

  return (
    <header className="absolute inset-x-0 top-0 z-20 px-4 pt-4 sm:px-6 lg:px-14 lg:pt-5">
      <nav className="mx-auto max-w-295 rounded-xl bg-[#171719]/90 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur-md">

        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Hireloop home" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Hireloop"
              width={154}
              height={44}
              priority
              className="h-auto w-26 sm:w-29.5"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <div className="flex items-center gap-8 text-base font-medium text-white/85">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="transition-colors hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <span className="h-5 w-px bg-white/15" aria-hidden="true" />

            {!isPending && (
              session ? (
                <div className="flex items-center gap-5">
                  <span className="text-base font-semibold text-white">
                    {session.user.name}
                  </span>

                  <button
                    onClick={handleSignOut}
                    className="rounded-lg border border-white/15 px-5 py-2 text-base font-semibold text-[#8e7cff] transition-colors hover:bg-white/10"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    href="/sign-in"
                    className="text-base font-medium text-[#8e7cff] transition-colors hover:text-[#b2a7ff]"
                  >
                    Sign In
                  </Link>

                  <Link
                    href="/sign-up"
                    className="rounded-lg bg-[#6650ed] px-5 py-2 text-base font-semibold text-white shadow-[0_0_18px_rgba(102,80,237,0.35)] transition-colors hover:bg-[#7663f2]"
                  >
                    Get Started
                  </Link>
                </>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            {!isPending && !session && (
              <Link
                href="/sign-up"
                className="rounded-lg bg-[#6650ed] px-4 py-2.5 text-xs font-semibold text-white"
              >
                Get Started
              </Link>
            )}

            <button
              type="button"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-lg border border-white/10 p-2 text-white/80 transition-colors hover:bg-white/10"
            >
              {isMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 flex flex-col gap-4 border-t border-white/10 pt-4 md:hidden">
            {navigation.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-white/85 transition-colors hover:text-white"
              >
                {item.name}
              </Link>
            ))}

            {!isPending && (
              session ? (
                <>
                  <span className="text-sm font-semibold text-white">
                    {session.user.name}
                  </span>

                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleSignOut();
                    }}
                    className="text-left text-sm font-semibold text-[#8e7cff] hover:text-[#b2a7ff]"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  href="/sign-in"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-[#8e7cff] transition-colors hover:text-[#b2a7ff]"
                >
                  Sign In
                </Link>
              )
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
