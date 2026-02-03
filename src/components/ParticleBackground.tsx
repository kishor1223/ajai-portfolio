import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let waves: Wave[] = [];
        const particleCount = 100;

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas!.width) this.x = 0;
                else if (this.x < 0) this.x = canvas!.width;
                if (this.y > canvas!.height) this.y = 0;
                else if (this.y < 0) this.y = canvas!.height;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        class Wave {
            y: number;
            length: number;
            amplitude: number;
            frequency: number;
            opacity: number;
            phase: number;

            constructor(y: number, opacity: number, amplitude: number, frequency: number) {
                this.y = y;
                this.opacity = opacity;
                this.amplitude = amplitude;
                this.frequency = frequency;
                this.phase = Math.random() * Math.PI * 2;
                this.length = canvas!.width;
            }

            draw(t: number) {
                if (!ctx) return;
                ctx.beginPath();
                ctx.moveTo(0, this.y + Math.sin(this.phase + t * this.frequency) * this.amplitude);

                for (let i = 0; i < canvas!.width; i += 10) {
                    const waveY = this.y + Math.sin(i * 0.005 + this.phase + t * this.frequency) * this.amplitude;
                    ctx.lineTo(i, waveY);
                }

                ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }

            waves = [];
            // Add three distinct curved lines (waves)
            waves.push(new Wave(canvas!.height * 0.3, 0.1, 50, 0.001));
            waves.push(new Wave(canvas!.height * 0.5, 0.08, 70, 0.0008));
            waves.push(new Wave(canvas!.height * 0.7, 0.12, 40, 0.0012));
        };

        let t = 0;
        const animate = () => {
            t++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw curved animated lines (waves)
            waves.forEach(wave => {
                wave.draw(t);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                pointerEvents: 'none',
                opacity: 0.8
            }}
        />
    );
};

export default ParticleBackground;
