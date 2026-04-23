import { useEffect } from 'react';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import AboutPreview from '../components/AboutPreview';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Products from '../components/Products';

export default function HomePage() {
  // Intersection Observer for scroll animations
  useEffect(() => {
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.15
      };

      const scrollObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-up');
      animatedElements.forEach(el => scrollObserver.observe(el));
      
      return () => scrollObserver.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <Clients />
      <AboutPreview />
      <Services />
      <Testimonials />
      <Products />
    </>
  );
}
