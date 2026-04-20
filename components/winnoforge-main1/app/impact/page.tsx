"use client";

import { Building, Globe, TrendingUp, Users } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        {/* Header */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-varela text-foreground mb-4">
            Our <span className="text-primary">Impact</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Measuring the difference we make in the innovation landscape, one
            student and one startup at a time.
          </p>
        </section>

        {/* Big Numbers */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Students Trained",
                value: "25,000+",
                icon: <Users className="text-blue-500" />,
              },
              {
                label: "Startups Launched",
                value: "100+",
                icon: <TrendingUp className="text-green-500" />,
              },
              {
                label: "Partner Colleges",
                value: "50+",
                icon: <Building className="text-orange-500" />,
              },
              {
                label: "Lives Impacted",
                value: "1M+",
                icon: <Globe className="text-purple-500" />,
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-8 bg-card rounded-3xl border border-border shadow-lg text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-12 h-12 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold font-clash text-foreground mb-2">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stories of Change */}
        <section className="bg-muted/30 py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold font-clash mb-12 text-center">
              Success Stories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Story 1 */}
              <div className="bg-background rounded-3xl overflow-hidden shadow-sm border border-border">
                <div className="h-48 bg-gray-200 w-full relative">
                  {/* Placeholder */}
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    Startup
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-2">
                    AgriTech Drone Soln.
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Founded by students from rural India, this startup uses
                    drones to monitor crop health, increasing yield by 30%.
                  </p>
                  <button type="button" className="text-sm font-bold underline">
                    Read Story
                  </button>
                </div>
              </div>

              {/* Story 2 */}
              <div className="bg-background rounded-3xl overflow-hidden shadow-sm border border-border">
                <div className="h-48 bg-gray-200 w-full relative">
                  {/* Placeholder */}
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    Placement
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-2">
                    From Campus to Google
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Sarah, a FORGE fellow, cracked the Google interview after
                    working on 3 live industry projects.
                  </p>
                  <button type="button" className="text-sm font-bold underline">
                    Read Story
                  </button>
                </div>
              </div>

              {/* Story 3 */}
              <div className="bg-background rounded-3xl overflow-hidden shadow-sm border border-border">
                <div className="h-48 bg-gray-200 w-full relative">
                  {/* Placeholder */}
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-green-600 uppercase tracking-wider">
                    Institutional
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-2">
                    Best Innovation Hub
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    City Engineering College transformed its campus into an
                    innovation hub with FORGE support.
                  </p>
                  <button type="button" className="text-sm font-bold underline">
                    Read Story
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
