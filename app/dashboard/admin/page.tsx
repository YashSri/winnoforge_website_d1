"use client";

import { BarChart, Users, Building, Activity, Layers, Globe, Settings } from "lucide-react";

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold font-varela text-foreground">Super Admin Overview</h1>
                        <p className="text-muted-foreground">Platform-wide metrics and management.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="p-2 rounded-full border border-border hover:bg-muted transition-colors">
                            <Settings className="w-5 h-5 text-foreground" />
                        </button>
                    </div>
                </div>

                {/* Global Impact Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <div className="bg-black text-white p-6 rounded-2xl shadow-lg">
                        <div className="flex items-center gap-2 mb-2 opacity-80">
                            <Users className="w-4 h-4" />
                            <span className="text-sm font-medium">Total Students</span>
                        </div>
                        <p className="text-3xl font-bold">12,450</p>
                        <div className="w-full bg-white/20 h-1 mt-4 rounded-full overflow-hidden">
                            <div className="bg-green-400 h-full w-[70%]"></div>
                        </div>
                    </div>
                    <div className="bg-white border border-border p-6 rounded-2xl shadow-sm">
                        <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                            <Building className="w-4 h-4" />
                            <span className="text-sm font-medium">Partner Campus</span>
                        </div>
                        <p className="text-3xl font-bold text-foreground">24</p>
                        <span className="text-xs text-green-600 font-bold bg-green-100 px-2 py-0.5 rounded-full mt-2 inline-block">+3 this month</span>
                    </div>
                    <div className="bg-white border border-border p-6 rounded-2xl shadow-sm">
                        <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                            <Activity className="w-4 h-4" />
                            <span className="text-sm font-medium">Startups Incubated</span>
                        </div>
                        <p className="text-3xl font-bold text-foreground">62</p>
                        <span className="text-xs text-blue-600 font-bold bg-blue-100 px-2 py-0.5 rounded-full mt-2 inline-block">12 funded</span>
                    </div>
                    <div className="bg-white border border-border p-6 rounded-2xl shadow-sm">
                        <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                            <Layers className="w-4 h-4" />
                            <span className="text-sm font-medium">Industry Projects</span>
                        </div>
                        <p className="text-3xl font-bold text-foreground">148</p>
                        <span className="text-xs text-green-600 font-bold bg-green-100 px-2 py-0.5 rounded-full mt-2 inline-block">90% Completion Rate</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        {/* Live Map / Campus Overview (Placeholder) */}
                        <section className="bg-card rounded-3xl p-6 border border-border shadow-sm min-h-[400px] flex flex-col">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold font-clash flex items-center gap-2">
                                    <Globe className="w-5 h-5 text-primary" />
                                    Campus Network Activity
                                </h2>
                            </div>
                            <div className="flex-1 bg-muted/20 rounded-2xl border border-dashed border-border flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
                                <div className="text-center z-10">
                                    <Globe className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                                    <p className="text-muted-foreground">Interactive Geographical Map Placeholder</p>
                                    <p className="text-xs text-muted-foreground/60">(Would show live activity across India)</p>
                                </div>
                                {/* Mock Hotspots */}
                                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/60 rounded-full animate-ping"></div>
                                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full"></div>

                                <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-primary/60 rounded-full animate-ping delay-700"></div>
                                <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-primary rounded-full"></div>
                            </div>
                        </section>

                        {/* Recent Notifications / System Health */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section className="bg-card rounded-3xl p-6 border border-border shadow-sm">
                                <h2 className="text-lg font-bold font-clash mb-4">Pending Approvals</h2>
                                <div className="space-y-4">
                                    {[
                                        { type: "Institute", name: "Tech University of Valley", action: "Chapter Request" },
                                        { type: "Industry", name: "AutoCorp Global", action: "Partner Account" },
                                        { type: "Mentor", name: "John Doe (Ex-Google)", action: "Profile Verification" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                                            <div>
                                                <p className="font-bold text-sm">{item.name}</p>
                                                <p className="text-xs text-muted-foreground">{item.type} • {item.action}</p>
                                            </div>
                                            <button className="text-xs font-bold text-primary hover:underline">Review</button>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="bg-card rounded-3xl p-6 border border-border shadow-sm">
                                <h2 className="text-lg font-bold font-clash mb-4">Top Performing Campuses</h2>
                                <div className="space-y-4">
                                    {[
                                        { name: "IIT Madras Chapter", score: 98 },
                                        { name: "BITS Pilani Chapter", score: 95 },
                                        { name: "VIT Vellore Chapter", score: 92 },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="font-bold text-muted-foreground text-sm w-4">{i + 1}</div>
                                            <div className="flex-1">
                                                <p className="font-medium text-sm">{item.name}</p>
                                                <div className="w-full bg-gray-100 h-1.5 rounded-full mt-1">
                                                    <div className="bg-primary h-1.5 rounded-full" style={{ width: `${item.score}%` }}></div>
                                                </div>
                                            </div>
                                            <span className="font-bold text-sm">{item.score}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Quick Actions */}
                        <section className="bg-card rounded-3xl p-6 border border-border shadow-sm">
                            <h2 className="text-lg font-bold font-clash mb-4">Quick Actions</h2>
                            <div className="grid grid-cols-2 gap-3">
                                <button className="p-4 bg-muted/40 hover:bg-muted rounded-xl flex flex-col items-center justify-center gap-2 text-center transition-colors">
                                    <Users className="w-5 h-5 text-foreground" />
                                    <span className="text-xs font-bold">Add User</span>
                                </button>
                                <button className="p-4 bg-muted/40 hover:bg-muted rounded-xl flex flex-col items-center justify-center gap-2 text-center transition-colors">
                                    <Building className="w-5 h-5 text-foreground" />
                                    <span className="text-xs font-bold">New Chapter</span>
                                </button>
                                <button className="p-4 bg-muted/40 hover:bg-muted rounded-xl flex flex-col items-center justify-center gap-2 text-center transition-colors">
                                    <Layers className="w-5 h-5 text-foreground" />
                                    <span className="text-xs font-bold">Create Program</span>
                                </button>
                                <button className="p-4 bg-muted/40 hover:bg-muted rounded-xl flex flex-col items-center justify-center gap-2 text-center transition-colors">
                                    <BarChart className="w-5 h-5 text-foreground" />
                                    <span className="text-xs font-bold">Reports</span>
                                </button>
                            </div>
                        </section>

                        <section className="bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-3xl p-6 border border-primary/20">
                            <h2 className="text-lg font-bold font-clash mb-3 text-primary">System Refresh</h2>
                            <p className="text-xs text-muted-foreground mb-4">Last data sync was 2 hours ago. Update to see real-time metrics.</p>
                            <button className="w-full bg-primary text-white font-bold text-sm py-2 rounded-lg shadow-md hover:bg-primary/90 transition-colors">
                                Sync Data Now
                            </button>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
