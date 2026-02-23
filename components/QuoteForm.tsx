"use client";

import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, Briefcase } from "lucide-react";

export default function QuoteForm() {
    return (
        <section id="quote" className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
                            Get a <span className="text-primary">Free Quote</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                            Ready to start your next infrastructure project? Fill out the form below 
                            and our team will get back to you with a detailed proposal.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white dark:bg-slate-800 p-8 md:p-12 shadow-2xl rounded-2xl relative overflow-hidden"
                    >
                        {/* Background Glow Effect */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50"></div>

                        <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                                    <input 
                                        type="text" 
                                        placeholder="John Doe"
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary dark:focus:border-primary outline-none transition-all rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                                    <input 
                                        type="email" 
                                        placeholder="john@example.com"
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary dark:focus:border-primary outline-none transition-all rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Service Type</label>
                                <div className="relative group">
                                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                                    <select 
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary dark:focus:border-primary outline-none transition-all rounded-lg appearance-none"
                                    >
                                        <option>Heavy Engineering</option>
                                        <option>Infrastructure Design</option>
                                        <option>Project Management</option>
                                        <option>Consultation</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
                                <input 
                                    type="tel" 
                                    placeholder="+1 (555) 000-0000"
                                    className="w-full px-4 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary dark:focus:border-primary outline-none transition-all rounded-lg"
                                />
                            </div>

                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Project Details</label>
                                <div className="relative group">
                                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                                    <textarea 
                                        rows={4}
                                        placeholder="Tell us about your project requirements..."
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary dark:focus:border-primary outline-none transition-all rounded-lg"
                                    ></textarea>
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-primary hover:bg-yellow-500 text-black font-black uppercase py-5 rounded-lg flex items-center justify-center space-x-3 shadow-xl hover:shadow-primary/20 transition-all active-glow"
                                >
                                    <span>Send Message</span>
                                    <Send className="w-5 h-5" />
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
