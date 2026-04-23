import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, Search, LayoutTemplate, Link, MoreVertical, MousePointer2, Coffee, ChevronRight } from 'lucide-react';

const TelegramBotDemo = () => {
    const [step, setStep] = useState(0);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [step]);

    useEffect(() => {
        const timer1 = setTimeout(() => setStep(1), 1000); // Typing...
        const timer2 = setTimeout(() => setStep(2), 3000); // Sent message
        const timer3 = setTimeout(() => setStep(3), 4000); // Bot typing...
        const timer4 = setTimeout(() => setStep(4), 5500); // Bot initial response
        const timer5 = setTimeout(() => setStep(5), 7500); // Bot typing...
        const timer6 = setTimeout(() => setStep(6), 9000); // Bot final result
        const timer7 = setTimeout(() => setStep(7), 10500); // Cursor moves in
        const timer8 = setTimeout(() => setStep(8), 11500); // Cursor clicks
        const timer9 = setTimeout(() => setStep(9), 11800); // Landing page opens
        
        // Loop back
        const loopTimer = setInterval(() => {
            setStep(0);
            setTimeout(() => setStep(1), 1000);
            setTimeout(() => setStep(2), 3000);
            setTimeout(() => setStep(3), 4000);
            setTimeout(() => setStep(4), 5500);
            setTimeout(() => setStep(5), 7500);
            setTimeout(() => setStep(6), 9000);
            setTimeout(() => setStep(7), 10500);
            setTimeout(() => setStep(8), 11500);
            setTimeout(() => setStep(9), 11800);
        }, 18000);

        return () => {
            clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3);
            clearTimeout(timer4); clearTimeout(timer5); clearTimeout(timer6);
            clearTimeout(timer7); clearTimeout(timer8); clearTimeout(timer9);
            clearInterval(loopTimer);
        };
    }, []);

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#0e1621', fontFamily: 'system-ui, -apple-system, sans-serif', position: 'relative', overflow: 'hidden' }}>
            {/* Header */}
            <div style={{ backgroundColor: '#17212b', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #101921', zIndex: 10 }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#10b981', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 10px rgba(16,185,129,0.4)', flexShrink: 0 }}>
                    <Bot size={24} color="#000" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: '16px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>NVS Builder Bot</div>
                    <div style={{ color: '#10b981', fontSize: '13px', display: 'flex', gap: '4px', alignItems: 'center' }}>
                        {(step === 3 || step === 5) ? (
                            <motion.span 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                style={{color: '#3390ec'}}
                            >
                                typing...
                            </motion.span>
                        ) : (
                            <span style={{color: '#8795a5'}}>bot</span>
                        )}
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '16px', color: '#8795a5', flexShrink: 0 }}>
                    <Search size={20} />
                    <MoreVertical size={20} />
                </div>
            </div>

            {/* Chat Area */}
            <div ref={chatContainerRef} className="chat-container-no-scrollbar" style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                <style>{`
                    .chat-container-no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
                
                <AnimatePresence>
                    {step >= 2 && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 10, originX: 1, originY: 1 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            style={{ alignSelf: 'flex-end', maxWidth: '85%' }}
                        >
                            <div style={{ backgroundColor: '#2b5278', color: '#fff', padding: '10px 14px', borderRadius: '16px 16px 4px 16px', fontSize: '15px', lineHeight: 1.4, boxShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                                Tạo cho tôi một landing page quán cà phê The Modern Bean mang màu nâu nhạt.
                                <div style={{ fontSize: '11px', color: '#7b9cb8', textAlign: 'right', marginTop: '4px', display: 'flex', justifyContent: 'flex-end', gap: '4px', alignItems: 'center' }}>
                                    21:42 <span style={{ color: '#3390ec' }}>✓✓</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {step >= 4 && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 10, originX: 0, originY: 1 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            style={{ alignSelf: 'flex-start', maxWidth: '85%', display: 'flex', gap: '8px' }}
                        >
                            <div style={{ backgroundColor: '#182533', color: '#fff', padding: '10px 14px', borderRadius: '16px 16px 16px 4px', fontSize: '15px', lineHeight: 1.4, boxShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                                <div style={{ fontWeight: 600, color: '#3390ec', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>NVS Builder Bot <Bot size={14}/></div>
                                Đã nhận yêu cầu! Đang phân tích chủ đề "quán cà phê"...<br/><br/>
                                <span style={{ color: '#10b981' }}>✓</span> Khởi tạo cấu trúc giao diện.<br/>
                                <span style={{ color: '#10b981' }}>✓</span> Thiết lập bảng màu (Nâu & Beige).<br/>
                                <motion.span 
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                                >
                                    <span style={{ color: '#10b981' }}>✓</span> Sinh nội dung tự động...
                                </motion.span>
                                <div style={{ fontSize: '11px', color: '#687c8d', textAlign: 'right', marginTop: '4px' }}>21:42</div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {step >= 6 && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 10, originX: 0, originY: 1 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            style={{ alignSelf: 'flex-start', maxWidth: '85%', display: 'flex', gap: '8px' }}
                        >
                            <div style={{ backgroundColor: '#182533', color: '#fff', padding: '10px 14px', borderRadius: '16px 16px 16px 4px', fontSize: '15px', lineHeight: 1.4, boxShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                                <div style={{ fontWeight: 600, color: '#3390ec', marginBottom: '6px' }}>NVS Builder Bot</div>
                                Hoàn tất! 🎉 Đây là bản xem trước Landing Page của bạn:
                                
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    style={{ marginTop: '12px', backgroundColor: '#0f1620', borderRadius: '8px', overflow: 'hidden', border: '1px solid #233040' }}
                                >
                                    <div style={{ height: '100px', backgroundColor: '#4a3b32', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <LayoutTemplate size={40} color="#f5d082" opacity={0.9} />
                                        <div style={{ position: 'absolute', bottom: 12, left: 16, right: 16 }}>
                                            <div style={{ height: '14px', width: '60%', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '4px', marginBottom: '8px' }}></div>
                                            <div style={{ height: '8px', width: '40%', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
                                        </div>
                                    </div>
                                    <div style={{ padding: '10px 14px' }}>
                                        <div style={{ fontWeight: 500, fontSize: '15px', color: '#fff' }}>The Modern Bean</div>
                                        <div style={{ fontSize: '13px', color: '#8795a5', marginTop: '4px' }}>Giao diện đặt bàn và menu cà phê đặc sản...</div>
                                    </div>
                                </motion.div>
                                
                                <div style={{ marginTop: '12px', display: 'flex', gap: '8px', position: 'relative' }}>
                                    <button style={{ flex: 1, padding: '10px', borderRadius: '8px', backgroundColor: step === 8 ? '#1c2937' : '#243345', border: 'none', color: '#3390ec', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', cursor: 'pointer', fontSize: '14px', transition: 'background-color 0.1s' }}>
                                        <Link size={16} /> Xem ngay
                                    </button>
                                    
                                    {/* Mouse Cursor Animation - Anchored to the button */}
                                    {step >= 7 && step <= 8 && (
                                        <motion.div
                                            initial={{ opacity: 0, x: 150, y: 150 }}
                                            animate={{ 
                                                opacity: 1, 
                                                x: 0, 
                                                y: 0,
                                                scale: step === 8 ? 0.9 : 1
                                            }}
                                            transition={{
                                                x: { duration: 0.8, ease: "easeOut" },
                                                y: { duration: 0.8, ease: "easeOut" },
                                                scale: { duration: 0.1 },
                                                opacity: { duration: 0.2 }
                                            }}
                                            style={{ position: 'absolute', top: '50%', left: '50%', marginTop: '-8px', marginLeft: '-8px', zIndex: 100, pointerEvents: 'none' }}
                                        >
                                            <MousePointer2 size={32} color="#fff" fill="#000" />
                                        </motion.div>
                                    )}
                                </div>
                                <div style={{ fontSize: '11px', color: '#687c8d', textAlign: 'right', marginTop: '6px' }}>21:42</div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Input Area */}
            <div style={{ backgroundColor: '#17212b', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ flex: 1, height: '40px', backgroundColor: '#242f3d', borderRadius: '20px', padding: '0 16px', display: 'flex', alignItems: 'center', color: '#fff', fontSize: '14px' }}>
                    {step === 0 && <span style={{ color: '#8795a5' }}>Message...</span>}
                    {step === 1 && (
                        <motion.span 
                            initial={{ width: 0, opacity: 1 }} 
                            animate={{ width: "auto" }} 
                            transition={{ duration: 1.5, ease: "linear" }}
                            style={{ overflow: 'hidden', whiteSpace: 'nowrap', display: 'inline-block' }}
                        >
                            Tạo cho tôi một landing page quán cà phê 
                        </motion.span>
                    )}
                    {step >= 2 && <span style={{ color: '#8795a5' }}>Message...</span>}
                </div>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#3390ec', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, opacity: step === 1 ? 1 : 0.5 }}>
                    <Send size={18} color="#fff" style={{ marginLeft: '-2px' }} />
                </div>
            </div>

            {/* Landing Page Reveal */}
            <AnimatePresence>
                {step >= 9 && (
                    <motion.div
                        initial={{ opacity: 0, y: '100%', borderRadius: '16px' }}
                        animate={{ opacity: 1, y: 0, borderRadius: '0px' }}
                        exit={{ opacity: 0, y: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 200, backgroundColor: '#0f0c0a', backgroundImage: 'radial-gradient(circle at 100% 0%, #2a1f18 0%, #0f0c0a 50%)', display: 'flex', flexDirection: 'column' }}
                    >
                        {/* Landing Page Navbar */}
                        <div style={{ padding: '20px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e8d8ce', fontWeight: 600, fontSize: '16px', letterSpacing: '1px' }}>
                                <Coffee size={20} color="#c59d5f" /> THE MODERN BEAN
                            </div>
                            <div style={{ display: 'flex', gap: '24px', fontSize: '13px', fontWeight: 500, color: '#a38d7d', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                <span style={{ color: '#e8d8ce', cursor: 'pointer' }}>Menu</span>
                                <span style={{ cursor: 'pointer' }}>Story</span>
                                <span style={{ cursor: 'pointer' }}>Contact</span>
                            </div>
                        </div>
                        
                        {/* Landing Page Hero */}
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '0 32px', overflow: 'hidden' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center', width: '100%' }}>
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                                    style={{ zIndex: 2 }}
                                >
                                    <div style={{ color: '#c59d5f', fontSize: '11px', letterSpacing: '3px', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{ height: '1px', width: '30px', backgroundColor: '#c59d5f' }}></div>
                                        Premium Selection
                                    </div>
                                    <div style={{ color: '#ffffff', fontSize: '42px', fontWeight: 400, margin: '0 0 20px 0', lineHeight: 1.15, fontFamily: '"Playfair Display", "Times New Roman", Times, serif' }}>
                                        Artisan Coffee,<br/>Roasted to <span style={{ color: '#c59d5f', fontStyle: 'italic' }}>Perfection.</span>
                                    </div>
                                    <div style={{ color: '#a38d7d', fontSize: '14px', lineHeight: 1.6, marginBottom: '32px', maxWidth: '90%' }}>
                                        Trải nghiệm không gian thư giãn cùng những ly cà phê nguyên bản được chắt lọc từ những vùng trồng cà phê trứ danh, pha chế cẩn thận bởi các nghệ nhân.
                                    </div>
                                    
                                    <div style={{ display: 'flex', gap: '16px' }}>
                                        <button style={{ backgroundColor: '#c59d5f', color: '#0f0c0a', border: 'none', padding: '12px 28px', borderRadius: '4px', fontWeight: 600, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'all 0.2s', letterSpacing: '0.5px' }}>
                                            Đặt bàn
                                        </button>
                                        <button style={{ backgroundColor: 'transparent', color: '#e8d8ce', border: '1px solid rgba(232, 216, 206, 0.3)', padding: '12px 28px', borderRadius: '4px', fontWeight: 600, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'all 0.2s', letterSpacing: '0.5px' }}>
                                            Menu <ChevronRight size={14} />
                                        </button>
                                    </div>
                                </motion.div>
                                
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 100 }}
                                    style={{ position: 'relative', height: '320px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
                                >
                                    <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80" alt="Coffee" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,12,10,0.8) 0%, transparent 50%)' }}></div>
                                    
                                    {/* Glassmorphism badge */}
                                    <div style={{ position: 'absolute', bottom: '20px', left: '20px', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span style={{ color: '#fff', fontSize: '12px', fontWeight: 600 }}>Cà phê đặc sản</span>
                                            <span style={{ color: '#c59d5f', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>100% Arabica</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TelegramBotDemo;
