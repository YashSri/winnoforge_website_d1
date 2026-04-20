"use client";

import {
  BarChart3,
  Calendar,
  GraduationCap,
  Trophy,
  Users,
} from "lucide-react";

export default function InstitutionDashboard() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold font-varela text-foreground">
              Institution Admin Dashboard
            </h1>
            <p className="text-muted-foreground">
              Overview of campus performance and student engagement.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              className="px-5 py-2 rounded-full border border-border hover:bg-muted font-medium transition-colors"
            >
              Download Reports
            </button>
            <button
              type="button"
              className="bg-primary text-white px-5 py-2 rounded-full font-bold shadow-md hover:shadow-lg transition-all"
            >
              Manage Chapter
            </button>
          </div>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-card p-5 rounded-2xl border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Total Students
              </span>
            </div>
            <p className="text-3xl font-bold text-foreground">1,240</p>
            <p className="text-xs text-green-600 mt-1 flex items-center">
              ↑ 12% vs last sem
            </p>
          </div>
          <div className="bg-card p-5 rounded-2xl border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                <Trophy className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Projects Won
              </span>
            </div>
            <p className="text-3xl font-bold text-foreground">18</p>
            <p className="text-xs text-green-600 mt-1 flex items-center">
              Top 5% of Campuses
            </p>
          </div>
          <div className="bg-card p-5 rounded-2xl border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Active Programs
              </span>
            </div>
            <p className="text-3xl font-bold text-foreground">6</p>
            <p className="text-xs text-muted-foreground mt-1">
              Bootcamps & Hackathons
            </p>
          </div>
          <div className="bg-card p-5 rounded-2xl border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-100 rounded-lg text-green-600">
                <BarChart3 className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Avg. Skill Score
              </span>
            </div>
            <p className="text-3xl font-bold text-foreground">
              8.4<span className="text-lg text-muted-foreground">/10</span>
            </p>
            <p className="text-xs text-green-600 mt-1 flex items-center">
              ↑ 0.5 points
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Student Participation Chart (Mock) */}
            <section className="bg-card rounded-3xl p-6 border border-border shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold font-clash">
                  Student Participation Trend
                </h2>
                <select className="bg-muted px-3 py-1 rounded-lg text-sm border-none outline-none">
                  <option>Last 6 Months</option>
                  <option>Last Year</option>
                </select>
              </div>
              {/* Mock Chart Visualization */}
              <div className="h-64 flex items-end justify-between gap-2 px-4 relative">
                <div className="absolute inset-x-0 top-0 bottom-0 flex flex-col justify-between text-xs text-muted-foreground z-0 pointer-events-none">
                  <span>100%</span>
                  <span>75%</span>
                  <span>50%</span>
                  <span>25%</span>
                  <span>0%</span>
                </div>
                {[40, 65, 55, 80, 70, 90].map((h) => (
                  <div
                    key={`month-${h}`}
                    className="w-full bg-primary/20 hover:bg-primary/80 transition-colors rounded-t-lg relative group z-10"
                    style={{ height: `${h}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {h}%
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 px-4 text-sm text-muted-foreground font-medium">
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
              </div>
            </section>

            {/* Programs Running */}
            <section className="bg-card rounded-3xl p-6 border border-border shadow-sm">
              <h2 className="text-xl font-bold font-clash mb-6">
                Active Programs on Campus
              </h2>
              <div className="space-y-4">
                {[
                  {
                    name: "Full Stack Development Bootcamp",
                    participants: 120,
                    status: "Active",
                  },
                  {
                    name: "Entrepreneurship 101",
                    participants: 45,
                    status: "Active",
                  },
                  {
                    name: "Campus Hackathon 2025",
                    participants: 300,
                    status: "Upcoming",
                  },
                ].map((prog) => (
                  <div
                    key={prog.name}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-xl border border-border/50"
                  >
                    <div>
                      <h3 className="font-bold text-foreground">{prog.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {prog.participants} Participants
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${prog.status === "Active" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}
                    >
                      {prog.status}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            {/* Event Calendar */}
            <section className="bg-card rounded-3xl p-6 border border-border shadow-sm">
              <h2 className="text-lg font-bold font-clash mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Upcoming Events
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4 py-1">
                  <p className="text-xs font-bold text-primary mb-1">
                    Oct 24, 2:00 PM
                  </p>
                  <h4 className="font-bold text-sm">
                    Industry Talk: AI Future
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Guest: Dr. A. Smith
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4 py-1">
                  <p className="text-xs font-bold text-orange-500 mb-1">
                    Oct 28, 10:00 AM
                  </p>
                  <h4 className="font-bold text-sm">Hackathon Kickoff</h4>
                  <p className="text-xs text-muted-foreground">
                    Main Auditorium
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 py-1">
                  <p className="text-xs font-bold text-purple-500 mb-1">
                    Nov 05, 5:00 PM
                  </p>
                  <h4 className="font-bold text-sm">Mentor Sessions</h4>
                  <p className="text-xs text-muted-foreground">Online</p>
                </div>
              </div>
            </section>

            {/* Needs Attention */}
            <section className="bg-red-50 rounded-3xl p-6 border border-red-100">
              <h2 className="text-lg font-bold font-clash mb-4 text-red-800">
                Needs Attention
              </h2>
              <ul className="list-disc list-inside space-y-2 text-sm text-red-700">
                <li>Low attendance in "Design Thinking"</li>
                <li>Grant application due for Innovation Lab</li>
                <li>5 Mentor feedback reports pending</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
