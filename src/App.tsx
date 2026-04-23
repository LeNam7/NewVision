import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CircuitCursor from './components/CircuitCursor';
import ThemeTransition from './components/ThemeTransition';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.innerWidth <= 768 || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    });
    return () => lenis.destroy();
  }, []);
  return <>{children}</>;
}

// Component to handle hash scrolling on page load
function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <SmoothScrolling>
      <ThemeProvider>
        <LanguageProvider>
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <ScrollToHash />
            <ThemeTransition />
            <CircuitCursor />
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gioi-thieu" element={<AboutPage />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </LanguageProvider>
      </ThemeProvider>
    </SmoothScrolling>
  );
}

export default App;
