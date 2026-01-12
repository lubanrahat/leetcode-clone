'use client';

import React, { useState, useEffect } from 'react';
import { Code2, Trophy, Users, Target, Zap, BookOpen, ChevronRight, Award, Globe, Sparkles, TrendingUp, Check, Play, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Code2,
      title: "Rich Problem Library",
      description: "From beginner-friendly to expert-level challenges covering algorithms, data structures, and system design.",
      color: "from-blue-500 to-cyan-500",
      link: "/problems"
    },
    {
      icon: BookOpen,
      title: "Interactive Learning",
      description: "Step-by-step solutions, video explanations, and comprehensive discussion forums to deepen your understanding.",
      color: "from-emerald-500 to-teal-500",
      link: "/learn"
    },
    {
      icon: Trophy,
      title: "Competitive Programming",
      description: "Participate in weekly contests, climb the leaderboard, and compete with developers worldwide.",
      color: "from-purple-500 to-pink-500",
      link: "/contests"
    },
    {
      icon: Award,
      title: "Skill Assessment",
      description: "Detailed analytics, progress tracking, and personalized recommendations to improve your coding skills.",
      color: "from-orange-500 to-red-500",
      link: "/analytics"
    },
    {
      icon: Target,
      title: "Interview Prep",
      description: "Company-specific questions, mock interviews, and tips from industry professionals to ace your interviews.",
      color: "from-rose-500 to-pink-600",
      link: "/interview"
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Connect with millions of developers, share solutions, and learn from the vibrant coding community.",
      color: "from-indigo-500 to-purple-500",
      link: "/community"
    }
  ];

  const stats = [
    { value: "5", label: "Active Users", gradient: "from-amber-500 to-orange-500" },
    { value: "10", label: "Coding Problems", gradient: "from-blue-500 to-purple-500" },
    { value: "20", label: "Solutions Submitted", gradient: "from-emerald-500 to-teal-500" },
    { value: "98%", label: "Success Rate", gradient: "from-purple-500 to-pink-500" }
  ];

  const testimonials = [
    { name: "Sarah Chen", role: "Software Engineer @ Google", text: "This platform helped me land my dream job. The interview prep section is invaluable!" },
    { name: "Marcus Johnson", role: "Full Stack Developer", text: "The best coding practice platform I've used. Love the community and contests!" },
    { name: "Priya Patel", role: "CS Student @ MIT", text: "Went from beginner to competitive programmer in 6 months. Highly recommend!" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-40">
        <div className={`relative z-10 max-w-7xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 backdrop-blur-sm mb-8 animate-pulse-slow">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-300">Master Algorithmic Thinking</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="inline-block bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent animate-gradient">
              Code
            </span>
            <br />
            <span className="text-white">Your Way to</span>
            <br />
            <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Excellence
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Practice coding challenges, sharpen your problem-solving skills, and prepare for technical interviews with our comprehensive platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50">
              <span className="relative z-10 flex items-center gap-2">
                Start Coding Free
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <button className="group px-8 py-4 rounded-xl font-bold text-lg border-2 border-slate-600 hover:border-slate-400 transition-all duration-300 hover:bg-slate-800/50 backdrop-blur-sm">
              <span className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </span>
            </button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
              <Users className="w-5 h-5 text-amber-400" />
              <span className="font-semibold">10 Developers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse animation-delay-1000"></div>
              <Target className="w-5 h-5 text-blue-400" />
              <span className="font-semibold">10 Problems</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse animation-delay-2000"></div>
              <Trophy className="w-5 h-5 text-purple-400" />
              <span className="font-semibold">Daily Contests</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-slate-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Everything You Need
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                to Succeed
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive tools and features designed to accelerate your coding journey
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`relative w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Link */}
                  <a href={feature.link} className="inline-flex items-center gap-2 text-amber-400 font-semibold group-hover:gap-4 transition-all">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-16 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative grid md:grid-cols-4 gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-5xl md:text-6xl font-black mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-400 font-semibold text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Loved by
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Developers Worldwide
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-amber-400">★</div>
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-16 overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}></div>
            </div>
            
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ready to Level Up?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Join millions of developers mastering algorithms and preparing for their dream jobs.
              </p>
              
              <button className="group px-10 py-5 bg-white text-orange-600 rounded-xl font-black text-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center gap-2">
                  Get Started Now
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-800 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p className="mb-4">© 2024 CodeMaster. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}