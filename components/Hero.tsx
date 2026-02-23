"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Image with Parallax-like scaling */}
            <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <img
                    alt="Construction Site"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                />
                <div className="absolute inset-0 hero-gradient opacity-80"></div>
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center space-x-2 text-primary mb-6"
                    >
                        <div className="h-0.5 w-12 bg-primary"></div>
                        <span className="uppercase tracking-[0.3em] font-black text-xs">
                            Established 1994
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="font-display text-6xl md:text-8xl font-black text-white leading-[0.9] mb-10 tracking-tighter"
                    >
                        ENGINEERING <br /> <span className="text-primary text-glow">REIMAGINED</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-medium"
                    >
                        Building the foundations of tomorrow with precision,
                        innovation, and a legacy of heavy engineering excellence.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-start"
                    >
                        <MagneticButton>
                            <button className="bg-primary hover:bg-yellow-500 text-black px-10 py-5 font-black uppercase flex items-center justify-center transition-all group glow-on-hover active-glow rounded-sm">
                                Explore Work
                                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </MagneticButton>

                        <MagneticButton>
                            <button
                                onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                                className="border-2 border-white/30 text-white hover:border-white hover:bg-white/10 px-10 py-5 font-black uppercase transition-all backdrop-blur-md glow-on-hover active-glow rounded-sm"
                            >
                                Get a Quote
                            </button>
                        </MagneticButton>
                    </motion.div>
                </div>
            </div>

            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer group"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <div className="flex flex-col items-center">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-2 group-hover:text-primary transition-colors">Scroll</span>
                    <ChevronDown className="text-white w-6 h-6 opacity-30 group-hover:opacity-100 group-hover:text-primary transition-all" />
                </div>
            </motion.div>
        </section>
    );
}
