"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Image with Parallax-like scaling */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <img
                    alt="Construction Site"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                />
                <div className="absolute inset-0 hero-gradient"></div>
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center space-x-2 text-primary mb-4"
                    >
                        <div className="h-1 w-12 bg-primary"></div>
                        <span className="uppercase tracking-widest font-bold text-sm">
                            Engineering Excellence
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-display text-5xl md:text-7xl font-black text-white leading-tight mb-8"
                    >
                        Building the Future of Infrastructure
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl"
                    >
                        Leading the heavy engineering industry with innovative solutions,
                        precision craftsmanship, and a commitment to sustainable
                        infrastructure.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                    >
                        <button className="bg-primary hover:bg-yellow-500 text-black px-8 py-4 font-bold uppercase flex items-center justify-center transition-all group">
                            Our Projects
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 font-bold uppercase transition-all backdrop-blur-sm">
                            Learn More
                        </button>
                    </motion.div>
                </div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <ChevronDown className="text-white opacity-50 w-10 h-10" />
            </motion.div>
        </section>
    );
}
