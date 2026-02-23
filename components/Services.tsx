"use client";

import { motion } from "framer-motion";
import { HardHat, Pickaxe, Landmark, Map } from "lucide-react";
import MagneticButton from "./MagneticButton";

const services = [
    {
        title: "Civil Engineering",
        description: "Expert planning and execution for complex urban infrastructure projects.",
        icon: HardHat,
        link: "#",
    },
    {
        title: "Industrial Mining",
        description: "Specialized heavy machinery operations and resource extraction infrastructure.",
        icon: Pickaxe,
        link: "#",
    },
    {
        title: "Public Works",
        description: "Developing essential community facilities from bridges to energy plants.",
        icon: Landmark,
        link: "#",
    },
    {
        title: "Surveying & Mapping",
        description: "Precision land analysis using state-of-the-art LIDAR and drone technology.",
        icon: Map,
        link: "#",
    },
];

export default function Services() {
    return (
        <section className="py-24 bg-white" id="services">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-slate-800 p-8 shadow-xl border-b-4 border-primary group transition-all glow-on-hover active-glow rounded-xl"
                        >
                            <service.icon className="w-12 h-12 text-primary mb-6" />
                            <h3 className="font-display text-xl font-bold mb-4">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 font-body">
                                {service.description}
                            </p>
                            <MagneticButton>
                                <a
                                    className="text-primary font-black uppercase text-xs flex items-center group-hover:tracking-widest transition-all duration-300"
                                    href={service.link}
                                >
                                    Read More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </MagneticButton>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
