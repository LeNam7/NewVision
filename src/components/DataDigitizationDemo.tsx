import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Server, CheckCircle2, ChevronRight, Binary, ScanLine } from 'lucide-react';

const DataDigitizationDemo = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        // Animation sequence
        const timer1 = setTimeout(() => setStep(1), 1000); // Start scanning
        const timer2 = setTimeout(() => setStep(2), 4000); // Extracting data
        const timer3 = setTimeout(() => setStep(3), 6000); // Processing to DB
        const timer4 = setTimeout(() => setStep(4), 8500); // Success
        
        // Loop back
        const loopTimer = setInterval(() => {
            setStep(0);
            setTimeout(() => setStep(1), 1000);
            setTimeout(() => setStep(2), 4000);
            setTimeout(() => setStep(3), 6000);
            setTimeout(() => setStep(4), 8500);
        }, 12000);

        return () => {
            clearTimeout(timer1); clearTimeout(timer2); 
            clearTimeout(timer3); clearTimeout(timer4);
            clearInterval(loopTimer);
        };
    }, []);

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#0f172a', fontFamily: 'system-ui, -apple-system, sans-serif', position: 'relative', overflow: 'hidden' }}>
            
            {/* Header */}
            <div style={{ backgroundColor: '#1e293b', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #334155', zIndex: 10 }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'rgba(16, 185, 129, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                    <ScanLine size={24} color="#10b981" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: '16px' }}>NVS Data Transformation</div>
                    <div style={{ color: '#94a3b8', fontSize: '13px', display: 'flex', gap: '6px', alignItems: 'center' }}>
                        <span>System Status:</span>
                        <span style={{ color: step >= 4 ? '#10b981' : '#eab308' }}>
                            {step === 0 ? 'Ready' : step < 4 ? 'Processing...' : 'Completed'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Stage */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', position: 'relative' }}>
                
                {/* Background Grid */}
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.05) 1px, transparent 1px)', backgroundSize: '30px 30px', zIndex: 0 }}></div>

                <div style={{ display: 'flex', width: '100%', maxWidth: '700px', alignItems: 'center', justifyContent: 'space-between', zIndex: 1 }}>
                    
                    {/* Source Document */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                        <div style={{ position: 'relative' }}>
                            <motion.div 
                                style={{ width: '120px', height: '160px', backgroundColor: '#f8fafc', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}
                                animate={{
                                    y: step === 1 ? [0, -5, 0] : 0,
                                }}
                                transition={{ repeat: step === 1 ? Infinity : 0, duration: 2 }}
                            >
                                <div style={{ height: '12px', width: '100%', backgroundColor: '#cbd5e1', borderRadius: '4px' }}></div>
                                <div style={{ height: '8px', width: '80%', backgroundColor: '#e2e8f0', borderRadius: '4px' }}></div>
                                <div style={{ height: '8px', width: '90%', backgroundColor: '#e2e8f0', borderRadius: '4px' }}></div>
                                <div style={{ height: '8px', width: '60%', backgroundColor: '#e2e8f0', borderRadius: '4px' }}></div>
                                
                                <div style={{ marginTop: 'auto', height: '40px', width: '100%', backgroundColor: '#cbd5e1', borderRadius: '4px', opacity: 0.5 }}></div>
                            </motion.div>

                            {/* Scanner Laser */}
                            <AnimatePresence>
                                {step >= 1 && step < 3 && (
                                    <motion.div
                                        initial={{ top: 0, opacity: 0 }}
                                        animate={{ top: ['0%', '100%', '0%'], opacity: [0.8, 1, 0.8] }}
                                        transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                                        style={{ position: 'absolute', left: '-10px', right: '-10px', height: '2px', backgroundColor: '#10b981', boxShadow: '0 0 15px 5px rgba(16, 185, 129, 0.5)' }}
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                        <div style={{ color: '#94a3b8', fontSize: '14px', fontWeight: 500 }}>Physical Documents</div>
                    </div>

                    {/* Data Flow / Transformation */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', height: '100px' }}>
                        {step >= 2 && (
                            <>
                                {/* Animated Particles representing extracted data */}
                                {[...Array(8)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ x: -80, y: 0, opacity: 0, scale: 0.5 }}
                                        animate={{ 
                                            x: 80, 
                                            y: (Math.random() - 0.5) * 40,
                                            opacity: [0, 1, 0],
                                            scale: [0.5, 1, 0.5]
                                        }}
                                        transition={{ 
                                            duration: 1.5, 
                                            repeat: Infinity, 
                                            delay: i * 0.2,
                                            ease: "easeInOut"
                                        }}
                                        style={{ position: 'absolute', top: '50%', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                    >
                                        {i % 2 === 0 ? <Binary size={16} /> : <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 8px #10b981' }}></div>}
                                    </motion.div>
                                ))}
                            </>
                        )}
                        
                        <div style={{ marginTop: 'auto', display: 'flex', gap: '8px', color: '#10b981', opacity: step >= 1 ? 1 : 0.2, transition: 'opacity 0.5s' }}>
                            <ChevronRight size={20} />
                            <ChevronRight size={20} style={{ marginLeft: '-12px' }} />
                            <ChevronRight size={20} style={{ marginLeft: '-12px' }} />
                        </div>
                        <div style={{ color: step >= 2 ? '#10b981' : '#475569', fontSize: '12px', marginTop: '8px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', transition: 'color 0.5s' }}>
                            Digitizing
                        </div>
                    </div>

                    {/* Target Database */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                        <div style={{ position: 'relative' }}>
                            <motion.div 
                                style={{ width: '120px', height: '160px', backgroundColor: '#1e293b', borderRadius: '8px', border: '2px solid', borderColor: step >= 3 ? '#10b981' : '#334155', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center', transition: 'border-color 0.5s', boxShadow: step >= 3 ? '0 0 30px rgba(16,185,129,0.2)' : 'none' }}
                                animate={{
                                    scale: step === 3 ? [1, 1.05, 1] : 1,
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <Server size={32} color={step >= 3 ? '#10b981' : '#475569'} style={{ margin: '0 auto', transition: 'color 0.5s' }} />
                                <Database size={32} color={step >= 3 ? '#10b981' : '#475569'} style={{ margin: '0 auto', transition: 'color 0.5s' }} />
                                
                                <AnimatePresence>
                                    {step >= 4 && (
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            style={{ position: 'absolute', bottom: '-10px', right: '-10px', backgroundColor: '#0f172a', borderRadius: '50%', padding: '2px' }}
                                        >
                                            <CheckCircle2 size={28} color="#10b981" fill="#0f172a" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                        <div style={{ color: step >= 3 ? '#10b981' : '#94a3b8', fontSize: '14px', fontWeight: 500, transition: 'color 0.5s' }}>Secure Cloud DB</div>
                    </div>

                </div>
            </div>

            {/* Console Log Area */}
            <div style={{ height: '140px', backgroundColor: '#020617', borderTop: '1px solid #1e293b', padding: '16px', fontFamily: 'monospace', fontSize: '13px', color: '#10b981', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <AnimatePresence>
                    {step >= 0 && (
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                            <span style={{ color: '#64748b' }}>[10:00:00]</span> SYSTEM: Initializing digitization pipeline... OK
                        </motion.div>
                    )}
                    {step >= 1 && (
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                            <span style={{ color: '#64748b' }}>[10:00:01]</span> SCANNER: Reading physical document layout...
                        </motion.div>
                    )}
                    {step >= 2 && (
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                            <span style={{ color: '#64748b' }}>[10:00:04]</span> OCR_ENGINE: Extracting text & structure [||||||||||] 100%
                        </motion.div>
                    )}
                    {step >= 3 && (
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                            <span style={{ color: '#64748b' }}>[10:00:06]</span> DB_SYNC: Transmitting secure payload to Cloud...
                        </motion.div>
                    )}
                    {step >= 4 && (
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                            <span style={{ color: '#64748b' }}>[10:00:08]</span> SYSTEM: <span style={{ color: '#fff' }}>Transformation Successful. Data mapped & secured.</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default DataDigitizationDemo;
