"use client";

import { Users, MessageSquare, Calendar, Star, CheckCircle, Trophy } from "lucide-react";

export default function MentorDashboard() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold font-varela text-foreground">Mentor Dashboard</h1>
                        <p className="text-muted-foreground">Guide the next generation of innovators.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="bg-primary text-white px-5 py-2 rounded-full font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            Manage Schedule
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        {/* Assigned Teams */}
                        <section className="bg-card rounded-3xl p-6 border border-border shadow-sm">
                            <h2 className="text-xl font-bold font-clash mb-6">Assigned Teams</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[1, 2].map((i) => (
                                    <div key={i} className="p-5 border border-border rounded-2xl hover:border-primary/50 transition-colors group">
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                                                    {i === 1 ? "TA" : "TB"}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-foreground">Team {i === 1 ? "Alpha" : "Beta"}</h3>
                                                    <p className="text-xs text-muted-foreground">Project: {i === 1 ? "Smart Logistics" : "EdTech App"}</p>
                                                </div>
                                            </div>
                                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">On Track</span>
                                        </div>
                                        <div className="w-full bg-gray-100 rounded-full h-1.5 mb-4">
                                            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: i === 1 ? '75%' : '40%' }}></div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="flex-1 text-xs font-bold py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                                                View Progress
                                            </button>
                                            <button className="flex-1 text-xs font-bold py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors">
                                                Give Feedback
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Feedback Requests */}
                        <section className="bg-card rounded-3xl p-6 border border-border shadow-sm">
                            <h2 className="text-xl font-bold font-clash mb-6">Pending Reviews</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-xl">
                                    <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600">
                                        <MessageSquare className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-foreground">Idea Validation Request</h4>
                                        <p className="text-sm text-foreground/80 my-1">Team Alpha submitted a new pitch deck for the logistics problem.</p>
                                        <div className="flex gap-2 mt-2">
                                            <button className="text-xs bg-white border px-3 py-1 rounded shadow-sm hover:bg-gray-50">View Deck</button>
                                            <button className="text-xs bg-primary text-white px-3 py-1 rounded shadow-sm hover:bg-primary/90">Approve</button>
                                        </div>
                                    </div>
                                    <span className="text-xs text-muted-foreground">2h ago</span>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-xl">
                                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-foreground">Milestone Completion</h4>
                                        <p className="text-sm text-foreground/80 my-1">Team Beta completed the "User Research" phase.</p>
                                        <div className="flex gap-2 mt-2">
                                            <button className="text-xs bg-primary text-white px-3 py-1 rounded shadow-sm hover:bg-primary/90">Verify</button>
                                        </div>
                                    </div>
                                    <span className="text-xs text-muted-foreground">1d ago</span>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="space-y-8">
                        {/* Upcoming Sessions */}
                        <section className="bg-primary/5 rounded-3xl p-6 border border-primary/10">
                            <h2 className="text-lg font-bold font-clash mb-6">Upcoming Sessions</h2>
                            <div className="space-y-4">
                                <div className="flex gap-3 items-center">
                                    <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-sm min-w-[50px]">
                                        <span className="text-xs font-bold text-primary">OCT</span>
                                        <span className="text-lg font-bold text-foreground">25</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-foreground">Mentorship Call - Team Alpha</h4>
                                        <p className="text-xs text-muted-foreground">10:00 AM - 11:00 AM • Zoom</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <div className="flex flex-col items-center bg-white p-2 rounded-lg shadow-sm min-w-[50px]">
                                        <span className="text-xs font-bold text-primary">OCT</span>
                                        <span className="text-lg font-bold text-foreground">28</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-foreground">Workshop: MVP Basics</h4>
                                        <p className="text-xs text-muted-foreground">2:00 PM - 3:30 PM • Auditorium</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Top Mentor Badge */}
                        <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-6 border border-yellow-200 text-center relative overflow-hidden">
                            <Star className="w-24 h-24 text-yellow-500/20 absolute -top-4 -right-4 rotate-12" />
                            <Trophy className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
                            <h3 className="text-lg font-bold text-yellow-900">Star Mentor</h3>
                            <p className="text-sm text-yellow-800 mb-2">You are in the top 5% of mentors this month!</p>
                            <p className="text-xs text-yellow-700 font-medium">15 Hours Contributed</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
