"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Terminal } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-amber-400/20 dark:bg-amber-500/10 rounded-full blur-[120px] opacity-50 dark:opacity-30" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] opacity-30 dark:opacity-20" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-600 dark:text-amber-400 text-sm font-medium"
        >
          <Terminal className="w-4 h-4" />
          <span>The New Standard for Coding Interviews</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-600 dark:from-white dark:via-zinc-200 dark:to-zinc-500 bg-clip-text text-transparent"
        >
          Master Coding <br />
          <span className="text-amber-500 dark:text-amber-400">Interviews</span> with Confidence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed"
        >
          Join thousands of developers leveling up their skills with our premium coding platform. Real-world challenges, instant feedback, and a vibrant community.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/problems">
            <Button
              size="lg"
              className="w-full sm:w-auto text-base font-semibold h-12 px-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all hover:scale-105"
            >
              Start Solving <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base font-semibold h-12 px-8 border-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 dark:text-zinc-300 dark:border-zinc-700"
            >
              <Code2 className="w-4 h-4 mr-2" />
              Explore Problems
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
