'use client';
import { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    // Function to handle scroll event
    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;
        setScrollProgress(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="fixed left-auto h-screen right-0" style={{ width: '8px', background: 'gray' }}>
                <div
                    className="progress-bar top-0 left-auto right-0 bg-brand origin-top-right z-50 h-screen rounded-3xl"
                    style={{
                        width: '8px',
                        transform: `scaleY(${scrollProgress / 100}) translateZ(0)`,
                        transition: 'transform 0.5s ease-out',
                    }}
                />
            </div>
            <div className="fixed left-0 h-screen right-auto" style={{ width: '8px', background: 'gray' }}>
            <div
                className="progress-bar top-0 left-0 right-auto bg-brand origin-top-right z-50 h-screen rounded-3xl"
                style={{
                    width: '8px',
                    transform: `scaleY(${scrollProgress / 100}) translateZ(0)`,
                    transition: 'transform 0.5s ease-out',
                }}
            />
        </div>
        </>
    );
};

export default ScrollProgressBar;
