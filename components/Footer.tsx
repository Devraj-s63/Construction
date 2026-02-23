"use client";

import { Hammer, Send, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-24 pb-12" id="contact">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <div className="flex items-center space-x-2 mb-8">
                            <Hammer className="text-primary w-8 h-8" />
                            <span className="font-display font-bold text-xl tracking-tighter">
                                CONSTRUCTOR
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-8">
                            Global leaders in heavy engineering, infrastructure development,
                            and industrial mining projects. Built on precision, ethics, and
                            excellence.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-black transition-all"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h5 className="font-display font-bold mb-8 uppercase text-sm tracking-widest">
                            New York Office
                        </h5>
                        <p className="text-slate-400 text-sm mb-4">
                            123 Industrial Way, Suite 500
                            <br />
                            Manhattan, NY 10001
                        </p>
                        <p className="text-slate-400 text-sm">
                            +1 (212) 555-0198
                            <br />
                            ny@constructoreng.com
                        </p>
                    </div>

                    <div>
                        <h5 className="font-display font-bold mb-8 uppercase text-sm tracking-widest">
                            Boston Office
                        </h5>
                        <p className="text-slate-400 text-sm mb-4">
                            45 Engineering Road, Terminal 4
                            <br />
                            Boston, MA 02110
                        </p>
                        <p className="text-slate-400 text-sm">
                            +1 (617) 555-0244
                            <br />
                            boston@constructoreng.com
                        </p>
                    </div>

                    <div>
                        <h5 className="font-display font-bold mb-8 uppercase text-sm tracking-widest">
                            Newsletter
                        </h5>
                        <p className="text-slate-400 text-sm mb-4">
                            Subscribe for the latest industrial insights and project updates.
                        </p>
                        <form className="flex">
                            <input
                                className="bg-slate-800 border-none px-4 py-3 text-sm flex-grow focus:ring-1 focus:ring-primary outline-none"
                                placeholder="Email Address"
                                type="email"
                            />
                            <button className="bg-primary text-black px-4 py-3 hover:bg-yellow-500 transition-colors">
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-xs">
                        © 2024 Constructor Engineering. All rights reserved.
                    </p>
                    <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest text-slate-500">
                        <a className="hover:text-primary transition-colors" href="#">
                            Privacy Policy
                        </a>
                        <a className="hover:text-primary transition-colors" href="#">
                            Terms of Service
                        </a>
                        <a className="hover:text-primary transition-colors" href="#">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
