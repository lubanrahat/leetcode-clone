"use client";

import { motion } from "framer-motion";
import { Zap, BarChart2, Users, Trophy } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Online Compiler",
    description: "Run code instantly in the cloud. Supports 20+ languages with sub-second execution times.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: BarChart2,
    title: "Detailed Analytics",
    description: "Track your progress with insightful charts. Identify weak spots and optimize your learning path.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Users,
    title: "Vibrant Community",
    description: "Discuss solutions, share tips, and collaborate with millions of developers worldwide.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Trophy,
    title: "Daily Challenges",
    description: "Earn badges and climb the leaderboard with new coding challenges every single day.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50 flex justify-center items-center">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Everything you need to <span className="text-amber-500">excel</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-600 dark:text-zinc-400"
          >
            We've built a comprehensive platform designed to take you from beginner to interview-ready.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.bg} ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-amber-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
