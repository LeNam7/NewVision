import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

interface CertificateGalleryProps {
  images: string[];
}

export default function CertificateGallery({ images }: CertificateGalleryProps) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const { theme } = useTheme();
  const { language } = useLanguage();

  if (!images || images.length === 0) return null;

  return (
    <div style={{ margin: '2rem 0' }}>
      <h3 style={{ 
        color: theme === 'dark' ? '#fff' : '#111827', 
        fontSize: '1.3rem', 
        marginBottom: '1rem',
        marginTop: '2rem'
      }}>
        {language === 'en' ? 'Certifications' : 'Giấy chứng nhận'}
      </h3>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1.5rem',
        justifyItems: 'center'
      }}>
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImg(src)}
            style={{
              cursor: 'pointer',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
              backgroundColor: theme === 'dark' ? '#1e293b' : '#f8fafc',
              height: '250px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img 
              src={src} 
              alt={`Certificate ${idx + 1}`} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain',
                padding: '8px'
              }} 
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Zoom Overlay */}
      {typeof window !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                zIndex: 99999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'zoom-out',
                padding: '2rem'
              }}
            >
              <motion.img
                src={selectedImg}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                style={{
                  maxHeight: '90vh',
                  maxWidth: '90vw',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}
                onClick={(e) => e.stopPropagation()} 
              />
              
              <button 
                onClick={() => setSelectedImg(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  color: '#fff',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  fontSize: '24px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(4px)'
                }}
              >
                &times;
              </button>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
