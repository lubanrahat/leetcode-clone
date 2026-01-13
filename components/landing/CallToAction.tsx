"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-16 md:px-16 md:py-20 text-center shadow-2xl"
        >
            {/* Abstract Shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl" />

          <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="relative z-10 text-amber-100 max-w-2xl mx-auto text-lg mb-10">
            Join the community of developers who have transformed their careers with LeetCode. Start solving today.
          </p>

          <Link href="/problems" className="relative z-10">
            <Button
              size="lg"
              variant="secondary"
              className="h-14 px-8 text-lg font-semibold bg-white text-orange-600 hover:bg-zinc-100 shadow-lg"
            >
              Get Started Now <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
