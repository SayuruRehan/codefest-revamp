'use client';

import Image from "next/image";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CountdownTimer from '@/components/CountdownTimer';
import { useState } from 'react';
import FadeInSection from '@/components/FadeInSection';

export default function Home() {
  const schoolCategories = [
    'Coding Contest (Primary)',
    'Coding Contest (Junior)',
    'Coding Contest (Senior)',
    'ICT Quiz',
    'AI Competition',
  ];

  const tertiaryCategories = [
    'Designathon',
    'DevQuest',
    'Datathon',
    'CTF',
    'Netcom',
    'AI Hackathon',
    'Innov IoT',
    'Technopreneur',
    'Algothon',
    'ReviveNation',
  ];

  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const filteredSchoolCategories = selectedCategory === 'All Categories' || selectedCategory === 'School Category'
    ? schoolCategories
    : [];

  const filteredTertiaryCategories = selectedCategory === 'All Categories' || selectedCategory === 'Tertiary Category'
    ? tertiaryCategories
    : [];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-blue-600 to-blue-800 text-white flex items-center justify-center min-h-[70vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Image
              src="/logo.png"
              alt="SLIIT Codefest 2025 Logo"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Digital Evolution
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Where Ideas Meet Innovation
          </p>
        </div>
      </section>

      {/* Countdown Timer */}
      <FadeInSection>
        <CountdownTimer />
      </FadeInSection>

      {/* What is Codefest Section */}
      <FadeInSection delay={100}>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">What is SLIIT Codefest 2025?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
              SLIIT Codefest is the largest inter-university hackathon in Sri Lanka, bringing together
              the brightest minds in technology and innovation. Join us for an exciting journey of
              coding, creativity, and collaboration.
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
                <h2 className="text-3xl font-bold mb-6 text-black">Message from the Codefest 2025 Coordinator</h2>
                <p className="text-lg text-gray-700">
                  Welcome to SLIIT Codefest 2025! This year, we&apos;re bringing together the brightest
                  minds in technology to create innovative solutions that will shape the future.
                  Join us in this exciting journey of learning, collaboration, and innovation.
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
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Competition Categories</h2>
            
            {/* Category Filter */}
            <div className="flex justify-center mb-8 space-x-4">
              <button
                className={`relative px-6 py-3 rounded-lg font-semibold transition-colors ${selectedCategory === 'All Categories' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setSelectedCategory('All Categories')}
              >
                All Categories
                {selectedCategory === 'All Categories' && (
                  <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-orange-500"></div>
                )}
              </button>
              <button
                className={`relative px-6 py-3 rounded-lg font-semibold transition-colors ${selectedCategory === 'School Category' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setSelectedCategory('School Category')}
              >
                School Category
                {selectedCategory === 'School Category' && (
                  <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-orange-500"></div>
                )}
              </button>
              <button
                className={`relative px-6 py-3 rounded-lg font-semibold transition-colors ${selectedCategory === 'Tertiary Category' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setSelectedCategory('Tertiary Category')}
              >
                Tertiary Category
                {selectedCategory === 'Tertiary Category' && (
                  <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-orange-500"></div>
                )}
              </button>
            </div>

            {/* School Categories */}
            {(selectedCategory === 'All Categories' || selectedCategory === 'School Category') && (
              <div className="mb-16">
                <h3 className="text-2xl font-semibold mb-6 text-blue-600 text-center">School Category</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSchoolCategories.map((category) => (
                    <div
                      key={category}
                      className="bg-gray-50 p-6 rounded-lg shadow-sm border-2 border-transparent hover:border-blue-500 transition-all cursor-pointer flex items-center justify-center"
                    >
                      <h4 className="text-lg font-bold text-gray-900 text-center">{category}</h4>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tertiary Categories */}
            {(selectedCategory === 'All Categories' || selectedCategory === 'Tertiary Category') && (
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-600 text-center">Tertiary Category</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTertiaryCategories.map((category) => (
                    <div
                      key={category}
                      className="bg-gray-50 p-6 rounded-lg shadow-sm border-2 border-transparent hover:border-blue-500 transition-all cursor-pointer flex items-center justify-center"
                    >
                      <h4 className="text-lg font-bold text-gray-900 text-center">{category}</h4>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </FadeInSection>

      {/* Partners Section */}
      <FadeInSection delay={400}>
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Partners</h2>
            <div className="flex flex-wrap justify-center gap-8 w-full">
              {[1, 2, 3].map((num) => (
                <div key={num} className="bg-white p-4 rounded-lg shadow-sm w-48 border-2 border-transparent hover:border-blue-500 transition-all cursor-pointer">
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
                    <Link href="/competition-details" className="text-gray-400 hover:text-white">
                      Competition Details
                    </Link>
                  </li>
                  <li>
                    <Link href="/registration" className="text-gray-400 hover:text-white">
                      Registration
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-white">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p className="text-gray-400">
                  Email: info@codefest.lk<br />
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
