"use client";

import { useState, useEffect } from "react";
import { Menu, X, Hammer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import MagneticButton from "./MagneticButton";

const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed w-full z-50 transition-all duration-500 py-6 px-6",
                scrolled
                    ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 py-4 shadow-sm"
                    : "bg-transparent text-white"
            )}
        >
            <nav className="container mx-auto flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center space-x-2 group cursor-pointer"
                >
                    <div className="relative">
                        <Hammer className="text-primary w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
                        <motion.div
                            className="absolute -inset-2 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                    </div>
                    <span className="font-display font-black text-2xl tracking-[ -0.05em]">
                        CONSTRUCTOR
                    </span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-2 font-bold text-[11px] uppercase tracking-[0.2em]">
                    {navLinks.map((link, i) => (
                        <MagneticButton key={link.name}>
                            <motion.a
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="px-5 py-2 hover:text-primary transition-colors block"
                            >
                                {link.name}
                            </motion.a>
                        </MagneticButton>
                    ))}

                    <div className="ml-4">
                        <MagneticButton>
                            <button
                                onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-primary hover:bg-yellow-500 text-black px-6 py-3 font-black text-[11px] uppercase transition-all glow-on-hover active-glow rounded-sm shadow-lg shadow-primary/20"
                            >
                                Get a Quote
                            </button>
                        </MagneticButton>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-foreground focus:outline-none"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute left-0 right-0 top-full md:hidden bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 shadow-2xl p-8"
                    >
                        <div className="flex flex-col space-y-6 text-center">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-black hover:text-primary transition-colors tracking-tighter"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="bg-primary w-full py-5 text-black font-black uppercase text-sm tracking-widest active-glow rounded-sm"
                            >
                                Get a Quote
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
