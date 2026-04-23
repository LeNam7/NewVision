
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function Footer() {
  const { t } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <svg className="footer-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ display: 'block', width: '100%', height: 'auto', marginBottom: '-1px' }}>
        <path fill="#0a101f" fillOpacity="1" d="M0,160L120,149.3C240,139,480,117,720,122.7C960,128,1200,160,1320,176L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
      </svg>
      <footer id="contact" className="footer" style={{ background: 'linear-gradient(180deg, #0a101f 0%, #03050a 100%)', borderTop: 'none', paddingTop: '0', color: '#fff' }}>
          
          <div className="container cta-section" style={{ textAlign: 'center', padding: '1rem 1.5rem 6rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', marginRight: '8px' }}></div>
                  <p className="uppercase tracker" style={{ margin: 0, color: '#fff', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 'bold' }}>{t('cta_banner.label')}</p>
              </div>
              <h2 className="footer-title" style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff', fontSize: '2.5rem', maxWidth: '1000px', margin: '0 auto 1.5rem', lineHeight: 1.35, letterSpacing: '-0.5px', fontWeight: 800 }}>
                  {t('cta_banner.title')}
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  {t('cta_banner.subtitle')}
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                  <a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openServicesModal')); }} className="btn btn-primary" style={{ padding: '0.9rem 2rem', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 700, borderRadius: '8px', transition: 'all 0.3s ease', letterSpacing: '1px' }}>{t('cta_banner.btn_info')} &rarr;</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openContactModal')); }} className="btn btn-secondary" style={{ padding: '0.9rem 2rem', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 700, borderRadius: '8px', transition: 'all 0.3s ease', letterSpacing: '1px' }}>{t('cta_banner.btn_contact')} &rarr;</a>
              </div>
          </div>

          <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }} 
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
              className="container footer-container" 
              style={{ paddingBottom: '3rem', borderTop: 'none', gap: '4rem' }}
          >
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="footer-col brand-col">
                  <p style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>Công ty TNHH Đầu tư và phát triển công nghệ Tầm Nhìn Mới</p>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: '1.6', whiteSpace: 'pre-line' }}>{t('footer.addressText')}</p>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: '1.6' }}>Hotline: 0978 387 887</p>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: '1.6' }}>Email: nvstechno@gmail.com</p>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="footer-col links-col">
                  <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.1rem' }}>{t('footer.companyText')}</h4>
                  <a href={isHome ? '#about' : '/#about'} onClick={(e) => handleSmoothScroll(e, 'about')} style={{ color: 'rgba(255,255,255,0.8)', display: 'block', marginBottom: '0.8rem', fontSize: '0.9rem', textDecoration: 'none' }}>{t('navbar.about')}</a>
                  <a href={isHome ? '#products' : '/#products'} onClick={(e) => handleSmoothScroll(e, 'products')} style={{ color: 'rgba(255,255,255,0.8)', display: 'block', marginBottom: '0.8rem', fontSize: '0.9rem', textDecoration: 'none' }}>{t('navbar.products')}</a>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.8)', display: 'block', marginBottom: '0.8rem', fontSize: '0.9rem', textDecoration: 'none' }}>{t('footer.termsText')}</a>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.8)', display: 'block', marginBottom: '0.8rem', fontSize: '0.9rem', textDecoration: 'none' }}>{t('footer.privacyText')}</a>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="footer-col links-col">
                  <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.1rem' }}>{t('footer.servicesText')}</h4>
                  <a href={isHome ? '#services' : '/#services'} onClick={(e) => handleSmoothScroll(e, 'services')} style={{ color: 'rgba(255,255,255,0.8)', display: 'block', marginBottom: '0.8rem', fontSize: '0.9rem', textDecoration: 'none' }}>{t('navbar.services')}</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openContactModal')); }} style={{ color: 'rgba(255,255,255,0.8)', display: 'block', marginBottom: '0.8rem', fontSize: '0.9rem', textDecoration: 'none' }}>{t('navbar.contact')}</a>
              </motion.div>
          </motion.div>
          
          <div className="footer-bottom container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '2.5rem 1.5rem', color: 'rgba(255,255,255,0.5)' }}>
              <div className="social-icons" style={{ display: 'flex', gap: '1rem' }}>
                  <a href="#" className="glass-card" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0' }}>
                      <svg width="16" height="16" fill="#10b981" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.557z"/></svg>
                  </a>
                  <a href="#" className="glass-card" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0' }}>
                      <svg width="16" height="16" fill="#10b981" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                  </a>
                  <a href="#" className="glass-card" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0' }}>
                      <svg width="16" height="16" fill="#10b981" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.411h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.245zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.555v-11.411h3.555v11.411zm15.556-20.452h-21.35c-.732 0-1.325.59-1.325 1.324v21.353c0 .73.593 1.321 1.325 1.321h21.35c.731 0 1.323-.591 1.323-1.321v-21.353c0-.734-.592-1.324-1.323-1.324z"/></svg>
                  </a>
              </div>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.5px' }}>{t('footer.copyright')}</p>
          </div>
      </footer>
    </div>
  );
}
