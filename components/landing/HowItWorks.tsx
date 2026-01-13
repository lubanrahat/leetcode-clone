"use client";

import { motion } from "framer-motion";
import { UserPlus, Code, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create an Account",
    description: "Sign up in seconds and customize your developer profile.",
  },
  {
    icon: Code,
    title: "Solve Problems",
    description: "Choose from thousands of questions and write code in our powerful IDE.",
  },
  {
    icon: CheckCircle,
    title: "Get Certified",
    description: "Master algorithms, pass tests, and earn certificates to showcase your skills.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden flex justify-center items-center">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-zinc-600 dark:text-zinc-400">Start your journey in 3 simple steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-zinc-200 dark:bg-zinc-800 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white dark:bg-zinc-900 border-4 border-amber-100 dark:border-zinc-800 flex items-center justify-center mb-6 shadow-xl z-10">
                <step.icon className="w-10 h-10 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
