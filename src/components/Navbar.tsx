import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import type { Product } from '../data/products';
import ProductDetailsModal from './ProductDetailsModal';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const [isProductsModalOpen, setIsProductsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedDetailProduct, setSelectedDetailProduct] = useState<Product | null>(null);
  const { theme, toggleTheme } = useTheme();
  const { toggleLanguage, t, language } = useLanguage();

  useEffect(() => {
    if (isAboutModalOpen || isServicesModalOpen || isProductsModalOpen || isContactModalOpen || selectedDetailProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isAboutModalOpen, isServicesModalOpen, isProductsModalOpen, isContactModalOpen, selectedDetailProduct]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    // Custom events for external triggers (e.g., from Hero buttons)
    const openAbout = () => setIsAboutModalOpen(true);
    const openContact = () => setIsContactModalOpen(true);
    const openServices = () => setIsServicesModalOpen(true);
    
    window.addEventListener('openAboutModal', openAbout);
    window.addEventListener('openContactModal', openContact);
    window.addEventListener('openServicesModal', openServices);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('openAboutModal', openAbout);
      window.removeEventListener('openContactModal', openContact);
      window.removeEventListener('openServicesModal', openServices);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const nav = document.getElementById('nav-links');
      const btn = document.getElementById('mobile-menu-btn');
      if (isMobileMenuOpen && nav && btn && !nav.contains(e.target as Node) && !btn.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleThemeToggle = () => {
      window.dispatchEvent(new CustomEvent('triggerCircuitTransition', {
          detail: { action: toggleTheme }
      }));
  };

  const handleLanguageToggle = () => {
      window.dispatchEvent(new CustomEvent('triggerCircuitTransition', {
          detail: { action: toggleLanguage }
      }));
  };

  const navbarContent = (
    <motion.header 
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
        className={`navbar ${isScrolled ? 'scrolled' : ''}`} 
        id="navbar"
    >
        <div className="container nav-container">
            <Link to="/" className="logo" onClick={(e) => {
                const basePath = import.meta.env.BASE_URL;
                const path = window.location.pathname;
                if (path === '/' || path.endsWith(basePath) || path === basePath.slice(0, -1) || path.endsWith('/NVS-Page/')) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    window.history.pushState("", document.title, window.location.pathname + window.location.search);
                }
                closeMenu();
            }}>
                <img src={`${import.meta.env.BASE_URL}nvs-logo-text.svg`} alt="New Vision Logo" height="40" />
            </Link>
            <button 
                className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`} 
                id="mobile-menu-btn" 
                aria-label="Toggle Menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <motion.nav 
                initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
                className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`} id="nav-links"
            >
                <motion.a variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }} href="#" onClick={(e) => { e.preventDefault(); setIsAboutModalOpen(true); closeMenu(); }}>{t('navbar.about')}</motion.a>
                <motion.a variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }} href="#" onClick={(e) => { e.preventDefault(); setIsServicesModalOpen(true); closeMenu(); }}>{t('navbar.services')}</motion.a>
                <motion.a variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }} href="#" onClick={(e) => { e.preventDefault(); setIsProductsModalOpen(true); closeMenu(); }}>{t('navbar.products')}</motion.a>
                <motion.a variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }} href="#" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); closeMenu(); }}>{t('navbar.contact')}</motion.a>
                <motion.div variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }} style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginLeft: '1rem' }}>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleLanguageToggle} style={{ background: 'transparent', border: '1px solid var(--primary)', color: 'var(--text)', borderRadius: '20px', padding: '0.2rem 0.8rem', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold' }}>
                        {t('navbar.language')}
                    </motion.button>
                    <motion.button whileHover={{ rotate: 180 }} transition={{ duration: 0.4 }} onClick={handleThemeToggle} style={{ background: 'transparent', border: 'none', color: 'var(--text)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px' }} title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
                        {theme === 'dark' ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        )}
                    </motion.button>
                </motion.div>
            </motion.nav>
        </div>
    </motion.header>
  );

  const modalsContent = (
    <>
        {isAboutModalOpen && createPortal(
          <div className="modal-overlay" onClick={() => setIsAboutModalOpen(false)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', backdropFilter: 'blur(8px)', opacity: 1, animation: 'fadeIn 0.3s ease-out' }}>
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }} className="glass-card modal-content" data-lenis-prevent="true" onClick={(e) => e.stopPropagation()} style={{ width: '100%', maxWidth: '1100px', maxHeight: '90vh', overflowY: 'auto', padding: '0', position: 'relative', border: '1px solid rgba(16, 185, 129, 0.2)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)', borderRadius: '16px' }}>
               
               <div style={{ position: 'sticky', top: '0', background: theme === 'dark' ? 'rgba(6,9,19,0.9)' : 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', padding: '1rem 2rem', zIndex: 20, borderBottom: theme === 'dark' ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <h2 className="section-title" style={{ fontSize: '1.5rem', margin: 0 }}>{t('navbar.title_about')}</h2>
                   <button onClick={() => setIsAboutModalOpen(false)} style={{ background: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)', border: theme === 'dark' ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(0,0,0,0.1)', color: theme === 'dark' ? '#fff' : '#1e293b', width: '36px', height: '36px', borderRadius: '50%', fontSize: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#ef4444'; e.currentTarget.style.borderColor = '#ef4444'; e.currentTarget.style.color = '#fff'; }} onMouseLeave={(e) => { e.currentTarget.style.background = theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'; e.currentTarget.style.color = theme === 'dark' ? '#fff' : '#1e293b'; }}>&times;</button>
               </div>
               
               <div className="modal-body-custom">
                   <style>
                       {`
                       .modal-body-custom { padding: 3rem; }
                       .modal-row { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; margin-bottom: 5rem; }
                       @media (max-width: 768px) { 
                           .modal-body-custom { padding: 1.5rem 1rem !important; }
                           .modal-row { grid-template-columns: 1fr; gap: 2rem; margin-bottom: 3rem; } 
                           .modal-row-reverse > div:first-child { order: 2; } 
                       }
                       `}
                   </style>

                   <div className="modal-row">
                       <div><img src={`${import.meta.env.BASE_URL}01.jpg`} alt="New Vision" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} /></div>
                       <div>
                           <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                               <div style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', marginRight: '10px' }}></div>
                               <h3 className="hero-label text-primary uppercase tracker" style={{ margin: 0, fontSize: '0.9rem' }}>{t('about.modal.history_label')}</h3>
                           </div>
                           <p style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.6 }}>{t('about.modal.history_desc')}</p>
                       </div>
                   </div>

                   <div className="modal-row modal-row-reverse">
                       <div>
                           <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                               <div style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', marginRight: '10px' }}></div>
                               <h3 className="hero-label text-primary uppercase tracker" style={{ margin: 0, fontSize: '0.9rem' }}>{t('about.modal.vision_label')}</h3>
                           </div>
                           <p style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1rem' }}>{t('about.modal.vision_desc1')}</p>
                           <p style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.6 }}><span dangerouslySetInnerHTML={{ __html: t('about.modal.vision_desc2') }}></span></p>
                       </div>
                       <div><img src={`${import.meta.env.BASE_URL}features-laptop.webp`} alt="Vision" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} /></div>
                   </div>

                   <div className="modal-row">
                       <div><img src={`${import.meta.env.BASE_URL}services_office.png`} alt="Environment" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} /></div>
                       <div>
                           <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                               <div style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', marginRight: '10px' }}></div>
                               <h3 className="hero-label text-primary uppercase tracker" style={{ margin: 0, fontSize: '0.9rem' }}>{t('about.modal.env_label')}</h3>
                           </div>
                           <p style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1rem' }}>{t('about.modal.env_desc1')}</p>
                           <p style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.6 }}>{t('about.modal.env_desc2')}</p>
                       </div>
                   </div>

                   <div style={{ textAlign: 'center', marginBottom: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                       <h2 className="section-title">{t('about.modal.quality_title')}</h2>
                   </div>
                   
                   <div className="features-grid">
                        <div className="feature-card glass-card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem', padding: '1.5rem' }}>
                            <div className="feat-icon-wrapper" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg></div>
                            <h4 style={{ fontSize: '1rem', margin: 0 }}>{t('about.modal.f1_title')}</h4>
                            <p style={{ fontSize: '0.85rem', color: '#9ca3af', margin: 0, lineHeight: 1.5 }}>{t('about.modal.f1_desc')}</p>
                        </div>
                        <div className="feature-card glass-card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem', padding: '1.5rem' }}>
                            <div className="feat-icon-wrapper" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg></div>
                            <h4 style={{ fontSize: '1rem', margin: 0 }}>{t('about.modal.f2_title')}</h4>
                            <p style={{ fontSize: '0.85rem', color: '#9ca3af', margin: 0, lineHeight: 1.5 }}>{t('about.modal.f2_desc')}</p>
                        </div>
                        <div className="feature-card glass-card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem', padding: '1.5rem' }}>
                            <div className="feat-icon-wrapper" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 19 22 12 13 5 13 19"/><polygon points="2 19 11 12 2 5 2 19"/></svg></div>
                            <h4 style={{ fontSize: '1rem', margin: 0 }}>{t('about.modal.f3_title')}</h4>
                            <p style={{ fontSize: '0.85rem', color: '#9ca3af', margin: 0, lineHeight: 1.5 }}>{t('about.modal.f3_desc')}</p>
                        </div>
                        <div className="feature-card glass-card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem', padding: '1.5rem' }}>
                            <div className="feat-icon-wrapper" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
                            <h4 style={{ fontSize: '1rem', margin: 0 }}>{t('about.modal.f4_title')}</h4>
                            <p style={{ fontSize: '0.85rem', color: '#9ca3af', margin: 0, lineHeight: 1.5 }}>{t('about.modal.f4_desc')}</p>
                        </div>
                        <div className="feature-card glass-card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem', padding: '1.5rem' }}>
                            <div className="feat-icon-wrapper" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
                            <h4 style={{ fontSize: '1rem', margin: 0 }}>{t('about.modal.f5_title')}</h4>
                            <p style={{ fontSize: '0.85rem', color: '#9ca3af', margin: 0, lineHeight: 1.5 }}>{t('about.modal.f5_desc')}</p>
                        </div>
                        <div className="feature-card glass-card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem', padding: '1.5rem' }}>
                            <div className="feat-icon-wrapper" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></div>
                            <h4 style={{ fontSize: '1rem', margin: 0 }}>{t('about.modal.f6_title')}</h4>
                            <p style={{ fontSize: '0.85rem', color: '#9ca3af', margin: 0, lineHeight: 1.5 }}>{t('about.modal.f6_desc')}</p>
                        </div>
                   </div>
               </div>
            </motion.div>
          </div>,
          document.body
        )}

        {isServicesModalOpen && createPortal(
          <div className="modal-overlay" onClick={() => setIsServicesModalOpen(false)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', backdropFilter: 'blur(8px)', opacity: 1, animation: 'fadeIn 0.3s ease-out' }}>
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }} className="glass-card modal-content" data-lenis-prevent="true" onClick={(e) => e.stopPropagation()} style={{ width: '100%', maxWidth: '1100px', maxHeight: '90vh', overflowY: 'auto', padding: '0', position: 'relative', border: '1px solid rgba(16, 185, 129, 0.2)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)', borderRadius: '16px' }}>
               
               <div style={{ position: 'sticky', top: '0', background: theme === 'dark' ? 'rgba(6,9,19,0.9)' : 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', padding: '1rem 2rem', zIndex: 20, borderBottom: theme === 'dark' ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <h2 className="section-title" style={{ fontSize: '1.5rem', margin: 0 }}>{t('navbar.title_services')}</h2>
                   <button onClick={() => setIsServicesModalOpen(false)} style={{ background: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)', border: theme === 'dark' ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(0,0,0,0.1)', color: theme === 'dark' ? '#fff' : '#1e293b', width: '36px', height: '36px', borderRadius: '50%', fontSize: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#ef4444'; e.currentTarget.style.borderColor = '#ef4444'; e.currentTarget.style.color = '#fff'; }} onMouseLeave={(e) => { e.currentTarget.style.background = theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'; e.currentTarget.style.color = theme === 'dark' ? '#fff' : '#1e293b'; }}>&times;</button>
               </div>
               
               <div className="modal-body-custom">
                   <div style={{ textAlign: 'center', marginBottom: '4rem', marginTop: '-20px' }}>
                      <span className="hero-label text-primary uppercase tracker" style={{ justifyContent: 'center', marginBottom: '0.5rem', fontSize: '0.8rem' }}>{t('services.modal.prof_services')}</span>
                      <h2 className="section-title" style={{ fontSize: '2.5rem', margin: 0 }}>{t('services.modal.activities')}</h2>
                   </div>

                   <div className="modal-row">
                       <div><img src={`${import.meta.env.BASE_URL}services_office.png`} alt="AI Integration" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(16,185,129,0.15)' }} /></div>
                       <div>
                           <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                               <div style={{ width: '8px', height: '8px', backgroundColor: '#4ade80', marginRight: '10px' }}></div>
                               <h3 className="hero-label uppercase tracker" style={{ margin: 0, fontSize: '0.9rem', color: '#4ade80' }}>{t('services.modal.ai_integration_label')}</h3>
                           </div>
                           <p style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{t('services.modal.ai_integration_desc')}</p>
                           <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                               <li style={{ color: '#e2e8f0', marginBottom: '0.5rem', display: 'flex', alignItems: 'start' }}><span style={{ color: '#4ade80', marginRight: '8px' }}>✓</span> {t('services.modal.ai1')}</li>
                               <li style={{ color: '#e2e8f0', marginBottom: '0.5rem', display: 'flex', alignItems: 'start' }}><span style={{ color: '#4ade80', marginRight: '8px' }}>✓</span> {t('services.modal.ai2')}</li>
                               <li style={{ color: '#e2e8f0', marginBottom: '0.5rem', display: 'flex', alignItems: 'start' }}><span style={{ color: '#4ade80', marginRight: '8px' }}>✓</span> {t('services.modal.ai3')}</li>
                           </ul>
                       </div>
                   </div>

                   <div className="modal-row modal-row-reverse">
                       <div>
                           <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                               <div style={{ width: '8px', height: '8px', backgroundColor: '#a855f7', marginRight: '10px' }}></div>
                               <h3 className="hero-label uppercase tracker" style={{ margin: 0, fontSize: '0.9rem', color: '#a855f7' }}>{t('services.modal.model_label')}</h3>
                           </div>
                           <p style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{t('services.modal.model_desc')}</p>
                           <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                               <li style={{ color: '#e2e8f0', marginBottom: '0.5rem', display: 'flex', alignItems: 'start' }}><span style={{ color: '#a855f7', marginRight: '8px' }}>✓</span> {t('services.modal.m1')}</li>
                               <li style={{ color: '#e2e8f0', marginBottom: '0.5rem', display: 'flex', alignItems: 'start' }}><span style={{ color: '#a855f7', marginRight: '8px' }}>✓</span> {t('services.modal.m2')}</li>
                               <li style={{ color: '#e2e8f0', marginBottom: '0.5rem', display: 'flex', alignItems: 'start' }}><span style={{ color: '#a855f7', marginRight: '8px' }}>✓</span> {t('services.modal.m3')}</li>
                           </ul>
                       </div>
                       <div><img src={`${import.meta.env.BASE_URL}features-laptop.webp`} alt="AI Models" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(168,85,247,0.15)' }} /></div>
                   </div>

                   <div className="modal-row">
                       <div><img src={`${import.meta.env.BASE_URL}01.jpg`} alt="Products" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(239,68,68,0.15)' }} /></div>
                       <div>
                           <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                               <div style={{ width: '8px', height: '8px', backgroundColor: '#ef4444', marginRight: '10px' }}></div>
                               <h3 className="hero-label uppercase tracker" style={{ margin: 0, fontSize: '0.9rem', color: '#ef4444' }}>{t('services.modal.product_label')}</h3>
                           </div>
                           <p style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{t('services.modal.product_desc')}</p>
                           <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                               <li style={{ color: '#e2e8f0', marginBottom: '0.5rem', display: 'flex', alignItems: 'start' }}><span style={{ color: '#ef4444', marginRight: '8px' }}>✓</span> {t('services.modal.p1')}</li>
                               <li style={{ color: '#e2e8f0', marginBottom: '0.5rem', display: 'flex', alignItems: 'start' }}><span style={{ color: '#ef4444', marginRight: '8px' }}>✓</span> {t('services.modal.p2')}</li>
                               <li style={{ color: '#e2e8f0', marginBottom: '0.5rem', display: 'flex', alignItems: 'start' }}><span style={{ color: '#ef4444', marginRight: '8px' }}>✓</span> {t('services.modal.p3')}</li>
                           </ul>
                       </div>
                   </div>

                   <div className="modal-row modal-row-reverse">
                       <div>
                           <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                               <div style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', marginRight: '10px' }}></div>
                               <h3 className="hero-label uppercase tracker" style={{ margin: 0, fontSize: '0.9rem', color: '#22c55e' }}>{t('services.modal.outsourcing_label')}</h3>
                           </div>
                           <p style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{t('services.modal.outsourcing_desc')}</p>
                           <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                               <li style={{ color: '#e2e8f0', marginBottom: '0.5rem', display: 'flex', alignItems: 'start' }}><span style={{ color: '#22c55e', marginRight: '8px' }}>✓</span> {t('services.modal.o1')}</li>
                               <li style={{ color: '#e2e8f0', marginBottom: '0.5rem', display: 'flex', alignItems: 'start' }}><span style={{ color: '#22c55e', marginRight: '8px' }}>✓</span> {t('services.modal.o2')}</li>
                               <li style={{ color: '#e2e8f0', marginBottom: '0.5rem', display: 'flex', alignItems: 'start' }}><span style={{ color: '#22c55e', marginRight: '8px' }}>✓</span> {t('services.modal.o3')}</li>
                           </ul>
                       </div>
                       <div><img src={`${import.meta.env.BASE_URL}features-laptop.webp`} alt="Outsourcing" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(59,130,246,0.15)' }} /></div>
                   </div>

                   <div className="modal-row" style={{ marginBottom: '1rem' }}>
                       <div><img src={`${import.meta.env.BASE_URL}services_office.png`} alt="Digital Transformation" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 30px rgba(34,197,94,0.15)' }} /></div>
                       <div>
                           <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                               <div style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', marginRight: '10px' }}></div>
                               <h3 className="hero-label uppercase tracker" style={{ margin: 0, fontSize: '0.9rem', color: '#22c55e' }}>{t('services.modal.dx_label')}</h3>
                           </div>
                           <p style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1rem' }}>{t('services.modal.dx_desc1')}</p>
                           <p style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.6 }}>{t('services.modal.dx_desc2')}</p>
                       </div>
                   </div>

               </div>
            </motion.div>
          </div>,
          document.body
        )}

        {isProductsModalOpen && createPortal(
          <div className="modal-overlay" onClick={() => setIsProductsModalOpen(false)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', backdropFilter: 'blur(8px)', opacity: 1, animation: 'fadeIn 0.3s ease-out' }}>
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }} className="glass-card modal-content" data-lenis-prevent="true" onClick={(e) => e.stopPropagation()} style={{ width: '100%', maxWidth: '1200px', maxHeight: '90vh', overflowY: 'auto', padding: '0', position: 'relative', border: '1px solid rgba(16, 185, 129, 0.2)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)', borderRadius: '16px' }}>
               
               <div style={{ position: 'sticky', top: '0', background: theme === 'dark' ? 'rgba(6,9,19,0.9)' : 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', padding: '1rem 2rem', zIndex: 20, borderBottom: theme === 'dark' ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <h2 className="section-title" style={{ fontSize: '1.5rem', margin: 0 }}>{t('navbar.title_products')}</h2>
                   <button onClick={() => setIsProductsModalOpen(false)} style={{ background: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)', border: theme === 'dark' ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(0,0,0,0.1)', color: theme === 'dark' ? '#fff' : '#1e293b', width: '36px', height: '36px', borderRadius: '50%', fontSize: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#ef4444'; e.currentTarget.style.borderColor = '#ef4444'; e.currentTarget.style.color = '#fff'; }} onMouseLeave={(e) => { e.currentTarget.style.background = theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'; e.currentTarget.style.color = theme === 'dark' ? '#fff' : '#1e293b'; }}>&times;</button>
               </div>
               
               <div className="modal-body-custom">
                   <div style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '-20px' }}>
                      <span className="hero-label text-primary uppercase tracker" style={{ justifyContent: 'center', marginBottom: '0.5rem', fontSize: '0.8rem' }}>{t('products.label')}</span>
                      <h2 className="section-title" style={{ fontSize: '2.5rem', margin: 0 }}>{t('products.title')}</h2>
                      <p style={{ color: '#9ca3af', maxWidth: '600px', margin: '1rem auto 0' }}>{t('products.desc')}</p>
                   </div>

                   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                       {products.map(product => (
                         <div 
                           key={product.id} 
                           className="glass-card product-card" 
                           onClick={() => setSelectedDetailProduct(product)}
                           style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                         >
                             <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                               <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                             </div>
                             <div style={{ padding: '1.5rem', flexGrow: 1 }}>
                                 <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#10b981' }}>{language === 'en' ? (product.enTitle || product.title) : product.title}</h3>
                                 <p style={{ color: '#9ca3af', fontSize: '0.9rem', margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{language === 'en' ? (product.enDescription || product.description) : product.description}</p>
                             </div>
                         </div>
                       ))}
                   </div>
               </div>
            </motion.div>
          </div>,
          document.body
        )}

        {isContactModalOpen && createPortal(
          <div className="modal-overlay" onClick={() => setIsContactModalOpen(false)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', backdropFilter: 'blur(8px)', opacity: 1, animation: 'fadeIn 0.3s ease-out' }}>
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }} className="glass-card modal-content" data-lenis-prevent="true" onClick={(e) => e.stopPropagation()} style={{ width: '100%', maxWidth: '1000px', maxHeight: '90vh', overflowY: 'auto', padding: '0', position: 'relative', border: '1px solid rgba(16, 185, 129, 0.2)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)', borderRadius: '16px' }}>
               
               <div style={{ position: 'sticky', top: '0', background: theme === 'dark' ? 'rgba(6,9,19,0.9)' : 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', padding: '1rem 2rem', zIndex: 20, borderBottom: theme === 'dark' ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <h2 className="section-title" style={{ fontSize: '1.5rem', margin: 0 }}>{t('navbar.title_contact')}</h2>
                   <button onClick={() => setIsContactModalOpen(false)} style={{ background: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)', border: theme === 'dark' ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(0,0,0,0.1)', color: theme === 'dark' ? '#fff' : '#1e293b', width: '36px', height: '36px', borderRadius: '50%', fontSize: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#ef4444'; e.currentTarget.style.borderColor = '#ef4444'; e.currentTarget.style.color = '#fff'; }} onMouseLeave={(e) => { e.currentTarget.style.background = theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'; e.currentTarget.style.color = theme === 'dark' ? '#fff' : '#1e293b'; }}>&times;</button>
               </div>
               
               <div className="modal-body-custom">
                   <div style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '-20px' }}>
                      <span className="hero-label text-primary uppercase tracker" style={{ justifyContent: 'center', marginBottom: '0.5rem', fontSize: '0.8rem' }}>{t('contact.label')}</span>
                      <h2 className="section-title" style={{ fontSize: '2.5rem', margin: 0 }}>{t('contact.title')}</h2>
                      <p style={{ color: '#9ca3af', maxWidth: '600px', margin: '1rem auto 0' }}>{t('contact.desc')}</p>
                   </div>

                   <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1.5fr)', gap: '4rem' }} className="contact-modal-grid">
                       
                       <style>
                           {`
                           @media (max-width: 768px) {
                               .contact-modal-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
                           }
                           .contact-input { width: 100%; padding: 1rem; margin-bottom: 1rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.03); color: #fff; font-family: inherit; font-size: 0.95rem; transition: all 0.3s; }
                           .contact-input:focus { outline: none; border-color: #10b981; background: rgba(16,185,129,0.05); }
                           .contact-label { display: block; margin-bottom: 0.5rem; color: #9ca3af; font-size: 0.9rem; }
                           `}
                       </style>

                       <div className="glass-card" style={{ padding: '2rem', border: 'none', background: theme === 'dark' ? 'rgba(255,255,255,0.02)' : 'transparent', borderRight: theme === 'dark' ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.1)', borderRadius: '12px' }}>
                           <h3 style={{ fontSize: '1.4rem', margin: '0 0 2rem 0', color: theme === 'dark' ? '#fff' : '#14532d', borderBottom: theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)', paddingBottom: '1rem' }}>{t('contact.info_title')}</h3>
                           
                           <div style={{ marginBottom: '1.5rem' }}>
                               <div style={{ color: '#10b981', marginBottom: '0.3rem', fontSize: '1.1rem' }}>{t('contact.address_label')}</div>
                               <div style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: '1.5' }}>{t('contact.address_val')}</div>
                           </div>
                           
                           <div style={{ marginBottom: '1.5rem' }}>
                               <div style={{ color: '#4ade80', marginBottom: '0.3rem', fontSize: '1.1rem' }}>{t('contact.office_label')}</div>
                               <div style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: '1.5' }}>{t('contact.office_val')}</div>
                           </div>
                           
                           <div style={{ marginBottom: '1.5rem' }}>
                               <div style={{ color: '#a855f7', marginBottom: '0.3rem', fontSize: '1.1rem' }}>{t('contact.phone_label')}</div>
                               <div style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 'bold' }}>(+84) 989 92 92 69</div>
                           </div>
                           
                           <div>
                               <div style={{ color: '#22c55e', marginBottom: '0.3rem', fontSize: '1.1rem' }}>{t('contact.email_label')}</div>
                               <div style={{ color: '#9ca3af', fontSize: '0.95rem' }}>anhdt@nvs-technology.com</div>
                           </div>
                       </div>

                       <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                           <form onSubmit={(e) => { e.preventDefault(); alert(t('contact.success_msg')); setIsContactModalOpen(false); }}>
                               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%' }}>
                                   <div>
                                       <label className="contact-label">{t('contact.fullname')}</label>
                                       <input type="text" className="contact-input" placeholder={t('contact.fullname')} required />
                                   </div>
                                   <div>
                                       <label className="contact-label">{t('contact.email')}</label>
                                       <input type="email" className="contact-input" placeholder={t('contact.email')} required />
                                   </div>
                               </div>
                               
                               <div>
                                   <label className="contact-label">{t('contact.content')}</label>
                                   <textarea className="contact-input" rows={6} placeholder={t('contact.content_placeholder')} required style={{ resize: 'vertical', minHeight: '120px' }}></textarea>
                               </div>
                               
                               <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}>
                                   {t('contact.submit')}
                               </button>
                           </form>
                       </div>
                   </div>
               </div>
            </motion.div>
          </div>,
          document.body
        )}

        {selectedDetailProduct && (
          <ProductDetailsModal 
            product={selectedDetailProduct} 
            onClose={() => setSelectedDetailProduct(null)} 
          />
        )}
    </>
  );

  return (
    <>
      {navbarContent}
      {modalsContent}
    </>
  );
}
