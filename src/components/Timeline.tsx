'use client';

import FadeInSection from './FadeInSection';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    date: 'January 2025',
    title: 'Registration Opens',
    description: 'Registration portal opens for all competition categories'
  },
  {
    date: 'February 2025',
    title: 'Workshop Series',
    description: 'Technical workshops and training sessions begin'
  },
  {
    date: 'March 2025',
    title: 'Preliminary Rounds',
    description: 'Initial rounds of competitions across all categories'
  },
  {
    date: 'April 2025',
    title: 'Main Event',
    description: 'Codefest 2025 main event with final rounds and awards ceremony'
  }
];

const Timeline = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Event Timeline</h2>
        
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-600">
                      <div className="text-blue-600 font-semibold mb-2">{item.date}</div>
                      <h3 className="text-xl font-bold mb-2 text-orange-500">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Dot on the line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline; 