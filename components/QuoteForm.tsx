"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Mail, MessageSquare, Briefcase, Phone, Loader2, CheckCircle } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function QuoteForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'Heavy Engineering',
        phone: '',
        details: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', service: 'Heavy Engineering', phone: '', details: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="quote" className="py-24 bg-white relative overflow-hidden">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-dot-pattern opacity-5 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-display font-black mb-4 text-slate-900">
                            Get a <span className="text-primary text-glow">Free Quote</span>
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Ready to start your next infrastructure project? Fill out the form below
                            and our team will get back to you with a detailed proposal.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-slate-900 p-8 md:p-12 shadow-2xl rounded-3xl relative overflow-hidden border border-white/5"
                    >
                        {/* Background Glow Effects */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-50"></div>

                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="relative z-10 text-center py-20"
                                >
                                    <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
                                    <h3 className="text-3xl font-display font-black text-white mb-4 uppercase">Message Sent!</h3>
                                    <p className="text-slate-400 text-lg mb-8">Thank you for your interest. Our team will review your proposal and get back to you shortly.</p>
                                    <MagneticButton>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="bg-white text-black px-8 py-3 font-black uppercase tracking-widest rounded-xl hover:bg-primary transition-colors"
                                        >
                                            Send Another
                                        </button>
                                    </MagneticButton>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        { key: 'name', label: "Full Name", icon: User, type: "text", placeholder: "John Doe" },
                                        { key: 'email', label: "Email Address", icon: Mail, type: "email", placeholder: "john@example.com" },
                                        { key: 'service', label: "Service Type", icon: Briefcase, type: "select", options: ["Heavy Engineering", "Infrastructure Design", "Project Management", "Consultation"] },
                                        { key: 'phone', label: "Phone Number", icon: Phone, type: "tel", placeholder: "+1 (555) 000-0000" }
                                    ].map((field, i) => (
                                        <motion.div
                                            key={field.label}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + (i * 0.1) }}
                                            className="space-y-2"
                                        >
                                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">{field.label}</label>
                                            <div className="relative group">
                                                <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors duration-300" />
                                                {field.type === 'select' ? (
                                                    <select
                                                        value={formData.service}
                                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                        className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 focus:border-primary outline-none transition-all rounded-xl appearance-none text-white"
                                                    >
                                                        {field.options?.map(opt => <option key={opt}>{opt}</option>)}
                                                    </select>
                                                ) : (
                                                    <input
                                                        required
                                                        type={field.type}
                                                        placeholder={field.placeholder}
                                                        value={formData[field.key as keyof typeof formData]}
                                                        onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                                                        className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 focus:border-primary outline-none transition-all rounded-xl text-white placeholder:text-slate-500"
                                                    />
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7 }}
                                        className="md:col-span-2 space-y-2"
                                    >
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-400">Project Details</label>
                                        <div className="relative group">
                                            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                                            <textarea
                                                required
                                                rows={4}
                                                placeholder="Tell us about your project requirements..."
                                                value={formData.details}
                                                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                                                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 focus:border-primary outline-none transition-all rounded-xl text-white placeholder:text-slate-500"
                                            ></textarea>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.8 }}
                                        className="md:col-span-2"
                                    >
                                        <MagneticButton>
                                            <button
                                                type="submit"
                                                disabled={status === 'loading'}
                                                className="w-full bg-primary hover:bg-yellow-500 text-black font-black uppercase py-5 rounded-xl flex items-center justify-center space-x-3 shadow-xl hover:shadow-primary/30 transition-all active-glow disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {status === 'loading' ? (
                                                    <Loader2 className="w-6 h-6 animate-spin" />
                                                ) : (
                                                    <>
                                                        <span>Send Message</span>
                                                        <Send className="w-5 h-5" />
                                                    </>
                                                )}
                                            </button>
                                        </MagneticButton>
                                        {status === 'error' && (
                                            <p className="text-red-500 text-xs font-bold mt-4 text-center uppercase tracking-widest">Failed to send message. Please try again.</p>
                                        )}
                                    </motion.div>
                                </form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

