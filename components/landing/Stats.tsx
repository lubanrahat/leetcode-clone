"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2M+", label: "Active Users" },
  { value: "5000+", label: "Coding Problems" },
  { value: "50+", label: "Supported Languages" },
  { value: "100M", label: "Submissions" },
];

export default function Stats() {
  return (
    <section className="py-20 border-y border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex justify-center items-center">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-orange-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
