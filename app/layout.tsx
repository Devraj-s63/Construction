import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Heavy Engineering & Construction Excellence | CONSTRUCTOR",
    description: "Building the future of infrastructure with precision and innovation.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
