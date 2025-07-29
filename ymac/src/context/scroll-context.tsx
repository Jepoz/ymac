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


// En scroll-context.tsx
useEffect(() => {
  const sections = [
    { id: 'home', ref: homeSectionRef },
    { id: 'about', ref: aboutUsSectionRef },
    { id: 'products', ref: productsSectionRef },
    { id: 'contact', ref: contactSectionRef },
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + (window.innerHeight * 0.3);
    let newActiveSection = 'home';

    sections.forEach(({ id, ref }) => {
      if (ref.current) {
        const { top, height } = ref.current.getBoundingClientRect();
        const elementTop = top + window.scrollY;
        const elementBottom = elementTop + height;

        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          newActiveSection = id;
        }
      }
    });

    setActiveSection(prev => prev !== newActiveSection ? newActiveSection : prev);
  };

  // Configuración híbrida: Observer + Scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = sections.find(sec => sec.ref.current === entry.target);
          if (section) {
            setActiveSection(section.id);
          }
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: '-25% 0px -25% 0px'
    }
  );

  sections.forEach(({ ref }) => {
    if (ref.current) observer.observe(ref.current);
  });

  window.addEventListener('scroll', handleScroll);
  return () => {
    sections.forEach(({ ref }) => {
      if (ref.current) observer.unobserve(ref.current);
    });
    window.removeEventListener('scroll', handleScroll);
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
