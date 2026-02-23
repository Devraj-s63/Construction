"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import MagneticButton from "./MagneticButton";

const filters = ["All", "Current Projects", "Completed"];

const projects = [
    {
        title: "Pharmaceutical Plant Alpha",
        category: "Current Projects",
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Central Data Hub",
        category: "Completed",
        image: "https://images.unsplash.com/photo-1558441719-ffb4d4500a67?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Metro Line Extension",
        category: "Current Projects",
        image: "https://images.unsplash.com/photo-1545459720-aac273a27b3d?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Iron Ore Facility",
        category: "Completed",
        image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop",
    },
];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = projects.filter(
        (p) => activeFilter === "All" || p.category === activeFilter
    );

    return (
        <section className="py-24 bg-gray-950 text-white" id="projects">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                            Our Portfolio
                        </span>
                        <h2 className="font-display text-4xl font-bold">Recent Projects</h2>
                    </motion.div>

                    <div className="flex space-x-8 text-sm font-bold uppercase tracking-widest overflow-x-auto pb-2">
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className={cn(
                                    "whitespace-nowrap pb-2 transition-colors border-b-2",
                                    activeFilter === f
                                        ? "text-primary border-primary"
                                        : "text-gray-400 border-transparent hover:text-white"
                                )}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AnimatePresence>
                        {filteredProjects.map((project, i) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="group relative overflow-hidden h-[450px] glow-on-hover active-glow rounded-2xl"
                            >
                                <img
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    src={project.image}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                                    <span className="text-primary font-black text-[10px] uppercase mb-2 tracking-[0.2em]">
                                        {project.category}
                                    </span>
                                    <h4 className="font-display text-2xl font-black tracking-tight leading-none mb-6">
                                        {project.title}
                                    </h4>
                                    <MagneticButton>
                                        <button className="bg-white text-black px-6 py-3 text-[10px] font-black uppercase tracking-widest rounded-sm self-start">
                                            View Project
                                        </button>
                                    </MagneticButton>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
