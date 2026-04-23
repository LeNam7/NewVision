import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeTransition() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleTrigger = (e: Event) => {
            const customEvent = e as CustomEvent;
            const action = customEvent.detail?.action;
            
            if (isActive) return;

            setIsActive(true);

            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d', { alpha: true });
            if (!ctx) return;

            const width = window.innerWidth;
            const height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            const startTime = performance.now();
            const duration = 1100; // Nghỉ chút ở giữa để nháy sáng hợp lý

            let actionFired = false;

            // ===================================
            // GIẢM MẬT ĐỘ - TINH TẾ & GỌN GÀNG HƠN
            // ===================================
            const buses: { y1: number; y2: number; thick: number; midX1: number; midX2: number }[] = [];
            
            // Xây dựng cụm Data Bus
            const addBundle = (baseY: number, count: number, spacing: number, thick: number, dx: number, dy: number, startXShift = 0) => {
                const midX1 = (width * 0.4) + startXShift;
                const midX2 = midX1 + dx;

                for (let i = -(count-1)/2; i <= (count-1)/2; i++) {
                    buses.push({
                        y1: baseY + i * spacing,
                        y2: baseY + dy + i * spacing,
                        thick: i === 0 ? thick + 6 : thick, // Lõi tín hiệu tĩnh
                        midX1: midX1,
                        midX2: midX2
                    });
                }
            };

            // Gọn gàng: Chỉ gồm 1 dải LỚN siêu nét gập lên, và 1 dải NHỎ gập xuống đồng điệu
            addBundle(height * 0.7, 3, 28, 14, width * 0.2, -width * 0.2, 0);       // Cụm chính
            addBundle(height * 0.3, 2, 20, 8, width * 0.15, width * 0.15, -width * 0.1); // Cụm phụ

            const drawTransition = () => {
                const now = performance.now();
                const elapsed = now - startTime;
                let progress = elapsed / duration;
                
                if (progress >= 1) progress = 1;

                // Fire event ở đúng lúc flash chói nhất
                if (progress >= 0.5 && !actionFired) {
                    if (action) action();
                    actionFired = true;
                }

                ctx.clearRect(0, 0, width, height);

                const rgb = theme === 'dark' ? '16, 185, 129' : '22, 163, 74';

                // 1. CẢM GIÁC CHUYỂN CẢNH (THE FLASH BLINDING EFFECT)
                // Che lấp màn hình ở giữa thời gian giúp sự giật cục của CSS Theme bị lấp liếm hoàn toàn
                let flashAlpha = 0;
                if (progress > 0.3 && progress < 0.7) {
                    // Parabola đạt đỉnh 1.0 tại progress = 0.5
                    flashAlpha = Math.sin(((progress - 0.3) / 0.4) * Math.PI);
                }
                
                if (flashAlpha > 0) {
                    ctx.globalCompositeOperation = 'source-over';
                    ctx.fillStyle = `rgba(${rgb}, ${flashAlpha})`;
                    ctx.fillRect(0, 0, width, height);

                    // Hiệu ứng Grid vi mạch chìm trong quá trình flash
                    ctx.strokeStyle = `rgba(255, 255, 255, ${flashAlpha * 0.15})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    for (let x = 0; x < width; x += 40) { ctx.moveTo(x, 0); ctx.lineTo(x, height); }
                    for (let y = 0; y < height; y += 40) { ctx.moveTo(0, y); ctx.lineTo(width, y); }
                    ctx.stroke();
                }

                // 2. VẼ MẠCH ĐIỆN VỚI DESTINATION-OUT (Rõ nét nhưng không lạm dụng)
                buses.forEach(b => {
                    const startX = -200;
                    const endX = width + 200;

                    const path = new Path2D();
                    path.moveTo(startX, b.y1);
                    path.lineTo(b.midX1, b.y1);
                    path.lineTo(b.midX2, b.y2);
                    path.lineTo(endX, b.y2);

                    ctx.lineJoin = 'miter';
                    ctx.miterLimit = 2;

                    // Stroke Dày
                    ctx.globalCompositeOperation = 'source-over';
                    ctx.strokeStyle = `rgba(${rgb}, 0.8)`;
                    ctx.lineWidth = b.thick;
                    ctx.stroke(path);

                    // Tẩy viền
                    ctx.globalCompositeOperation = 'destination-out';
                    ctx.strokeStyle = 'black';
                    ctx.lineWidth = b.thick * 0.7;
                    ctx.stroke(path);

                    // Lõi phát sáng
                    ctx.globalCompositeOperation = 'source-over';
                    ctx.strokeStyle = `rgba(255, 255, 255, 0.9)`;
                    ctx.lineWidth = b.thick * 0.2;
                    ctx.stroke(path);
                });

                // 3. MÁY QUÉT LASER KHỞI ĐỘNG MẠCH
                const currentX = -width * 0.2 + (width * 1.4) * progress;
                const glowSpread = width * 0.2; 

                ctx.globalCompositeOperation = 'destination-in';
                const grad = ctx.createLinearGradient(currentX - glowSpread, 0, currentX + glowSpread, 0);
                grad.addColorStop(0, 'rgba(0, 0, 0, 0)');      
                // Càng ở đỉnh flash (progress=0.5), cột quét càng dày và rực rỡ
                grad.addColorStop(0.5, `rgba(0, 0, 0, ${1 - flashAlpha * 0.3})`);    
                grad.addColorStop(1, 'rgba(0, 0, 0, 0)');      
                
                ctx.fillStyle = grad;
                ctx.fillRect(0, 0, width, height);

                // Cục phát sáng trên các rãnh đi qua máy quét
                ctx.globalCompositeOperation = 'source-over';
                buses.forEach(b => {
                    let y = b.y1;
                    if (currentX > b.midX1 && currentX < b.midX2) {
                        const p = (currentX - b.midX1) / (b.midX2 - b.midX1);
                        y = b.y1 + (b.y2 - b.y1) * p;
                    } else if (currentX >= b.midX2) {
                        y = b.y2;
                    }

                    if (currentX > -50 && currentX < width + 50) {
                        ctx.beginPath();
                        ctx.arc(currentX, y, (b.thick * 0.5) + 3, 0, Math.PI * 2);
                        ctx.fillStyle = '#ffffff';
                        ctx.shadowColor = `rgba(${rgb}, 1)`;
                        ctx.shadowBlur = 20;
                        ctx.fill();
                        ctx.shadowBlur = 0;
                    }
                });

                if (progress < 1) {
                    requestAnimationFrame(drawTransition);
                } else {
                    ctx.clearRect(0, 0, width, height);
                    setIsActive(false);
                }
            };

            requestAnimationFrame(drawTransition);
        };

        window.addEventListener('triggerCircuitTransition', handleTrigger);
        return () => window.removeEventListener('triggerCircuitTransition', handleTrigger);
    }, [theme, isActive]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 999999,
                display: isActive ? 'block' : 'none'
            }}
        />
    );
}
