"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "@/lib/project-data";
import { ArrowLeft, Calendar, User, Briefcase, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectPage() {
    const params = useParams();
    const project = projects.find(p => p.slug === params.slug);

    if (!project) return <div>Project not found</div>;

    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
                </motion.div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link href="/#projects" className="inline-flex items-center text-primary font-black uppercase tracking-widest text-xs mb-8 hover:text-white transition-colors">
                            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Projects
                        </Link>
                        <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-6 uppercase tracking-tighter">
                            {project.title}
                        </h1>
                        <span className="bg-primary text-black px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                            {project.category}
                        </span>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-16">
                        {/* Main Info */}
                        <div className="lg:col-span-2 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-display font-black text-slate-900 mb-6 uppercase tracking-tight">Project Overview</h2>
                                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                                    {project.description}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="grid sm:grid-cols-2 gap-8"
                            >
                                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                                    <Calendar className="w-8 h-8 text-primary mb-4" />
                                    <h4 className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">Timeline</h4>
                                    <p className="text-slate-900 font-black uppercase tracking-tight">{project.timeline}</p>
                                </div>
                                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                                    <User className="w-8 h-8 text-primary mb-4" />
                                    <h4 className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">Client</h4>
                                    <p className="text-slate-900 font-black uppercase tracking-tight">{project.client}</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-slate-900 p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                                <Briefcase className="w-10 h-10 text-primary mb-6" />
                                <h3 className="text-2xl font-display font-black mb-6 uppercase tracking-tight">Services Provided</h3>
                                <div className="space-y-4">
                                    {project.services.map((service) => (
                                        <div key={service} className="flex items-center space-x-3 text-slate-300">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                            <span className="text-sm font-bold tracking-tight">{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="p-8 border-2 border-slate-100 rounded-3xl text-center"
                            >
                                <h3 className="text-xl font-display font-black text-slate-900 mb-4 uppercase tracking-tight">Ready to build?</h3>
                                <p className="text-slate-500 text-sm mb-8 font-medium">Get a personalized quote for your next infrastructure project.</p>
                                <MagneticButton className="w-full">
                                    <Link href="/#quote" className="w-full bg-primary text-black font-black uppercase py-4 rounded-xl inline-block shadow-lg hover:shadow-primary/30 transition-shadow">
                                        Get a Quote
                                    </Link>
                                </MagneticButton>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
