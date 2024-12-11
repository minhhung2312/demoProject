import React, { useState, useEffect } from 'react';
import '../assets/css/Home.css';

function Banner() {

    const bannerImg = [
        '/images/banner1.webp',
        '/images/banner2.webp',
        '/images/banner3.webp',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('');
    const [isPaused, setIsPaused] = useState(false);

    const nextImg = () => {
        setSlideDirection('right');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImg.length);
    }

    const prevImg = () => {
        setSlideDirection('left');
        setCurrentIndex((prevIndex) => (prevIndex - 1 + bannerImg.length) % bannerImg.length);
    }

    useEffect(() => {
        if(isPaused) return;
        const interval = setInterval(() => {
            nextImg();
        }, 5000);

        return () => clearInterval(interval);
    })
    return ( 
        <div 
            className="banner"
            onMouseEnter={() => setIsPaused(true)} // dừng chuyển ảnh khi có sự kiện hover vào banner
            onMouseLeave={() => setIsPaused(false)} // tiếp tục chuyển ảnh
        >
            <div className="buttons">
                <button className="left-btn" onClick={prevImg}>
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <button className="right-btn" onClick={nextImg}>
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
            <div className={`slider ${slideDirection}`}>
                <img 
                    src={bannerImg[currentIndex]} 
                    alt={`Banner ${currentIndex + 1}`}
                    key={currentIndex}
                />
            </div>
        </div>
    );
}

export default Banner;