import Link from "next/link";
import { Code2, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 pt-16 pb-8 flex justify-center items-center">
      <div className="container px-4 md:px-6 ">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12 place-items-center">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">
                CodeLab
              </span>
            </Link>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mb-6">
              The leading platform for coding interview preparation. Master algorithms, data structures, and system design.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Platform</h4>
            <ul className="space-y-2">
              <li><Link href="/problems" className="text-zinc-500 hover:text-amber-500 transition-colors">Problems</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-amber-500 transition-colors">Contests</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-amber-500 transition-colors">Discuss</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-amber-500 transition-colors">Leaderboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-zinc-500 hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-amber-500 transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-amber-500 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-amber-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-zinc-500 hover:text-amber-500 transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-amber-500 transition-colors">Community</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-amber-500 transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-amber-500 transition-colors">Student Discount</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-400 text-sm">
                © {new Date().getFullYear()} CodeLab Clone. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-zinc-400">
                <Link href="#" className="hover:text-amber-500 transition-colors">Privacy</Link>
                <Link href="#" className="hover:text-amber-500 transition-colors">Terms</Link>
                <Link href="#" className="hover:text-amber-500 transition-colors">Cookies</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
