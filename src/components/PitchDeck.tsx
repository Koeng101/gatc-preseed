import { useState, useEffect, useRef } from 'react';
import { pitchSlides } from '../data/pitch_content';
import { PitchSlide } from './PitchSlide';
import { replaceSection } from '../hooks/useHashTab';

interface PitchDeckProps {
  section?: string | null;
}

export const PitchDeck: React.FC<PitchDeckProps> = ({ section }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const initialScrollDone = useRef(false);

  // Scroll to section on mount, or back to top when section clears (logo click)
  useEffect(() => {
    if (!section) {
      if (initialScrollDone.current) {
        // Section cleared (e.g. logo click) — scroll back to first slide
        const el = slideRefs.current.get(0);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    if (initialScrollDone.current) return;
    const idx = pitchSlides.findIndex(s => s.id === section);
    if (idx >= 0) {
      requestAnimationFrame(() => {
        const el = slideRefs.current.get(idx);
        el?.scrollIntoView();
        initialScrollDone.current = true;
      });
    }
  }, [section]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-slide-index'));
            if (!isNaN(index)) {
              setActiveIndex(index);
              replaceSection(index === 0 ? null : pitchSlides[index].id);
            }
          }
        }
      },
      { threshold: 0.5 }
    );

    slideRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSlide = (index: number) => {
    const el = slideRefs.current.get(index);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-full">
      {/* Scroll-snap container */}
      <div ref={containerRef} className="pitch-deck-container h-full overflow-y-auto">
        {pitchSlides.map((slide, i) => (
          <div
            key={slide.id}
            ref={(el) => {
              if (el) slideRefs.current.set(i, el);
            }}
            data-slide-index={i}
            className="pitch-slide min-h-full md:h-full"
          >
            <PitchSlide slide={slide} />
          </div>
        ))}
      </div>

      {/* Dot indicators (right edge) */}
      <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 md:gap-3 z-10">
        {pitchSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSlide(i)}
            className={`w-2 h-2 md:w-3 md:h-3 border-2 border-black transition-all !shadow-none !p-0 ${
              activeIndex === i ? 'bg-[#ff4d00]' : 'bg-white'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
