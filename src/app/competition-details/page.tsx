"use client";

import Navbar from "@/components/Navbar";
import CompetitionSchedule from "@/components/CompetitionSchedule";

export default function CompetitionDetailsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Competition Details
          </h1>
          <p className="text-xl md:text-2xl">
            Complete schedule and information for all SLIIT Codefest
            competitions
          </p>
        </div>
      </section>

      {/* Competition Schedule */}
      <CompetitionSchedule />

      
    </main>
  );
}
