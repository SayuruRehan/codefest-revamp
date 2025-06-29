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
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const totalEntries = scheduleData.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentEntries = scheduleData.slice(startIndex, endIndex);

  const handleEntriesPerPageChange = (newEntriesPerPage: number) => {
    setEntriesPerPage(newEntriesPerPage);
    setCurrentPage(1); // Reset to first page when changing entries per page
  };

  return (
    <FadeInSection delay={350}>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Competition Schedule
          </h2>

          {/* Entries per page selector */}
          <div className="flex items-center gap-2 mb-6">
            <label
              htmlFor="entriesPerPage"
              className="text-sm font-medium text-gray-700"
            >
              Show
            </label>
            <select
              id="entriesPerPage"
              value={entriesPerPage}
              onChange={(e) =>
                handleEntriesPerPageChange(Number(e.target.value))
              }
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span className="text-sm text-gray-700">entries per page</span>
          </div>

          {/* Table Header */}
          <div className="bg-gray-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 p-4 mb-4 rounded-t-lg font-semibold text-gray-800">
            <div className="text-center">Competition</div>
            <div className="text-center">Registration Open</div>
            <div className="text-center">Registration Close</div>
            <div className="text-center">First Round</div>
            <div className="text-center">Final Round</div>
          </div>

          {/* Table Rows */}
          <div className="space-y-2">
            {currentEntries.map((row, index) => (
              <div
                key={startIndex + index}
                className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 p-4 border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="text-center font-medium text-gray-800">
                  {row.competition}
                </div>
                <div className="text-center text-gray-600">{row.regOpen}</div>
                <div className="text-center text-gray-600">{row.regClose}</div>
                <div className="text-center text-gray-600">
                  {row.firstRound}
                </div>
                <div className="text-center text-gray-600">
                  {row.finalRound}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Info */}
          <div className="mt-6 flex items-center justify-between text-sm text-gray-700">
            <div>
              Showing {startIndex + 1} to {Math.min(endIndex, totalEntries)} of{" "}
              {totalEntries} entries
            </div>
            {totalPages > 1 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(1, prev - 1))
                  }
                  disabled={currentPage === 1}
                  className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <span className="px-2">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
