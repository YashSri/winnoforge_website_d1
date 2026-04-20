"use client";

import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  ShieldCheck,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    {
      id: "student",
      label: "Student",
      icon: <User className="w-6 h-6" />,
      description: "Access courses, hackathons, and projects.",
    },
    {
      id: "industry",
      label: "Industry Partner",
      icon: <Briefcase className="w-6 h-6" />,
      description: "Post problems, hire talent, and view analytics.",
    },
    {
      id: "institution",
      label: "Institution",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "Manage campus chapters and view reports.",
    },
    {
      id: "mentor",
      label: "Mentor",
      icon: <User className="w-6 h-6" />, // Using User for now, could be specific
      description: "Guide teams, validate ideas, and provide feedback.",
    },
    {
      id: "admin",
      label: "Super Admin",
      icon: <ShieldCheck className="w-6 h-6" />,
      description: "Platform overview and management.",
    },
  ];

  const handleLogin = () => {
    if (selectedRole) {
      router.push(`/dashboard/${selectedRole}`);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-varela">
              Sign in to FORGE
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Select your role to access your dashboard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {roles.map((role) => (
              <button
                key={role.id}
                type="button"
                onClick={() => setSelectedRole(role.id)}
                className={`relative group cursor-pointer rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg ${
                  selectedRole === role.id
                    ? "border-primary bg-primary/5 ring-2 ring-primary ring-opacity-50"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <div
                  className={`p-3 rounded-full w-fit mb-4 transition-colors ${
                    selectedRole === role.id
                      ? "bg-primary text-white"
                      : "bg-muted text-foreground group-hover:bg-primary/10 group-hover:text-primary"
                  }`}
                >
                  {role.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground font-clash">
                  {role.label}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {role.description}
                </p>
                <div
                  className={`absolute top-6 right-6 transition-opacity ${selectedRole === role.id ? "opacity-100" : "opacity-0"}`}
                >
                  <div className="w-4 h-4 rounded-full bg-primary border-2 border-primary"></div>
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button
              type="button"
              onClick={handleLogin}
              disabled={!selectedRole}
              className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg tracking-wide transition-all duration-300 shadow-lg ${
                selectedRole
                  ? "bg-primary text-white hover:shadow-xl hover:scale-105"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
            >
              Continue to Dashboard
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
