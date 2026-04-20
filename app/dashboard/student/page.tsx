"use client";

import { User, BookOpen, Rocket, Users, MessageSquare, Award, Lightbulb, Briefcase } from "lucide-react";
import Link from "next/link";

export default function StudentDashboard() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold font-varela text-foreground">Student Dashboard</h1>
                        <p className="text-muted-foreground">Welcome back! Here's what's happening with your projects.</p>
                    </div>
                    <Link href="/profile" className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors">
                        <User className="w-5 h-5" />
                        <span>My Profile</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Active Programs */}
                        <section className="bg-card rounded-3xl p-6 border border-border shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold font-clash flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-primary" />
                                    Active Programs
                                </h2>
                                <Link href="/programs" className="text-primary text-sm font-medium hover:underline">View All</Link>
                            </div>
                            <div className="space-y-4">
                                {/* Program Card 1 */}
                                <div className="bg-muted/30 p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-semibold text-lg">AI & Data Science Bootcamp</h3>
                                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">Ongoing</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                                        <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Module 4 of 6: Neural Networks</p>
                                </div>
                                {/* Program Card 2 */}
                                <div className="bg-muted/30 p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-semibold text-lg">HackTheFuture 2025</h3>
                                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">Registered</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-2">Team formation phase ends in 2 days.</p>
                                    <button className="text-sm border border-primary text-primary px-3 py-1 rounded-full hover:bg-primary hover:text-white transition-colors">Find Teammates</button>
                                </div>
                            </div>
                        </section>

                        {/* Live Industry Projects */}
                        <section className="bg-card rounded-3xl p-6 border border-border shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold font-clash flex items-center gap-2">
                                    <Rocket className="w-5 h-5 text-primary" />
                                    Live Industry Projects
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border border-border rounded-xl p-4 hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                                        <Briefcase className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <h3 className="font-semibold text-foreground">Smart Logistics Dashboard</h3>
                                    <p className="text-xs text-muted-foreground mt-1">Sponsored by LogisticsCo</p>
                                    <div className="mt-3 flex items-center gap-2 text-xs font-medium">
                                        <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded">In Progress</span>
                                        <span className="text-muted-foreground">Due: Oct 24</span>
                                    </div>
                                </div>
                                <div className="border border-dashed border-border rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-muted/20 transition-colors cursor-pointer group">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                        <Users className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-foreground text-sm">Join a New Project</h3>
                                    <p className="text-xs text-muted-foreground mt-1">Browse available problem statements</p>
                                </div>
                            </div>
                        </section>

                        {/* Team & Collaboration */}
                        <section className="bg-card rounded-3xl p-6 border border-border shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold font-clash flex items-center gap-2">
                                    <Users className="w-5 h-5 text-primary" />
                                    My Team
                                </h2>
                                <button className="p-1 hover:bg-muted rounded-full">
                                    <MessageSquare className="w-5 h-5 text-muted-foreground" />
                                </button>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                                            U{i}
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                                        +2
                                    </div>
                                </div>
                                <div className="text-sm">
                                    <p className="font-medium text-foreground">Team Alpha</p>
                                    <p className="text-muted-foreground text-xs">Working on: Smart Logistics</p>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Stats / Progress */}
                        <section className="bg-primary/5 rounded-3xl p-6 border border-primary/10">
                            <h2 className="text-lg font-bold font-clash mb-4">Your Progress</h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white rounded-lg shadow-sm">
                                        <Award className="w-5 h-5 text-yellow-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-foreground">Level 4 Innovator</p>
                                        <p className="text-xs text-muted-foreground">1200 / 2000 XP</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white rounded-lg shadow-sm">
                                        <Lightbulb className="w-5 h-5 text-yellow-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-foreground">2 Ideas Submitted</p>
                                        <p className="text-xs text-muted-foreground">1 Validated</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Mentor Feedback */}
                        <section className="bg-card rounded-3xl p-6 border border-border shadow-sm">
                            <h2 className="text-lg font-bold font-clash mb-4">Mentor Feedback</h2>
                            <div className="space-y-4">
                                <div className="p-3 bg-muted/30 rounded-xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                                        <span className="text-sm font-semibold">Dr. Sarah Lee</span>
                                        <span className="text-xs text-muted-foreground ml-auto">2h ago</span>
                                    </div>
                                    <p className="text-sm text-foreground/80">"Great progress on the MVP. Focus on the user onboarding flow for the next sprint."</p>
                                </div>
                            </div>
                            <button className="w-full mt-4 py-2 text-sm text-primary font-medium hover:bg-primary/5 rounded-lg transition-colors">
                                Request Session
                            </button>
                        </section>

                        {/* Startup Ideas Tracker */}
                        <section className="bg-card rounded-3xl p-6 border border-border shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-bold font-clash">Idea Tracker</h2>
                                <button className="text-primary hover:bg-primary/10 p-1 rounded">
                                    <span className="text-xl font-bold">+</span>
                                </button>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-center justify-between text-sm p-2 hover:bg-muted/50 rounded-lg transition-colors cursor-pointer">
                                    <span>Sustainable Packaging</span>
                                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                                </li>
                                <li className="flex items-center justify-between text-sm p-2 hover:bg-muted/50 rounded-lg transition-colors cursor-pointer">
                                    <span>EdTech Platform</span>
                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
