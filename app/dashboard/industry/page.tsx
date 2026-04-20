"use client";

import { Briefcase, Users, TrendingUp, PlusCircle, Search, FileText } from "lucide-react";

export default function IndustryDashboard() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold font-varela text-foreground">Industry Partner Dashboard</h1>
                        <p className="text-muted-foreground">Manage your projects and discover talent.</p>
                    </div>
                    <button className="bg-primary text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
                        <PlusCircle className="w-5 h-5" />
                        Post New Problem
                    </button>
                </div>

                {/* Analytics Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {[
                        { label: "Active Projects", value: "12", icon: <FileText className="text-blue-500" /> },
                        { label: "Student Teams", value: "48", icon: <Users className="text-purple-500" /> },
                        { label: "Solutions Submitted", value: "35", icon: <TrendingUp className="text-green-500" /> },
                        { label: "Hires Made", value: "8", icon: <Briefcase className="text-orange-500" /> },
                    ].map((stat, i) => (
                        <div key={i} className="bg-card p-6 rounded-2xl border border-border shadow-sm flex items-start justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                                <h3 className="text-3xl font-bold text-foreground mt-2">{stat.value}</h3>
                            </div>
                            <div className="p-3 bg-muted rounded-xl">
                                {stat.icon}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Active Projects List */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold font-clash">Active Problem Statements</h2>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    className="pl-9 pr-4 py-2 rounded-full border border-border bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 transition-all shadow-sm group">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                                {i === 1 ? "AI-Driven Supply Chain Optimization" : i === 2 ? "Sustainable Packaging Solutions" : "Fintech Mobile App UX Redesign"}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mt-1">Posted on Oct {10 + i}, 2025 • Due Nov 30</p>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${i === 2 ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                                            {i === 2 ? "Reviewing" : "Active"}
                                        </span>
                                    </div>

                                    <div className="flex gap-4 text-sm text-foreground/80 mb-4">
                                        <span className="flex items-center gap-1.5">
                                            <Users className="w-4 h-4 text-muted-foreground" />
                                            {4 + i} Teams Working
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <FileText className="w-4 h-4 text-muted-foreground" />
                                            {12 + i * 2} Submissions
                                        </span>
                                    </div>

                                    <div className="flex gap-3">
                                        <button className="flex-1 py-2 rounded-lg border border-border hover:bg-muted font-medium text-sm transition-colors">
                                            View Submissions
                                        </button>
                                        <button className="flex-1 py-2 rounded-lg bg-primary/5 text-primary hover:bg-primary/10 font-bold text-sm transition-colors">
                                            Manage Project
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Top Talent / Hiring Pipeline */}
                    <div className="space-y-8">
                        <section className="bg-card rounded-3xl p-6 border border-border shadow-sm">
                            <h2 className="text-lg font-bold font-clash mb-6">Top Performing Teams</h2>
                            <div className="space-y-6">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-primary text-white flex items-center justify-center font-bold text-lg">
                                            T{i}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-foreground">Innovators {i}</h4>
                                            <p className="text-xs text-muted-foreground">Logistics Challenge • 98% Score</p>
                                        </div>
                                        <button className="text-xs font-bold text-primary border border-primary px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors">
                                            View
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-primary/5 rounded-3xl p-6 border border-primary/10">
                            <h2 className="text-lg font-bold font-clash mb-2">Hiring Pipeline</h2>
                            <p className="text-sm text-muted-foreground mb-4 w-11/12">Identify potential interns from top performing students.</p>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-sm p-3 bg-white rounded-xl shadow-sm">
                                    <span>Shortlisted</span>
                                    <span className="font-bold">12</span>
                                </div>
                                <div className="flex justify-between items-center text-sm p-3 bg-white rounded-xl shadow-sm">
                                    <span>Interviews Scheduled</span>
                                    <span className="font-bold">5</span>
                                </div>
                            </div>

                            <button className="w-full mt-4 py-2.5 bg-primary text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all">
                                Go to Hiring Portal
                            </button>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
