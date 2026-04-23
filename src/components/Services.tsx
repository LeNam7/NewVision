import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Bot, BrainCircuit, MonitorSmartphone, Users, Rocket, Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';

let currentAudio: HTMLAudioElement | null = null;

export default function Services() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState(1);

  const handleTextToSpeech = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    
    // Sử dụng file MP3 đọc tĩnh đã được tải sẵn từ server Google
    // Đảm bảo hoạt động 100% hoàn hảo và không bao giờ bị chặn hay đọc nhầm tiếng Anh
    const langCode = language === 'en' ? 'en' : 'vi';
    currentAudio = new Audio(`${import.meta.env.BASE_URL}tts/${langCode}_${index}.mp3`);
    
    currentAudio.play().catch(err => {
      console.warn("Autoplay block:", err);
    });
  };

  return (
    <section id="services" className="features-ext section-padding">
        <div className="container">
            <div className="text-center animate-on-scroll" style={{ textAlign: 'center' }}>
                <p className="hero-label text-primary uppercase tracker" style={{ justifyContent: 'center', marginBottom: '0.5rem' }}>{t('navbar.services').toUpperCase()}</p>
                <h2 className="section-title" style={{ marginBottom: '3rem', textAlign: 'center' }}>{t('services.modal.activities')}</h2>
            </div>
            
            <motion.div 
                className="features-tabs-grid"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                {/* Left Tabs */}
                <div className="services-tabs" id="services-tabs">
                    {/* Tab 1 */}
                    <div className={`tab-item glass-card ${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)} onMouseEnter={() => setActiveTab(1)}>
                        <div className="tab-header">
                            <div className="gif-icon gif-icon-1"><Bot size={20} /></div>
                            <h3 className="tab-title">{t('services.modal.ai_integration_label')}</h3>
                        </div>
                        <div className="tab-body" id="tab-body-1" style={{ display: activeTab === 1 ? 'block' : 'none' }}>
                            <p style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
                                <span>{t('services.modal.ai_integration_desc')}</span>
                                <button onClick={(e) => handleTextToSpeech(1, e)} title="Đọc văn bản" style={{ background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.2)', borderRadius: '6px', color: '#4ade80', cursor: 'pointer', padding: '6px', flexShrink: 0, transition: 'all 0.2s', marginTop: '-2px' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(14,165,233,0.2)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(14,165,233,0.1)'}><Volume2 size={16} /></button>
                            </p>
                        </div>
                    </div>
                    {/* Tab 2 */}
                    <div className={`tab-item glass-card ${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)} onMouseEnter={() => setActiveTab(2)}>
                        <div className="tab-header">
                            <div className="gif-icon gif-icon-2"><BrainCircuit size={20} /></div>
                            <h3 className="tab-title">{t('services.modal.model_label')}</h3>
                        </div>
                        <div className="tab-body" id="tab-body-2" style={{ display: activeTab === 2 ? 'block' : 'none' }}>
                            <p style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
                                <span>{t('services.modal.model_desc')}</span>
                                <button onClick={(e) => handleTextToSpeech(2, e)} title="Đọc văn bản" style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)', borderRadius: '6px', color: '#a855f7', cursor: 'pointer', padding: '6px', flexShrink: 0, transition: 'all 0.2s', marginTop: '-2px' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(168,85,247,0.2)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(168,85,247,0.1)'}><Volume2 size={16} /></button>
                            </p>
                        </div>
                    </div>
                    {/* Tab 3 */}
                    <div className={`tab-item glass-card ${activeTab === 3 ? 'active' : ''}`} onClick={() => setActiveTab(3)} onMouseEnter={() => setActiveTab(3)}>
                        <div className="tab-header">
                            <div className="gif-icon gif-icon-3"><MonitorSmartphone size={20} /></div>
                            <h3 className="tab-title">{t('services.modal.product_label')}</h3>
                        </div>
                        <div className="tab-body" id="tab-body-3" style={{ display: activeTab === 3 ? 'block' : 'none' }}>
                            <p style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
                                <span>{t('services.modal.product_desc')}</span>
                                <button onClick={(e) => handleTextToSpeech(3, e)} title="Đọc văn bản" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '6px', color: '#ef4444', cursor: 'pointer', padding: '6px', flexShrink: 0, transition: 'all 0.2s', marginTop: '-2px' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(239,68,68,0.2)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(239,68,68,0.1)'}><Volume2 size={16} /></button>
                            </p>
                        </div>
                    </div>
                    {/* Tab 4 */}
                    <div className={`tab-item glass-card ${activeTab === 4 ? 'active' : ''}`} onClick={() => setActiveTab(4)} onMouseEnter={() => setActiveTab(4)}>
                        <div className="tab-header">
                            <div className="gif-icon gif-icon-4"><Users size={20} /></div>
                            <h3 className="tab-title">{t('services.modal.outsourcing_label')}</h3>
                        </div>
                        <div className="tab-body" id="tab-body-4" style={{ display: activeTab === 4 ? 'block' : 'none' }}>
                            <p style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
                                <span>{t('services.modal.outsourcing_desc')}</span>
                                <button onClick={(e) => handleTextToSpeech(4, e)} title="Đọc văn bản" style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '6px', color: '#22c55e', cursor: 'pointer', padding: '6px', flexShrink: 0, transition: 'all 0.2s', marginTop: '-2px' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(59,130,246,0.2)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(59,130,246,0.1)'}><Volume2 size={16} /></button>
                            </p>
                        </div>
                    </div>
                    {/* Tab 5 */}
                    <div className={`tab-item glass-card ${activeTab === 5 ? 'active' : ''}`} onClick={() => setActiveTab(5)} onMouseEnter={() => setActiveTab(5)}>
                        <div className="tab-header">
                            <div className="gif-icon gif-icon-5"><Rocket size={20} /></div>
                            <h3 className="tab-title">{t('services.modal.dx_label')}</h3>
                        </div>
                        <div className="tab-body" id="tab-body-5" style={{ display: activeTab === 5 ? 'block' : 'none' }}>
                            <p style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
                                <span>{t('services.modal.dx_desc1')}</span>
                                <button onClick={(e) => handleTextToSpeech(5, e)} title="Đọc văn bản" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '6px', color: '#22c55e', cursor: 'pointer', padding: '6px', flexShrink: 0, transition: 'all 0.2s', marginTop: '-2px' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(34,197,94,0.2)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(34,197,94,0.1)'}><Volume2 size={16} /></button>
                            </p>
                        </div>
                    </div>
                </div>
                {/* Right Image */}
                <div className="tab-image glass-card" style={{ padding: 0, overflow: 'hidden', position: 'relative' }}>
                    <div className="image-scanner"></div>
                    {[1, 2, 3, 4, 5].includes(activeTab) ? (
                      <video 
                        key={`video-${activeTab}`}
                        src={`${import.meta.env.BASE_URL}services/service_video_${activeTab}.mp4`} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        disablePictureInPicture
                        controlsList="nodownload nofullscreen noremoteplayback"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', pointerEvents: 'none' }} 
                      />
                    ) : (
                      <img 
                        key={activeTab}
                        src={`${import.meta.env.BASE_URL}services/service_digital_transformation.png`}
                        alt="Technology Solutions" 
                        className="anim-kenburns"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    )}
                </div>
            </motion.div>

            {/* 6 Grid Cards */}
            <div className="features-grid" style={{ marginTop: '4rem' }}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="feature-card glass-card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
                    <div className="feat-icon-wrapper" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg></div>
                    <h4 style={{ fontSize: '1.1rem', margin: 0 }}>{t('about.modal.f1_title')}</h4>
                    <p style={{ fontSize: '0.95rem', color: '#9ca3af', margin: 0, lineHeight: 1.5 }}>{t('about.modal.f1_desc')}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="feature-card glass-card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
                    <div className="feat-icon-wrapper" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg></div>
                    <h4 style={{ fontSize: '1.1rem', margin: 0 }}>{t('about.modal.f2_title')}</h4>
                    <p style={{ fontSize: '0.95rem', color: '#9ca3af', margin: 0, lineHeight: 1.5 }}>{t('about.modal.f2_desc')}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="feature-card glass-card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
                    <div className="feat-icon-wrapper" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 19 22 12 13 5 13 19"/><polygon points="2 19 11 12 2 5 2 19"/></svg></div>
                    <h4 style={{ fontSize: '1.1rem', margin: 0 }}>{t('about.modal.f3_title')}</h4>
                    <p style={{ fontSize: '0.95rem', color: '#9ca3af', margin: 0, lineHeight: 1.5 }}>{t('about.modal.f3_desc')}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="feature-card glass-card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
                    <div className="feat-icon-wrapper" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
                    <h4 style={{ fontSize: '1.1rem', margin: 0 }}>{t('about.modal.f4_title')}</h4>
                    <p style={{ fontSize: '0.95rem', color: '#9ca3af', margin: 0, lineHeight: 1.5 }}>{t('about.modal.f4_desc')}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="feature-card glass-card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
                    <div className="feat-icon-wrapper" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
                    <h4 style={{ fontSize: '1.1rem', margin: 0 }}>{t('about.modal.f5_title')}</h4>
                    <p style={{ fontSize: '0.95rem', color: '#9ca3af', margin: 0, lineHeight: 1.5 }}>{t('about.modal.f5_desc')}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="feature-card glass-card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
                    <div className="feat-icon-wrapper" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></div>
                    <h4 style={{ fontSize: '1.1rem', margin: 0 }}>{t('about.modal.f6_title')}</h4>
                    <p style={{ fontSize: '0.95rem', color: '#9ca3af', margin: 0, lineHeight: 1.5 }}>{t('about.modal.f6_desc')}</p>
                </motion.div>
            </div>
        </div>
    </section>
  );
}
