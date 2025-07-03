"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";
import Timeline from "@/components/Timeline";
import { contests } from "@/data/contests";
import ContestCard from "@/components/ContestCard";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <main className="min-h-screen relative bg-white">
      {/* Blue spotlight - Top left */}
      <div className="absolute -top-48 left-1/5 w-120 h-120 bg-[#0042AD] rounded-full blur-3xl opacity-40 z-0"></div>
      {/* Orange spotlight - Top right */}
      <div className="absolute -top-48 right-1/5 w-120 h-120 bg-[#FF7400] rounded-full blur-3xl opacity-40 z-0"></div>

      {/* Left side blue fade */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#0042AD]/20 to-transparent z-0"></div>

      {/* Right side orange fade */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FF7400]/20 to-transparent z-0"></div>

      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden text-center px-4">
        {/* Logo */}
        <div className="mt-10 mb-10 z-20">
          <Image
            src="/logo.png"
            alt="SLIIT Codefest 2025 Logo"
            width={500}
            height={120}
            className="mx-auto w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto"
          />
        </div>

        {/* Main Heading */}
        <div className="mb-20 z-20">
          <h1
            className="font-extralight leading-tight tracking-wide bg-gradient-to-r from-gray-300 via-gray-300 to-orange-300 bg-clip-text text-transparent opacity-80"
            style={{
              fontSize: "clamp(2rem, 6vw, 6rem)", // auto-scales from mobile to large desktop
            }}
          >
            where ideas meet
          </h1>
        </div>

        {/* Full-width Innovation Text */}
        <div className="absolute inset-x-0 bottom-0 overflow-hidden z-10">
          <h2
            className="font-extralight leading-none tracking-wide whitespace-nowrap bg-gradient-to-r from-gray-400 via-gray-400 to-orange-400 bg-clip-text text-transparent opacity-40"
            style={{
              fontSize: "clamp(4rem, 18vw, 15rem)", // huge auto-scaling text
            }}
          >
            innovation
            {/* Bottom fade overlay */}
            <div className="absolute inset-x-0 bottom-0 h-[15vh] bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          </h2>

        </div>
      </section>


      {/* What is Codefest Section */}
      <FadeInSection delay={100}>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">
              What is SLIIT Codefest 2025?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
              SLIIT Codefest is the largest inter-university hackathon in Sri
              Lanka, bringing together the brightest minds in technology and
              innovation. Join us for an exciting journey of coding, creativity,
              and collaboration.
            </p>
            <div className="text-center">
              <Link
                href="/registration"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Register Now
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Message from Coordinator */}
      <FadeInSection delay={200}>
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-black">
                  Message from the Codefest 2025 Coordinator
                </h2>
                <p className="text-lg text-gray-700">
                  Dear Innovators, Partners, and Tech Enthusiasts,<br></br>
                  It is with great pride and excitement that I welcome you to
                  Codefest 2025, the 14th consecutive edition of SLIIT Faculty
                  of Computing&apos;s premier national ICT competition!<br></br>
                  Over the years, Codefest has grown into a dynamic platform
                  that empowers students across Sri Lanka to showcase their
                  creativity, technical skills, and passion for innovation. This
                  year, we are proud to join hands with the Ministry of
                  Education, the Ministry of Digital Economy, and leading
                  industry partners to elevate the experience and impact of this
                  event.<br></br>
                  Codefest 2025 promises to be bigger and better, featuring a
                  range of competitions—from school-level to university-level
                  challenges—designed to inspire future tech leaders and foster
                  meaningful industry-academia collaboration.<br></br>
                  As the Coordinator, I warmly invite students, educators,
                  professionals, and sponsors to be part of this exciting
                  journey. Together, let&apos;s celebrate innovation, drive
                  digital transformation, and shape the future of technology in
                  Sri Lanka.<br></br>
                  Warm regards,<br></br>
                  Prof.Anuradha Jayakody<br></br>
                  Coordinator – Codefest 2025<br></br>
                  Faculty of Computing, SLIIT<br></br>
                  anuradha.j@sliit.lk<br></br>
                </p>
              </div>
              <div className="relative h-96">
                <Image
                  src="/coordinator.jpg"
                  alt="Codefest 2025 Coordinator"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Competition Categories */}
      <FadeInSection delay={300}>
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

      {/* Timeline Section */}
      <Timeline />

      {/* Partners Section */}
      <FadeInSection delay={400}>
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">
              Our Partners
            </h2>
            <div className="flex flex-wrap justify-center gap-8 w-full">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className="bg-white p-4 rounded-lg shadow-sm w-48 border-2 border-transparent hover:border-blue-500 transition-all cursor-pointer"
                >
                  <div className="aspect-w-16 aspect-h-9 relative min-h-[100px]">
                    <Image
                      src={`/partner${num}.png`}
                      alt={`Partner ${num}`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Footer */}
      <FadeInSection delay={500}>
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">SLIIT Codefest 2025</h3>
                <p className="text-gray-400">
                  The largest inter-university hackathon in Sri Lanka
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/competition-details"
                      className="text-gray-400 hover:text-white"
                    >
                      Competition Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/registration"
                      className="text-gray-400 hover:text-white"
                    >
                      Registration
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-400 hover:text-white"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p className="text-gray-400">
                  Email: info@codefest.lk
                  <br />
                  Phone: +94 XX XXX XXXX
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; 2024 SLIIT Codefest. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </FadeInSection>
    </main>
  );
}
