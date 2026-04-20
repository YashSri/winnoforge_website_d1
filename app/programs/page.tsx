"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Code, Rocket, Target, Zap, Award } from "lucide-react";
import Image from "next/image";

export default function ProgramsPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1 pt-24 pb-12">
                {/* Header */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-varela text-foreground mb-4">
                        Programs Designed for <span className="text-primary">Impact</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        From learning new skills to building startups, FORGE offers a structured pathway for every stage of your innovation journey.
                    </p>
                </section>

                {/* Skill Tracks */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold font-clash">Skill Tracks</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Full Stack Development", desc: "Master the MERN stack and build scalable web apps.", color: "bg-blue-500" },
                            { title: "Data Science & AI", desc: "Learn to analyze data and build predictive models.", color: "bg-purple-500" },
                            { title: "Product Design (UI/UX)", desc: "Create intuitive and beautiful user experiences.", color: "bg-pink-500" },
                        ].map((track, i) => (
                            <div key={i} className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-xl">
                                <div className={`h-2 ${track.color}`}></div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold font-clash mb-3 group-hover:text-primary transition-colors">{track.title}</h3>
                                    <p className="text-muted-foreground mb-6">{track.desc}</p>
                                    <button className="text-sm font-bold flex items-center gap-2 text-foreground group-hover:gap-3 transition-all">
                                        View Curriculum <span className="text-lg">→</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Innovation Challenges */}
                <section className="bg-black text-white py-20 mb-20">
                    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="p-2 bg-yellow-500/20 rounded-lg text-yellow-400">
                                <Target className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-bold font-clash">Innovation Challenges</h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                                <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Live Now</span>
                                <h3 className="text-3xl font-bold mt-4 mb-2">Smart City Hackathon 2025</h3>
                                <p className="text-gray-300 mb-6">Build solutions for urban mobility, waste management, and energy efficiency.</p>
                                <div className="flex gap-4">
                                    <div>
                                        <p className="text-sm text-gray-400">Prize Pool</p>
                                        <p className="text-xl font-bold">₹ 5,00,000</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Deadline</p>
                                        <p className="text-xl font-bold">Oct 30</p>
                                    </div>
                                </div>
                                <button className="mt-8 w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors">
                                    Register Now
                                </button>
                            </div>
                            <div className="grid gap-6">
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold">AI</div>
                                    <div>
                                        <h4 className="font-bold text-lg">AI for Good</h4>
                                        <p className="text-sm text-gray-400">Healthcare & Education specific problem statements.</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-bold">Ag</div>
                                    <div>
                                        <h4 className="font-bold text-lg">Agritech Revolution</h4>
                                        <p className="text-sm text-gray-400">Boosting farmer income through technology.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Startup Programs */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                            <Rocket className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold font-clash">Startup Acceleration</h2>
                    </div>
                    <div className="bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-3xl p-8 lg:p-12 border border-primary/10 flex flex-col lg:flex-row items-center gap-10">
                        <div className="lg:w-1/2">
                            <h3 className="text-3xl font-bold font-clash mb-4">FORGE Incubation Program</h3>
                            <p className="text-muted-foreground text-lg mb-6">
                                Transform your prototype into a market-ready product. Get access to seed funding, office space, and expert mentorship.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Up to ₹10 Lakhs Seed Funding",
                                    "Access to Industry Mentors",
                                    "Legal & Compliance Support",
                                    "Cloud Credits & Tech Perks"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 font-medium">
                                        <CheckIcon className="w-5 h-5 text-green-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all">
                                Apply for Incubation
                            </button>
                        </div>
                        <div className="lg:w-1/2 relative h-[300px] w-full bg-gray-200 rounded-2xl overflow-hidden">
                            {/* Placeholder for an image */}
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-bold text-xl bg-gray-100">
                                Startup Incubation Photo
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    )
}
