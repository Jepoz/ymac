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
    ref.current?.scrollIntoView({ behavior: 'smooth' });
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
        const visibleEntry = entries.find(entry => entry.isIntersecting && entry.intersectionRatio >= 0.5);
        if (visibleEntry) {
          const matchingSection = sections.find(sec => sec.ref.current === visibleEntry.target);
          if (matchingSection) {
            setActiveSection(matchingSection.id);
          }
        }
      },
      { threshold: 0.5 }
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
