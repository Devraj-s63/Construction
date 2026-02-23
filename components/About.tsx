"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="py-24" id="about">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                            About Constructor
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Pioneering Modern Heavy Engineering Solutions
                        </h2>
                        <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                            With over three decades of experience, Constructor has evolved
                            into a global leader in civil engineering and industrial
                            construction. We don't just build structures; we build the
                            foundations of society.
                        </p>
                        <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                            Our team of over 1,500 specialists works tirelessly to ensure that
                            every project meets the highest standards of safety, durability,
                            and innovation.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-10">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="text-4xl font-black text-primary mb-2">350+</div>
                                <div className="text-sm font-bold uppercase text-slate-500">
                                    Projects Completed
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <div className="text-4xl font-black text-primary mb-2">25+</div>
                                <div className="text-sm font-bold uppercase text-slate-500">
                                    Global Awards
                                </div>
                            </motion.div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary hover:bg-yellow-500 text-black px-10 py-4 font-bold uppercase transition-all"
                        >
                            Read Our Story
                        </motion.button>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4">
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            alt="Construction Worker"
                            className="w-full h-full object-cover rounded shadow-2xl"
                            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                        />
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            alt="Blueprint Planning"
                            className="w-full h-full object-cover rounded shadow-2xl mt-8"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdubGJYoucQZne03dgp5f5R7gwwTEXB5k17A&s"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
