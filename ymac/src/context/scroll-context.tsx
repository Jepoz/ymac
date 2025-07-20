import React, { createContext, useRef, useState, useEffect } from 'react';

interface ScrollContextType {
  homeSectionRef: React.RefObject<HTMLDivElement | null>;
  aboutUsSectionRef: React.RefObject<HTMLDivElement | null>;
  productsSectionRef: React.RefObject<HTMLDivElement | null>;
  contactSectionRef: React.RefObject<HTMLDivElement | null>;
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  activeSection: string;
}

export const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const homeSectionRef = useRef<HTMLDivElement | null>(null);
  const aboutUsSectionRef = useRef<HTMLDivElement | null>(null);
  const productsSectionRef = useRef<HTMLDivElement | null>(null);
  const contactSectionRef = useRef<HTMLDivElement | null>(null);

  const [activeSection, setActiveSection] = useState<string>('home');

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const yOffset = -window.innerHeight * 0.12; // 12vh en píxeles
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };


  useEffect(() => {
    const sections = [
      { id: 'home', ref: homeSectionRef },
      { id: 'about', ref: aboutUsSectionRef },
      { id: 'products', ref: productsSectionRef },
      { id: 'contact', ref: contactSectionRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        let bestMatch: { id: string; ratio: number } | null = null;

        for (const entry of entries) {
          if (entry.isIntersecting) {
            const section = sections.find(sec => sec.ref.current === entry.target);
            if (!section) continue;

            const ratio = entry.intersectionRatio;

            // 👇 Condiciones personalizadas por sección
            if (
              (section.id === 'products' && ratio >= 0.2) ||
              (section.id !== 'products' && ratio >= 0.5)
            ) {
              if (!bestMatch || ratio > bestMatch.ratio) {
                bestMatch = { id: section.id, ratio };
              }
            }
          }
        }

        if (bestMatch) {          
          setActiveSection(bestMatch.id);
        }
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // de 0.00 a 1.00
      }
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        homeSectionRef,
        aboutUsSectionRef,
        productsSectionRef,
        contactSectionRef,
        scrollToSection,
        activeSection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
