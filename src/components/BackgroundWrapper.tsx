"use client"

import { ReactNode, useEffect, useState } from "react";

const COLOR_1 = "#004BD3"
const COLOR_2 = "#ED7612"
const CIRCLE_BASE_SIZE = 200

export default function BackgroundWrapper({ children }: { children: ReactNode }) {

  const [pageHeight, setPageHeight] = useState<number>()

  useEffect(() => {
    setPageHeight(document.body.scrollHeight)
  }, [])

  const [circles, setCircles] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    if (!pageHeight) return;

    const generatedCircles = [];
    let y = -CIRCLE_BASE_SIZE / 2;
    while (y + 500 <= pageHeight) {
      for (let i = 0; i < 2; i++) {
        const circle = <div
          key={generatedCircles.length}
          className="absolute bg-red-300 rounded-full opacity-40 blur-[100px] pointer-events-none"
          style={{
            top: y + Math.floor(Math.random() * 300) - 150,
            left: i % 2 == 0 ? - CIRCLE_BASE_SIZE / 2 : undefined,
            right: i % 2 == 1 ? 0 : undefined,
            width: CIRCLE_BASE_SIZE + Math.floor(Math.random() * 20) - 10,
            height: CIRCLE_BASE_SIZE + Math.floor(Math.random() * 20) - 10,
            backgroundColor: i % 2 == 0 ? COLOR_1 : COLOR_2
          }}
        />
        generatedCircles.push(circle);
      }
      y += CIRCLE_BASE_SIZE + 200 + Math.floor(Math.random() * 300);
    }
    setCircles(generatedCircles);
  }, [pageHeight]);

  return (
    <>
      <div>
        {circles}
      </div>
      {children}
    </>
  )
}