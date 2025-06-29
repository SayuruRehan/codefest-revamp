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
    image: "/coding-contest-primary.png",
  },
  {
    competition: "Coding Contest Junior",
    regOpen: "Registration Open",
    regClose: "15th August 2025",
    firstRound: "22nd August 2025",
    finalRound: "4th September 2025",
    image: "/coding-contest-junior.png",
  },
  {
    competition: "Coding Contest Senior",
    regOpen: "Registration Open",
    regClose: "15th August 2025",
    firstRound: "22nd August 2025",
    finalRound: "4th September 2025",
    image: "/coding-contest-primary.png",
  },
  {
    competition: "ICT Quiz",
    regOpen: "Registration Open",
    regClose: "15th August 2025",
    firstRound: "8th August 2025",
    finalRound: "4th September 2025",
    image: "/ict-quiz.png",
  },
  {
    competition: "AI competition",
    regOpen: "Registration Open",
    regClose: "15th August 2025",
    firstRound: "22nd August 2025",
    finalRound: "4th September 2025",
    image: "/coding-contest-primary.png",
  },
  {
    competition: "Algothon",
    regOpen: "Registration Open",
    regClose: "18th July 2025",
    firstRound: "25th July 2025",
    finalRound: "22nd August 2025",
    image: "/coding-contest-junior.png",
  },
  {
    competition: "Designation",
    regOpen: "Registration Open",
    regClose: "25th July 2025",
    firstRound: "1st August 2025",
    finalRound: "2nd September 2025",
    image: "/ict-quiz.png",
  },
  {
    competition: "DevQuest",
    regOpen: "Registration Open",
    regClose: "To be announced",
    firstRound: "To be announced",
    finalRound: "To be announced",
    image: "/coding-contest-primary.png",
  },
  {
    competition: "Datathon",
    regOpen: "Registration Open",
    regClose: "To be announced",
    firstRound: "26th July 2025",
    finalRound: "23rd August 2025",
    image: "/coding-contest-junior.png",
  },
  {
    competition: "Capture the Flag",
    regOpen: "Registration Open",
    regClose: "13th August 2025",
    firstRound: "23rd August 2025",
    finalRound: "2nd September 2025",
    image: "/ict-quiz.png",
  },
  {
    competition: "Web Development Challenge",
    regOpen: "Registration Open",
    regClose: "20th July 2025",
    firstRound: "28th July 2025",
    finalRound: "15th August 2025",
    image: "/coding-contest-primary.png",
  },
  {
    competition: "Mobile App Development",
    regOpen: "Registration Open",
    regClose: "5th August 2025",
    firstRound: "12th August 2025",
    finalRound: "25th August 2025",
    image: "/coding-contest-junior.png",
  },
  {
    competition: "UI/UX Design Contest",
    regOpen: "Registration Open",
    regClose: "10th August 2025",
    firstRound: "17th August 2025",
    finalRound: "30th August 2025",
    image: "/ict-quiz.png",
  },
  {
    competition: "Game Development",
    regOpen: "Registration Open",
    regClose: "22nd July 2025",
    firstRound: "29th July 2025",
    finalRound: "12th August 2025",
    image: "/coding-contest-primary.png",
  },
  {
    competition: "Blockchain Challenge",
    regOpen: "Registration Open",
    regClose: "8th August 2025",
    firstRound: "15th August 2025",
    finalRound: "28th August 2025",
    image: "/coding-contest-junior.png",
  },
  {
    competition: "IoT Innovation",
    regOpen: "Registration Open",
    regClose: "12th August 2025",
    firstRound: "19th August 2025",
    finalRound: "1st September 2025",
    image: "/ict-quiz.png",
  },
  {
    competition: "Cybersecurity Challenge",
    regOpen: "Registration Open",
    regClose: "6th August 2025",
    firstRound: "13th August 2025",
    finalRound: "26th August 2025",
    image: "/coding-contest-primary.png",
  },
  {
    competition: "Data Visualization",
    regOpen: "Registration Open",
    regClose: "18th July 2025",
    firstRound: "25th July 2025",
    finalRound: "8th August 2025",
    image: "/coding-contest-junior.png",
  },
  {
    competition: "Machine Learning Sprint",
    regOpen: "Registration Open",
    regClose: "14th August 2025",
    firstRound: "21st August 2025",
    finalRound: "3rd September 2025",
    image: "/ict-quiz.png",
  },
  {
    competition: "Cloud Computing Challenge",
    regOpen: "Registration Open",
    regClose: "16th July 2025",
    firstRound: "23rd July 2025",
    finalRound: "6th August 2025",
    image: "/coding-contest-primary.png",
  },
  {
    competition: "Database Design Contest",
    regOpen: "Registration Open",
    regClose: "24th July 2025",
    firstRound: "31st July 2025",
    finalRound: "14th August 2025",
    image: "/coding-contest-junior.png",
  },
  {
    competition: "Network Security",
    regOpen: "Registration Open",
    regClose: "2nd August 2025",
    firstRound: "9th August 2025",
    finalRound: "22nd August 2025",
    image: "/ict-quiz.png",
  },
  {
    competition: "Robotics Challenge",
    regOpen: "Registration Open",
    regClose: "28th July 2025",
    firstRound: "4th August 2025",
    finalRound: "18th August 2025",
    image: "/coding-contest-primary.png",
  },
  {
    competition: "Virtual Reality Development",
    regOpen: "Registration Open",
    regClose: "11th August 2025",
    firstRound: "18th August 2025",
    finalRound: "31st August 2025",
    image: "/coding-contest-junior.png",
  },
  {
    competition: "Digital Marketing Tech",
    regOpen: "Registration Open",
    regClose: "7th August 2025",
    firstRound: "14th August 2025",
    finalRound: "27th August 2025",
    image: "/ict-quiz.png",
  },
];

export default function CompetitionSchedule() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage] = useState(10);

  // Filter data based on search query
  const filteredData = scheduleData.filter(
    (item) =>
      item.competition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.regClose.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.firstRound.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.finalRound.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const totalEntries = filteredData.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentEntries = filteredData.slice(startIndex, endIndex);

  // Reset to first page when search changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <FadeInSection delay={350}>
      <section className="py-16 bg-gray-50">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar - Centered */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search competitions"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentEntries.map((competition, index) => (
              <div
                key={startIndex + index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Competition Name Header */}
                {/* <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
                  <h3 className="text-xl font-bold text-center">
                    {competition.competition}
                    Registration Open
                  </h3>
                </div> */}

                {/* Background Image Section */}
                <div
                  className="h-32 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${competition.image})`,
                  }}
                />

                {/* Card Body - Registration Info and Round Information */}
                <div className="p-6 space-y-4">
                  {/* Registration Info */}
                  <div className="text-center">
                    <div className="items-center px-3 py-1  text-xs font-bold bg-green-100 text-green-800 border border-green-200 mb-2">
                      {competition.regOpen}
                    </div>
                    <p className="text-sm font-bold text-gray-900">
                      Registration Close - {competition.regClose}
                    </p>
                  </div>

                  {/* Round Information */}
                  <div className="border-t pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-bold text-gray-600 mb-1">
                          First Round
                        </p>
                        <p className="text-sm font-bold text-gray-900">
                          {competition.firstRound}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-600 mb-1">
                          Final Round
                        </p>
                        <p className="text-sm font-bold text-gray-900">
                          {competition.finalRound}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
