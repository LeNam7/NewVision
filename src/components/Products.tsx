import { useEffect, useRef, useState } from 'react';

import { products } from '../data/products';
import type { Product } from '../data/products';
import ProductDetailsModal from './ProductDetailsModal';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function Products() {
  const { t, language } = useLanguage();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Re-trigger scroll animations for these new dynamic elements if needed
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
    const scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll-products');
    animatedElements.forEach(el => scrollObserver.observe(el));
    
    return () => scrollObserver.disconnect();
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsMouseDown(true);
    setIsDragging(false);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed multiplier
    
    if (Math.abs(walk) > 5) {
      setIsDragging(true);
    }
    
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleProductClick = (product: Product) => {
    if (!isDragging) {
      setSelectedProduct(product);
    }
  };

  return (
    <section id="products" className="products section-padding bg-light">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6 }} 
          className="text-center" 
          style={{ textAlign: 'center' }}
        >
          <p className="hero-label text-primary uppercase tracker" style={{ justifyContent: 'center', marginBottom: '0.5rem' }}>{t('products.label')}</p>
          <h2 className="section-title" style={{ marginBottom: '3rem', textAlign: 'center' }}>{t('products.title')}</h2>
        </motion.div>
      </div>
        
      <div className="products-fullwidth-container">
        <div 
            className={`products-slider-wrapper ${isMouseDown ? 'active' : ''}`}
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <motion.div 
                className="products-carousel"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {products.map(product => (
                <motion.div 
                  key={product.id} 
                  variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
                  whileHover={{ scale: 1.03, y: -5, boxShadow: "0 25px 40px rgba(16,185,129,0.15)" }}
                  className="product-card glass-card"
                  onClick={() => handleProductClick(product)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="product-image-wrapper">
                    <img src={product.image} alt={product.title} className="product-image" loading="lazy" />
                  </div>
                  <div className="product-content">
                    <h3 className="product-title">{language === 'en' ? (product.enTitle || product.title) : product.title}</h3>
                    <p className="product-desc">{language === 'en' ? (product.enDescription || product.description) : product.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      
      {selectedProduct && (
        <ProductDetailsModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
}
