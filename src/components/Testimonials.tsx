import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const changeTestimonial = (direction: number) => {
    setCurrentSlide((prev) => (prev + direction + totalSlides) % totalSlides);
  };

  return (
    <section className="testimonials-slider-section section-padding bg-light">
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8, ease: "easeOut" }} 
            className="container" 
            style={{ position: 'relative', maxWidth: '1000px', textAlign: 'center' }}
        >
            <div className="slider-controls">
                <button className="slider-btn prev-btn" onClick={() => changeTestimonial(-1)}>
                    <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="1.5" fill="none"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <div id="testimo-slider" className="testimo-slider">
                    {/* Slide 1 */}
                    <div className={`testimo-slide ${currentSlide === 0 ? 'active' : ''}`}>
                        <h3 className="testimo-quote">"{t('testimonials.t1_quote')}"</h3>
                        <div className="testimo-author">
                            <img src={`${import.meta.env.BASE_URL}avatar-anh.jpg`} alt="Đỗ Minh Kha" className="testimo-avatar" style={{ objectFit: 'cover' }} />
                            <div className="testimo-info-single">
                                <h4>{t('testimonials.t1_author')}</h4>
                                <p>{t('testimonials.t1_role')}</p>
                            </div>
                        </div>
                    </div>
                    {/* Slide 2 */}
                    <div className={`testimo-slide ${currentSlide === 1 ? 'active' : ''}`}>
                        <h3 className="testimo-quote">"{t('testimonials.t2_quote')}"</h3>
                        <div className="testimo-author">
                            <img src={`${import.meta.env.BASE_URL}avatar-kha.jpg`} alt="Hoàng Lan Anh" className="testimo-avatar" style={{ objectFit: 'cover' }} />
                            <div className="testimo-info-single">
                                <h4>{t('testimonials.t2_author')}</h4>
                                <p>{t('testimonials.t2_role')}</p>
                            </div>
                        </div>
                    </div>
                    {/* Slide 3 */}
                    <div className={`testimo-slide ${currentSlide === 2 ? 'active' : ''}`}>
                        <h3 className="testimo-quote">"{t('testimonials.t3_quote')}"</h3>
                        <div className="testimo-author">
                            <img src={`${import.meta.env.BASE_URL}avatar-nam.jpg`} alt="Chu Hoài Nam" className="testimo-avatar" style={{ objectFit: 'cover' }} />
                            <div className="testimo-info-single">
                                <h4>{t('testimonials.t3_author')}</h4>
                                <p>{t('testimonials.t3_role')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="slider-btn next-btn" onClick={() => changeTestimonial(1)}>
                    <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="1.5" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </div>
        </motion.div>
    </section>
  );
}
