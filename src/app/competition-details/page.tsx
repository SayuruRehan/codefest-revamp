"use client";

import Navbar from "@/components/Navbar";
import CompetitionSchedule from "@/components/CompetitionSchedule";
import { useState } from "react";
import { contests } from "@/data/contests";
import ContestCard from "@/components/ContestCard";
import FadeInSection from "@/components/FadeInSection";

export default function CompetitionDetailsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

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

      {/* Competition Categories */}
      <FadeInSection delay={100}>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start flex-wrap gap-x-3 gap-y-2">
              <h2 className="text-3xl font-bold mb-12 text-black">
                Competition Categories
              </h2>
              {["All", "Schools", "Tertiary"].map((category) => (
                <button
                  key={category}
                  className={`${
                    selectedCategory === category
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } border border-black rounded-4xl px-4 py-1 cursor-pointer`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 mt-6">
              {contests
                .filter(
                  (contest) =>
                    selectedCategory === "All" ||
                    contest.category === selectedCategory
                )
                .map((contest) => (
                  <ContestCard key={contest.name} contest={contest} />
                ))}
            </div>
          </div>
        </section>
      </FadeInSection>
    </main>
  );
}
