"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { UserRole } from "@/lib/generated/prisma/enums";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Menu, X, Code2, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ userRole }: { userRole: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/problems", label: "Problems", icon: Code2 },
    { href: "/about", label: "About", icon: Sparkles },
    { href: "/profile", label: "Profile", icon: null },
  ];

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl px-2 sm:px-4">
        <div className="relative bg-gradient-to-br from-white/80 via-white/70 to-white/60 dark:from-zinc-900/80 dark:via-zinc-900/70 dark:to-zinc-800/60 backdrop-blur-xl border border-white/40 dark:border-zinc-700/50 rounded-3xl shadow-2xl shadow-amber-500/5 dark:shadow-amber-500/10 transition-all duration-300 hover:shadow-amber-500/10 dark:hover:shadow-amber-500/20 hover:border-amber-400/30 dark:hover:border-amber-400/30">
          {/* Ambient glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/0 via-amber-400/5 to-amber-400/0 dark:from-amber-400/0 dark:via-amber-400/10 dark:to-amber-400/0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex justify-between items-center">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-400/20 dark:bg-amber-400/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative bg-gradient-to-br from-amber-300 to-amber-500 p-2 sm:p-2.5 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/logo.svg"
                    alt="LeetCode"
                    width={28}
                    height={28}
                    className="sm:w-8 sm:h-8 drop-shadow-lg filter brightness-110"
                  />
                </div>
              </div>
              <span className="font-bold text-xl sm:text-2xl lg:text-3xl tracking-wider bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 dark:from-amber-400 dark:via-yellow-300 dark:to-amber-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                CodeLab
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 xl:px-5 py-2.5 text-sm xl:text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 rounded-xl group overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-amber-400/0 dark:from-amber-400/0 dark:via-amber-400/20 dark:to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  <span className="relative flex items-center gap-2">
                    {link.icon && <link.icon className="w-4 h-4" />}
                    {link.label}
                  </span>
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </Link>
              ))}
            </div>

            {/* Right Section - Actions */}
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
              <div className="hidden sm:block">
                <ModeToggle />
              </div>

              <SignedIn>
                {userRole && userRole === UserRole.ADMIN && (
                  <Link href="/create-problem" className="hidden md:block">
                    <Button
                      variant="outline"
                      size="default"
                      className="relative border-2 border-amber-400/50 dark:border-amber-400/40 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 hover:from-amber-100 hover:to-yellow-100 dark:hover:from-amber-900/40 dark:hover:to-yellow-900/40 text-amber-700 dark:text-amber-300 font-semibold shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 transition-all duration-300 hover:scale-105 overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      <span className="relative flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Create Problem
                      </span>
                    </Button>
                  </Link>
                )}
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-md opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <UserButton />
                </div>
              </SignedIn>

              <SignedOut>
                <div className="hidden sm:flex items-center gap-2">
                  <SignInButton>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-white/60 dark:hover:bg-white/10 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 rounded-xl"
                    >
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton>
                    <Button
                      size="sm"
                      className="relative text-sm font-semibold bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-500 hover:via-amber-600 hover:to-yellow-600 text-white shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 rounded-xl overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      <span className="relative">Sign Up</span>
                    </Button>
                  </SignUpButton>
                </div>
              </SignedOut>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-zinc-700 dark:text-zinc-300 hover:bg-amber-400/10 rounded-xl transition-all duration-300"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-white/40 dark:border-zinc-700/50 rounded-3xl shadow-2xl p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-5 py-3 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-400/10 rounded-xl transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  {link.icon && <link.icon className="w-5 h-5" />}
                  {link.label}
                </span>
              </Link>
            ))}

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Theme
                </span>
                <ModeToggle />
              </div>

              <SignedOut>
                <div className="space-y-2">
                  <SignInButton>
                    <Button
                      variant="outline"
                      className="w-full text-sm font-medium border-2 border-zinc-200 dark:border-zinc-700 hover:border-amber-400/50 dark:hover:border-amber-400/50 rounded-xl"
                    >
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton>
                    <Button className="w-full text-sm font-semibold bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-white shadow-lg shadow-amber-500/30 rounded-xl">
                      Sign Up
                    </Button>
                  </SignUpButton>
                </div>
              </SignedOut>

              <SignedIn>
                {userRole && userRole === UserRole.ADMIN && (
                  <Link
                    href="/create-problem"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      variant="outline"
                      className="w-full border-2 border-amber-400/50 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 text-amber-700 dark:text-amber-300 font-semibold rounded-xl"
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      Create Problem
                    </Button>
                  </Link>
                )}
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
