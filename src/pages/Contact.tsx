'use client';
import '../app/globals.css';
import Link from 'next/link';
import React, { useState } from 'react';
import FadeInSection from '@/components/FadeInSection';
import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

function ContactInfoItem({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-center space-x-4">
      {icon}
      <div>
        <h3 className="text-base font-bold text-white">{title}</h3>
        <p className="text-orange-100 text-sm md:text-base font-normal">{text}</p>
      </div>
    </div>
  );
}

function InputField({ 
  label, 
  name, 
  placeholder, 
  type = "text", 
  required = false 
}: { 
  label: string; 
  name: string;
  placeholder: string; 
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block mb-2 font-normal text-blue-800">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full border border-blue-200 rounded-lg p-3 text-gray-900 text-base md:text-lg
          focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent
          transition-all duration-200 bg-white font-normal"
      />
    </div>
  );
}

export default function Contact() {
  const [state, setState] = useState({
    isSubmitted: false,
    isLoading: false,
    error: null as string | null
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    const formData = new FormData(e.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: "Form configuration error. Please try again later."
      }));
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: `${formData.get("firstName")} ${formData.get("lastName")}`,
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setState(prev => ({ ...prev, isSubmitted: true }));
      } else {
        setState(prev => ({
          ...prev,
          error: result.message || "Submission failed. Please try again."
        }));
      }
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: "Network error. Please check your connection and try again."
      }));
    } finally {
      setState(prev => ({ ...prev, isLoading: false }));
    }
  }

  if (state.isSubmitted) {
    return (
      <div className={`min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white ${montserrat.variable} font-sans`}>
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <main className="flex-grow flex items-center justify-center pt-28 px-4 py-12 md:px-8 md:py-16">
          <div className="max-w-7xl w-full">
            <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-300 p-8 md:p-12 max-w-2xl mx-auto text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-800">
                Message Sent Successfully!
              </h2>
              <p className="text-lg text-blue-700 mb-6 font-normal">
                Thank you for contacting us. We'll get back to you soon.
              </p>
              <Link href="/" className="inline-block text-orange-600 hover:text-orange-700 font-medium">
                Return to Home
              </Link>
            </div>
          </div>
        </main>
        <FadeInSection delay={200}>
          <footer className="bg-blue-900 text-white py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">SLIIT Codefest 2025</h3>
                  <p className="text-blue-200 font-normal">
                    The largest inter-university hackathon in Sri Lanka
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                  <ul className="space-y-2 font-normal">
                    <li>
                      <Link href="/competition-details" className="text-blue-200 hover:text-white">
                        Competition Details
                      </Link>
                    </li>
                    <li>
                      <Link href="/registration" className="text-blue-200 hover:text-white">
                        Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-blue-200 hover:text-white">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Contact</h3>
                  <p className="text-blue-200 font-normal">
                    Email: info@codefest.lk<br />
                    Phone: +94 XX XXX XXXX
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-blue-700 text-center text-blue-200 font-normal">
                <p>&copy; 2024 SLIIT Codefest. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </FadeInSection>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white ${montserrat.variable} font-sans`}>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <main className="flex-grow pt-28 px-4 py-12 md:px-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="w-full mt-8 mb-12 md:mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4 tracking-tight">
              Contact SLIIT
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-800 leading-relaxed font-normal">
              We'd love to hear from you! Reach out with questions, feedback, or just to say hello.
            </p>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-8 md:gap-12">
            {/* Map Section */}
            <div className="lg:w-1/2 rounded-2xl overflow-hidden shadow-lg border-2 border-blue-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.272774748721!2d79.97036957359128!3d6.914682818496809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e1!3m2!1sen!2slk!4v1750592236345!5m2!1sen!2slk" 
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="bg-blue-100"
                title="SLIIT Map"
              />
              {/* Contact Info */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 md:p-8 space-y-5">
                <ContactInfoItem
                  icon={
                    <div className="bg-white p-2 rounded-lg text-orange-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                  }
                  title="Our Campus"
                  text="SLIIT New Kandy Rd, Malabe 10115"
                />
                <ContactInfoItem
                  icon={
                    <div className="bg-white p-2 rounded-lg text-orange-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                  }
                  title="Call Us"
                  text="+94 11 754 4801"
                />
                <ContactInfoItem
                  icon={
                    <div className="bg-white p-2 rounded-lg text-orange-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                  }
                  title="Email"
                  text="info@sliit.lk"
                />
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:w-1/2 bg-white rounded-2xl shadow-lg border-2 border-blue-300 p-6 md:p-8 lg:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-800">
                Send Your Message
              </h2>
              {state.error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg font-normal">
                  {state.error}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <input 
                  type="hidden" 
                  name="access_key" 
                  value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} 
                />
                <input type="hidden" name="redirect" value="false" />
                <input type="hidden" name="from_name" value="SLIIT Contact Form" />
                <input type="checkbox" name="botcheck" className="hidden" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <InputField 
                    label="First Name" 
                    name="firstName" 
                    placeholder="Enter First Name" 
                    required 
                  />
                  <InputField 
                    label="Last Name" 
                    name="lastName" 
                    placeholder="Enter Last Name" 
                    required 
                  />
                </div>

                <InputField 
                  label="Email" 
                    name="email" 
                    placeholder="Email Address" 
                    type="email" 
                    required 
                />

                <div>
                  <label className="block mb-2 font-normal text-blue-800">Your Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="What would you like to discuss?"
                    className="w-full border border-blue-200 rounded-lg p-3 text-gray-900 text-base md:text-lg resize-none
                      focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent
                      transition-all duration-200 bg-white font-normal"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={state.isLoading}
                  className={`w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 px-6 rounded-lg 
                    shadow-md hover:shadow-lg transition-all duration-300
                    flex items-center justify-center space-x-2 ${state.isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {state.isLoading ? (
                    <>
                      <span>Sending...</span>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <FadeInSection delay={200}>
        <footer className="bg-blue-900 text-white py-12 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">SLIIT Codefest 2025</h3>
                <p className="text-blue-200 font-normal">
                  The largest inter-university hackathon in Sri Lanka
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 font-normal">
                  <li>
                    <Link href="/competition-details" className="text-blue-200 hover:text-white">
                      Competition Details
                    </Link>
                  </li>
                  <li>
                    <Link href="/registration" className="text-blue-200 hover:text-white">
                      Registration
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-blue-200 hover:text-white">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p className="text-blue-200 font-normal">
                  Email: info@codefest.lk<br />
                  Phone: +94 XX XXX XXXX
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-700 text-center text-blue-200 font-normal">
              <p>&copy; 2024 SLIIT Codefest. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </FadeInSection>
    </div>
  );
}