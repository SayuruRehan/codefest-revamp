"use client";

import FadeInSection from "@/components/FadeInSection";
import { useState } from "react";

const scheduleData = [
  {
    competition: "Coding Contest Primary",
    regOpen: "Registration Open",
    regClose: "15th August 2025",
    firstRound: "22nd August 2025",
    finalRound: "4th September 2025",
  },
  {
    competition: "Coding Contest Junior",
    regOpen: "Registration Open",
    regClose: "15th August 2025",
    firstRound: "22nd August 2025",
    finalRound: "4th September 2025",
  },
  {
    competition: "Coding Contest Senior",
    regOpen: "Registration Open",
    regClose: "15th August 2025",
    firstRound: "22nd August 2025",
    finalRound: "4th September 2025",
  },
  {
    competition: "ICT Quiz",
    regOpen: "Registration Open",
    regClose: "15th August 2025",
    firstRound: "8th August 2025",
    finalRound: "4th September 2025",
  },
  {
    competition: "AI competition",
    regOpen: "Registration Open",
    regClose: "15th August 2025",
    firstRound: "22nd August 2025",
    finalRound: "4th September 2025",
  },
  {
    competition: "Algothon",
    regOpen: "Registration Open",
    regClose: "18th July 2025",
    firstRound: "25th July 2025",
    finalRound: "22nd August 2025",
  },
  {
    competition: "Designation",
    regOpen: "Registration Open",
    regClose: "25th July 2025",
    firstRound: "1st August 2025",
    finalRound: "2nd September 2025",
  },
  {
    competition: "DevQuest",
    regOpen: "Registration Open",
    regClose: "To be announced",
    firstRound: "To be announced",
    finalRound: "To be announced",
  },
  {
    competition: "Datathon",
    regOpen: "Registration Open",
    regClose: "To be announced",
    firstRound: "26th July 2025",
    finalRound: "23rd August 2025",
  },
  {
    competition: "Capture the Flag",
    regOpen: "Registration Open",
    regClose: "13th August 2025",
    firstRound: "23rd August 2025",
    finalRound: "2nd September 2025",
  },
  {
    competition: "Web Development Challenge",
    regOpen: "Registration Open",
    regClose: "20th July 2025",
    firstRound: "28th July 2025",
    finalRound: "15th August 2025",
  },
  {
    competition: "Mobile App Development",
    regOpen: "Registration Open",
    regClose: "5th August 2025",
    firstRound: "12th August 2025",
    finalRound: "25th August 2025",
  },
  {
    competition: "UI/UX Design Contest",
    regOpen: "Registration Open",
    regClose: "10th August 2025",
    firstRound: "17th August 2025",
    finalRound: "30th August 2025",
  },
  {
    competition: "Game Development",
    regOpen: "Registration Open",
    regClose: "22nd July 2025",
    firstRound: "29th July 2025",
    finalRound: "12th August 2025",
  },
  {
    competition: "Blockchain Challenge",
    regOpen: "Registration Open",
    regClose: "8th August 2025",
    firstRound: "15th August 2025",
    finalRound: "28th August 2025",
  },
  {
    competition: "IoT Innovation",
    regOpen: "Registration Open",
    regClose: "12th August 2025",
    firstRound: "19th August 2025",
    finalRound: "1st September 2025",
  },
  {
    competition: "Cybersecurity Challenge",
    regOpen: "Registration Open",
    regClose: "6th August 2025",
    firstRound: "13th August 2025",
    finalRound: "26th August 2025",
  },
  {
    competition: "Data Visualization",
    regOpen: "Registration Open",
    regClose: "18th July 2025",
    firstRound: "25th July 2025",
    finalRound: "8th August 2025",
  },
  {
    competition: "Machine Learning Sprint",
    regOpen: "Registration Open",
    regClose: "14th August 2025",
    firstRound: "21st August 2025",
    finalRound: "3rd September 2025",
  },
  {
    competition: "Cloud Computing Challenge",
    regOpen: "Registration Open",
    regClose: "16th July 2025",
    firstRound: "23rd July 2025",
    finalRound: "6th August 2025",
  },
  {
    competition: "Database Design Contest",
    regOpen: "Registration Open",
    regClose: "24th July 2025",
    firstRound: "31st July 2025",
    finalRound: "14th August 2025",
  },
  {
    competition: "Network Security",
    regOpen: "Registration Open",
    regClose: "2nd August 2025",
    firstRound: "9th August 2025",
    finalRound: "22nd August 2025",
  },
  {
    competition: "Robotics Challenge",
    regOpen: "Registration Open",
    regClose: "28th July 2025",
    firstRound: "4th August 2025",
    finalRound: "18th August 2025",
  },
  {
    competition: "Virtual Reality Development",
    regOpen: "Registration Open",
    regClose: "11th August 2025",
    firstRound: "18th August 2025",
    finalRound: "31st August 2025",
  },
  {
    competition: "Digital Marketing Tech",
    regOpen: "Registration Open",
    regClose: "7th August 2025",
    firstRound: "14th August 2025",
    finalRound: "27th August 2025",
  },
];

export default function CompetitionSchedule() {
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10; // Fixed value since selector is removed

  // Calculate pagination
  const totalEntries = scheduleData.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentEntries = scheduleData.slice(startIndex, endIndex);

  return (
    <FadeInSection delay={350}>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Competition Schedule
          </h2>

          {/* Table Container */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-6 font-semibold">
              <div className="text-center">Competition</div>
              <div className="text-center">Registration Status</div>
              <div className="text-center">Registration Close</div>
              <div className="text-center">First Round</div>
              <div className="text-center">Final Round</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-200">
              {currentEntries.map((row, index) => (
                <div
                  key={startIndex + index}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-6 hover:bg-blue-50 transition-colors duration-200 group"
                >
                  <div className="text-center lg:text-left">
                    <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {row.competition}
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      {row.regOpen}
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-700 font-medium">
                      {row.regClose}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-700 font-medium">
                      {row.firstRound}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-700 font-medium">
                      {row.finalRound}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Info */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between bg-white rounded-lg shadow-md p-4 border">
            <div className="text-sm text-gray-600 mb-4 sm:mb-0">
              Showing{" "}
              <span className="font-semibold text-gray-900">
                {startIndex + 1}
              </span>{" "}
              to{" "}
              <span className="font-semibold text-gray-900">
                {Math.min(endIndex, totalEntries)}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900">
                {totalEntries}
              </span>{" "}
              entries
            </div>
            {totalPages > 1 && (
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(1, prev - 1))
                  }
                  disabled={currentPage === 1}
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-700"
                >
                  ← Previous
                </button>
                <div className="flex items-center gap-1">
                  <span className="px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-lg">
                    {currentPage}
                  </span>
                  <span className="px-2 text-sm text-gray-500">of</span>
                  <span className="px-3 py-2 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg">
                    {totalPages}
                  </span>
                </div>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-700"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
