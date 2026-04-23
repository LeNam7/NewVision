import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { Product } from '../data/products';

interface ProductDetailsModalProps {
  product: Product;
  onClose: () => void;
}

import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import TelegramBotDemo from './TelegramBotDemo';
import DataDigitizationDemo from './DataDigitizationDemo';
import CertificateGallery from './CertificateGallery';

export default function ProductDetailsModal({ product, onClose }: ProductDetailsModalProps) {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  useEffect(() => {
    // We already have main navbar controlling some overflow, but let's Ensure body overflow is hidden
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return createPortal(
    <div className="modal-overlay" onClick={onClose} style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
      backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 10000, 
      display: 'flex', alignItems: 'center', justifyContent: 'center', 
      padding: '1rem', backdropFilter: 'blur(8px)', opacity: 1, 
      animation: 'fadeIn 0.3s ease-out'
    }}>
      <motion.div initial={{ opacity: 0, scale: 0.95, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }} className="glass-card modal-content" data-lenis-prevent="true" onClick={(e) => e.stopPropagation()} style={{
        width: '100%', maxWidth: '1000px', maxHeight: '90vh', overflowY: 'auto', 
        padding: '0', position: 'relative', border: '1px solid rgba(16, 185, 129, 0.2)', 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)', borderRadius: '16px'
      }}>
        
        {/* Header (Sticky) */}
        <div style={{
          position: 'sticky', top: '0', background: theme === 'dark' ? 'rgba(6,9,19,0.9)' : 'rgba(255,255,255,0.9)', 
          backdropFilter: 'blur(10px)', padding: '1rem 2rem', zIndex: 20, 
          borderBottom: theme === 'dark' ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.1)', 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
          <h2 className="section-title" style={{ fontSize: '1.5rem', margin: 0 }}>{t('products.modal_title')}</h2>
          <button onClick={onClose} style={{
            background: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)', 
            border: theme === 'dark' ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(0,0,0,0.1)', 
            color: theme === 'dark' ? '#fff' : '#1e293b', 
            width: '36px', height: '36px', borderRadius: '50%', 
            fontSize: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', 
            justifyContent: 'center', transition: 'all 0.3s'
          }} onMouseEnter={(e) => { e.currentTarget.style.background = '#ef4444'; e.currentTarget.style.borderColor = '#ef4444'; e.currentTarget.style.color = '#fff'; }} 
             onMouseLeave={(e) => { e.currentTarget.style.background = theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'; e.currentTarget.style.color = theme === 'dark' ? '#fff' : '#1e293b'; }}>
            &times;
          </button>
        </div>
        
        {/* Main Content */}
        <div style={{ padding: '3rem' }} className="product-modal-body">
          <style>
             {`
              .product-modal-body img { max-width: 100%; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); margin: 2rem 0; }
              .product-modal-body p { color: ${theme === 'dark' ? '#9ca3af' : '#4b5563'}; font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.2rem; }
              .product-modal-body h2 { color: ${theme === 'dark' ? '#fff' : '#111827'}; font-size: 1.6rem; margin: 2rem 0 1rem; }
              .product-modal-body ul { padding-left: 1.5rem; margin-bottom: 1.5rem; color: ${theme === 'dark' ? '#e2e8f0' : '#4b5563'}; }
              .product-modal-body li { margin-bottom: 0.5rem; line-height: 1.6; }
              
              .meta-grid { display: grid; gap: 1rem; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}; }
              .meta-item { display: flex; align-items: flex-start; gap: 1rem; background: ${theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'}; padding: 1rem; border-radius: 8px; border: 1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}; }
              .meta-label { font-weight: 600; color: ${theme === 'dark' ? '#10b981' : '#0284c7'}; min-width: 150px; }
              .meta-value { color: ${theme === 'dark' ? '#d1d5db' : '#374151'}; word-break: break-word; }
              
              @media (min-width: 768px) {
                .meta-grid { grid-template-columns: 1fr 1fr; }
              }
              @media (max-width: 768px) {
                .product-modal-body { padding: 1.5rem 1rem !important; }
                .product-modal-body h1 { font-size: 1.8rem !important; }
                .meta-item { flex-direction: column; gap: 0.25rem; }
              }
             `}
          </style>

          <div style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '-10px' }}>
             <h1 style={{ fontSize: '2.5rem', margin: '0 0 1rem', color: theme === 'dark' ? '#fff' : '#111827' }}>{language === 'en' ? (product.enTitle || product.title) : product.title}</h1>
             <p style={{ color: theme === 'dark' ? '#10b981' : '#0284c7', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>{language === 'en' ? (product.enDescription || product.description) : product.description}</p>
             {product.link && (
               <a href={product.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '1.5rem', padding: '0.75rem 2.5rem', background: 'linear-gradient(135deg, #4ade80, #16a34a)', color: '#fff', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(14, 165, 233, 0.4)' }}>
                 {language === 'en' ? 'Visit Website' : 'Truy cập Website'}
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
               </a>
             )}
          </div>

          <div className="content-render">
            {(language === 'en' && product.enContent ? product.enContent : product.content).map((item, idx) => {
              if (item.type === 'paragraph') return <p key={idx}>{item.text}</p>;
              if (item.type === 'heading') return <h2 key={idx}>{item.text}</h2>;
              if (item.type === 'image') return <img key={idx} src={item.src} alt={item.alt} />;
              if (item.type === 'telegram_demo') return (
                <div key={idx} style={{ height: '500px', borderRadius: '12px', overflow: 'hidden', margin: '2rem 0', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                   <TelegramBotDemo />
                </div>
              );
              if (item.type === 'digitization_demo') return (
                <div key={idx} style={{ height: '400px', borderRadius: '12px', overflow: 'hidden', margin: '2rem 0', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                   <DataDigitizationDemo />
                </div>
              );
              if (item.type === 'certificate_gallery' && item.images) return (
                <CertificateGallery key={idx} images={item.images} />
              );
              if (item.type === 'list') return (
                <ul key={idx}>
                  {item.items?.map((li, i) => <li key={i}>{li}</li>)}
                </ul>
              );
              return null;
            })}
          </div>

          <div className="meta-grid">
            {(language === 'en' && product.enContent ? product.enContent : product.content).map((item, idx) => {
               if (item.type === 'platforms') return (
                 <div key={idx} className="meta-item">
                   <div className="meta-label">{t('products.platforms')}</div>
                   <div className="meta-value">{item.text}</div>
                 </div>
               );
               if (item.type === 'fields') return (
                 <div key={idx} className="meta-item">
                   <div className="meta-label">{t('products.fields')}</div>
                   <div className="meta-value">{item.text}</div>
                 </div>
               );
               if (item.type === 'technologies') return (
                 <div key={idx} className="meta-item">
                   <div className="meta-label">{t('products.technologies')}</div>
                   <div className="meta-value">{item.text}</div>
                 </div>
               );
               if (item.type === 'workload') return (
                 <div key={idx} className="meta-item">
                   <div className="meta-label">⏱ Workload</div>
                   <div className="meta-value">{item.text}</div>
                 </div>
               );
               return null;
            })}
            
            {product.tags && product.tags.length > 0 && (
              <div className="meta-item" style={{ gridColumn: '1 / -1' }}>
                <div className="meta-label">{t('products.tags')}</div>
                <div className="meta-value" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {product.tags.map(tag => (
                    <span key={tag} style={{ 
                      background: theme === 'dark' ? 'rgba(16,185,129,0.1)' : 'rgba(2,132,199,0.1)', 
                      color: theme === 'dark' ? '#10b981' : '#0284c7', 
                      padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.85rem' 
                    }}>
                      #{tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
        </div>
      </motion.div>
    </div>,
    document.body
  );
}
