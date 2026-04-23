import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Point {
    x: number;
    y: number;
    timestamp: number;
}

interface Branch {
    path: { x: number; y: number }[];
    timestamp: number;
}

export default function CircuitCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth <= 768 || window.matchMedia("(pointer: coarse)").matches;
        }
        return false;
    });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768 || window.matchMedia("(pointer: coarse)").matches);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        const scale = 1; 

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width * scale;
        canvas.height = height * scale;
        ctx.scale(scale, scale);

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * scale;
            canvas.height = height * scale;
            ctx.scale(scale, scale);
        };
        window.addEventListener('resize', handleResize);

        const points: Point[] = [];
        const branches: Branch[] = [];
        let lastPoint: Point | null = null;
        
        let pointCount = 0;

        const maxLife = 500; // Vòng đời vừa đủ cho đuôi mờ dần
        const distThreshold = 18; // Khoảng cách giữa các chốt vuông

        const addPoint = (x: number, y: number) => {
            // Giới hạn tần suất xử lý trên mobile
            if (isMobile) {
                pointCount++;
                if (pointCount % 3 !== 0) return; // Bỏ qua 2/3 số điểm chạm trên mobile để giảm tải
            }

            const now = performance.now();
            
            if (!lastPoint) {
                lastPoint = { x, y, timestamp: now };
                points.push(lastPoint);
                return;
            }

            const dx = x - lastPoint.x;
            const dy = y - lastPoint.y;
            const dist = Math.hypot(dx, dy);

            // Gãy khúc chuẩn PCB
            if (dist > distThreshold) {
                const angle = Math.atan2(dy, dx);
                const snappedAngle = Math.round(angle / (Math.PI / 4)) * (Math.PI / 4);
                
                const newX = lastPoint.x + Math.cos(snappedAngle) * distThreshold;
                const newY = lastPoint.y + Math.sin(snappedAngle) * distThreshold;

                // Tẻ nhánh phụ hình chữ L hoặc Z đặc trưng của mạch chíp
                if (Math.random() < (isMobile ? 0.1 : 0.3)) { // Ít tia phụ trên mobile hơn
                    const dir = Math.random() > 0.5 ? Math.PI / 2 : -Math.PI / 2;
                    const a1 = snappedAngle + dir; // Góc vuông góc với thân chính
                    const L1 = 10 + Math.random() * 20;
                    
                    const p1X = lastPoint.x + Math.cos(a1) * L1;
                    const p1Y = lastPoint.y + Math.sin(a1) * L1;

                    // Khúc ngoặt tiếp chữ L (Chạy song song lại mạng lưới chính)
                    const a2 = snappedAngle; 
                    const L2 = 10 + Math.random() * 30;
                    const p2X = p1X + Math.cos(a2) * L2;
                    const p2Y = p1Y + Math.sin(a2) * L2;

                    branches.push({
                        path: [
                            { x: lastPoint.x, y: lastPoint.y }, // Nút rễ
                            { x: p1X, y: p1Y },                 // Khúc ngoặt
                            { x: p2X, y: p2Y }                  // Lỗ cắm chíp phụ (Node đích)
                        ],
                        timestamp: now
                    });
                }

                lastPoint = { x: newX, y: newY, timestamp: now };
                points.push(lastPoint);
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            addPoint(e.clientX, e.clientY);
        };
        
        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                addPoint(e.touches[0].clientX, e.touches[0].clientY);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);

        let animationId: number;
        const draw = () => {
            const now = performance.now();
            ctx.clearRect(0, 0, width, height);

            // Dọn dẹp memory
            while (points.length > 0 && now - points[0].timestamp > maxLife) points.shift();
            while (branches.length > 0 && now - branches[0].timestamp > maxLife) branches.shift();

            // Màu Cyber/PCB chuẩn sáng tươi
            const rgb = theme === 'dark' ? '16, 185, 129' : '22, 163, 74';
            
            // Vẽ các rễ nhánh (Branches)
            for (let i = 0; i < branches.length; i++) {
                const b = branches[i];
                const life = 1 - (now - b.timestamp) / maxLife;
                
                if (life > 0) {
                    ctx.beginPath();
                    ctx.moveTo(b.path[0].x, b.path[0].y);
                    ctx.lineTo(b.path[1].x, b.path[1].y);
                    ctx.lineTo(b.path[2].x, b.path[2].y);
                    
                    ctx.strokeStyle = `rgba(${rgb}, ${life * 0.5})`;
                    ctx.lineWidth = 1;
                    ctx.lineJoin = 'miter';
                    ctx.miterLimit = 2;
                    ctx.stroke();

                    // Via dot ở chốt cuối nhánh (Solid dot)
                    const endP = b.path[2];
                    ctx.beginPath();
                    ctx.arc(endP.x, endP.y, 2, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${rgb}, ${life * 0.8})`;
                    ctx.fill();
                }
            }

            // Vẽ Đường Xương Sống Chính (Main Trace)
            if (points.length > 1) {
                ctx.beginPath();
                ctx.moveTo(points[0].x, points[0].y);
                for (let i = 1; i < points.length; i++) {
                    ctx.lineTo(points[i].x, points[i].y);
                }
                ctx.strokeStyle = `rgba(${rgb}, 0.85)`;
                ctx.lineWidth = 2; // Đường điện tĩnh nét, thanh
                ctx.shadowColor = `rgba(${rgb}, 0.7)`;
                ctx.shadowBlur = isMobile ? 0 : 8; // Tắt shadow trên mobile
                ctx.lineJoin = 'miter';
                ctx.miterLimit = 2;
                ctx.stroke();

                ctx.shadowBlur = 0;

                // Trang trí các mấu via dọc theo trục chính
                for (let i = 0; i < points.length; i++) {
                    const p = points[i];
                    const life = 1 - (now - p.timestamp) / maxLife;

                    if (life > 0.1) {
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
                        // Rỗng giữa với viền neon
                        ctx.fillStyle = theme === 'dark' ? '#0f172a' : '#ffffff'; 
                        ctx.fill();
                        ctx.strokeStyle = `rgba(${rgb}, ${life})`;
                        ctx.lineWidth = 1.5;
                        ctx.stroke();
                    }
                }
                
                // Mõi Đầu (Head Node)
                const head = points[points.length - 1];
                ctx.beginPath();
                ctx.arc(head.x, head.y, 4, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, 0.9)`;
                ctx.shadowColor = `rgba(${rgb}, 1)`;
                ctx.shadowBlur = isMobile ? 0 : 15;
                ctx.fill();
                ctx.shadowBlur = 0;
            }

            animationId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            cancelAnimationFrame(animationId);
        };
    }, [theme, isMobile]);

    if (isMobile) return null;

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
                zIndex: 10001,
            }}
        />
    );
}
