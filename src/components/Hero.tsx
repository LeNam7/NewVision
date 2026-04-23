

import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1, 
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 80,
            damping: 20
        }
    }
};

export default function Hero() {
    const { t } = useLanguage();
    return (
        <section className="hero">
            <div className="hero-bg-glow"></div>
            <div className="container hero-container">
                <motion.div 
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p variants={itemVariants} className="hero-label text-primary uppercase tracker">{t('hero.label')}</motion.p>
                    <motion.h1 variants={itemVariants} className="hero-title">{t('hero.title1')} <span>{t('hero.title2')}</span></motion.h1>
                    <motion.p variants={itemVariants} className="hero-subtitle">{t('hero.subtitle')}</motion.p>
                    <motion.div variants={itemVariants} className="hero-cta">
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#products" className="btn btn-primary">{t('hero.cta_primary')} &rarr;</motion.a>
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openServicesModal')); }} className="btn btn-secondary">{t('hero.cta_secondary')} &rarr;</motion.a>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                    style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(16, 185, 129, 0.2)' }}
                >
                    <motion.video 
                        animate={{ 
                            y: ["-2%", "2%", "-2%"]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        src={`${import.meta.env.BASE_URL}NVS_hero2.mp4`}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ width: '100%', height: 'auto', display: 'block' }} 
                    />
                </motion.div>
            </div>
        </section>
    );
}
