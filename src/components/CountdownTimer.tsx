'use client';

import { useState, useEffect } from 'react';
import { Doto } from 'next/font/google';

const doto = Doto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-doto',
});

interface Props {
  targetDate: Date
}

const CountdownTimer = ({ targetDate }: Props) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINS', value: timeLeft.minutes },
    { label: 'SECS', value: timeLeft.seconds },
  ];

  return (
    <div className={`bg-blue-600 text-black py-12 bg-gradient-to-r from-[#EEEEEE] to-[#FFFFFF] p-8 mx-20 rounded-xl ${doto.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {timeBlocks.map((block) => (
            <div
              key={block.label}
              className="text-center"
            >
              <div className="uppercase tracking-wider">{block.label}</div>
              <div className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">{block.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer; 