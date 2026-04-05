import React from 'react';

export default function SectionNumber({ number, title }: { number: string, title: string }) {
  return (
    <span className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-extrabold tracking-[0.3em] opacity-30 origin-left whitespace-nowrap z-10">
      {number} // {title.toUpperCase()}
    </span>
  );
}
