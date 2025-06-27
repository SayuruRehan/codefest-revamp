'use client';

import Masonry from '@/components/Masonry';

const items = [
  {
    id: "1",
    img: "/gallery/1.jpg",
    url: "https://example.com/one",
    height: 400,
  },
  {
    id: "2",
    img: "/gallery/2.jpg",
    url: "https://example.com/two",
    height: 250,
  },
  {
    id: "3",
    img: "/gallery/3.jpg",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "4",
    img: "/gallery/4.jpg",
    url: "https://example.com/three",
    height: 200,
  },
   {
    id: "5",
    img: "/gallery/5.jpg",
    url: "https://example.com/three",
    height: 400,
  },
  {
    id: "6",
    img: "/gallery/6.jpg",
    url: "https://example.com/three",
    height: 400,
  },
  {
    id: "7",
    img: "/gallery/7.jpg",
    url: "https://example.com/three",
    height: 400,
  },
  {
    id: "8",
    img: "/gallery/8.jpg",
    url: "https://example.com/three",
    height: 800,
  },
  {
    id: "9",
    img: "/gallery/9.jpg",
    url: "https://example.com/three",
    height: 300,
  },
  {
    id: "10",
    img: "/gallery/10.jpg",
    url: "https://example.com/three",
    height: 700,
  },
  {
    id: "11",
    img: "/gallery/11.jpg",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "12",
    img: "/gallery/12.jpg",
    url: "https://example.com/three",
    height: 300,
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 bg-white">
      <h1 className="text-3xl font-bold text-center mb-12 text-black">Gallery</h1>
      <div className="relative h-[2000px] px-4 md:px-8 lg:px-12">
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={true}
        />
      </div>
    </main>
  );
}
