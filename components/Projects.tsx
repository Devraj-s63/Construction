"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import MagneticButton from "./MagneticButton";
import Link from "next/link";
import { projects } from "@/lib/project-data";

const filters = ["All", "Current Projects", "Completed"];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [showAll, setShowAll] = useState(false);

    const filteredProjects = projects.filter(
        (p) => activeFilter === "All" || p.category === activeFilter
    );

    const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

    return (
        <section className="py-24 bg-white text-slate-900 relative overflow-hidden" id="projects">
            {/* Soft Glow Blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[100px] animate-mesh pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-[130px] animate-mesh pointer-events-none" style={{ animationDelay: "-5s" }}></div>
            <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-yellow-400/10 rounded-full blur-[80px] animate-mesh pointer-events-none" style={{ animationDelay: "-8s" }}></div>

            <div className="container mx-auto px-6 relative z-10">
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
                                onClick={() => {
                                    setActiveFilter(f);
                                    setShowAll(false);
                                }}
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
                    <AnimatePresence mode="popLayout">
                        {visibleProjects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
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
                                    <h4 className="font-display text-2xl font-black tracking-tight leading-none mb-6 text-white">
                                        {project.title}
                                    </h4>
                                    <MagneticButton>
                                        <Link href={`/projects/${project.slug}`}>
                                            <span className="bg-white text-black px-6 py-3 text-[10px] font-black uppercase tracking-widest rounded-sm self-start inline-block">
                                                View Project
                                            </span>
                                        </Link>
                                    </MagneticButton>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length > 4 && (
                    <div className="mt-16 text-center">
                        <MagneticButton>
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="bg-slate-900 hover:bg-slate-800 text-white px-12 py-5 font-black uppercase tracking-widest transition-all rounded-xl shadow-xl hover:shadow-primary/20"
                            >
                                {showAll ? "Show Less" : "View More Projects"}
                            </button>
                        </MagneticButton>
                    </div>
                )}
            </div>
        </section>
    );
}
