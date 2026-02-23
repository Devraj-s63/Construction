"use client";

import { motion } from "framer-motion";

const posts = [
    {
        title: "Sustainable Materials in Heavy Infrastructure",
        date: "October 24, 2023",
        category: "Civil Engineering",
        image: "https://images.unsplash.com/photo-1517089535864-dc81d77827f3?q=80&w=2070&auto=format&fit=crop",
        excerpt: "How new composite materials are changing the longevity and footprint of modern bridges...",
    },
    {
        title: "The Impact of AI on Site Management",
        date: "October 18, 2023",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
        excerpt: "Real-time data processing is revolutionizing how we handle supply chains on large sites...",
    },
    {
        title: "Safety Standards for 2024 and Beyond",
        date: "October 12, 2023",
        category: "Safety",
        image: "https://images.unsplash.com/photo-1504159506876-f8338247a14a?q=80&w=2070&auto=format&fit=crop",
        excerpt: "A deep dive into upcoming regulatory changes in the industrial construction sector...",
    },
];

export default function Blog() {
    return (
        <section className="py-24 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="flex items-end justify-between mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                            Recent Blogs
                        </span>
                        <h2 className="font-display text-4xl font-bold">Latest News & Updates</h2>
                    </motion.div>
                    <button className="hidden md:block border-b-2 border-primary pb-2 font-bold uppercase text-sm tracking-widest hover:text-primary transition-colors">
                        View All Posts
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post, i) => (
                        <motion.article
                            key={post.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="overflow-hidden rounded-lg mb-6 h-64">
                                <img
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    src={post.image}
                                />
                            </div>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                                {post.date} | {post.category}
                            </span>
                            <h3 className="font-display text-xl font-bold mt-2 mb-4 group-hover:text-primary transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">
                                {post.excerpt}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
