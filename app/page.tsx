import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Page() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Projects />
            <Blog />
            <Footer />
        </main>
    );
}
