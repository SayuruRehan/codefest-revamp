"use client";

import FadeInSection from "@/components/FadeInSection";
import { contests } from "@/data/contests";
import { useState } from "react";

// Define color arrays for dynamic tag styling
const tagColors = [
  { bg: "bg-blue-100", text: "text-blue-800" },
  { bg: "bg-purple-100", text: "text-purple-800" },
  { bg: "bg-green-100", text: "text-green-800" },
  { bg: "bg-yellow-100", text: "text-yellow-800" },
  { bg: "bg-red-100", text: "text-red-800" },
  { bg: "bg-indigo-100", text: "text-indigo-800" },
  { bg: "bg-pink-100", text: "text-pink-800" },
  { bg: "bg-gray-100", text: "text-gray-800" },
];

export default function CompetitionSchedule() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage] = useState(10);

  // Filter data based on search query
  const filteredData = contests.filter(
    (contest) =>
      contest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contest.short_description
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      contest.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      contest.category?.toLowerCase().includes(searchQuery.toLowerCase())
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

  // Helper function to get days until deadline
  const getDaysUntilDeadline = (deadline: Date) => {
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  };

  return (
    <FadeInSection delay={350}>
      <section className="py-16 bg-gray-50">
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
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-black"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentEntries.map((contest, index) => (
              <div
                key={startIndex + index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Background Image Section */}
                <div
                  className="h-40 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${contest.cover_image})`,
                  }}
                ></div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Competition Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {contest.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {contest.short_description}
                  </p>

                  {/* Tags */}
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    {contest.tags.slice(0, 2).map((tag, tagIndex) => {
                      const colorIndex = tagIndex % tagColors.length;
                      const colors = tagColors[colorIndex];
                      return (
                        <span
                          key={tagIndex}
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  {/* Bottom section with prize and deadline */}
                  <div className="border-t pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-bold text-gray-900">
                        {contest.prize[0]}
                      </span>
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">
                        {getDaysUntilDeadline(contest.registration_deadline)}{" "}
                        days to go
                      </p>
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
