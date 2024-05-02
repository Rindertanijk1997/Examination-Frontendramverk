import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';

function MySwiperComponent() {
    const navigate = useNavigate();

    const pages = [
        { path: "/", label: "Home" },
        { path: "/events", label: "Events" },
        { path: "/event", label: "Event" },
        { path: "/order", label: "Order" },
        { path: "/tickets", label: "Tickets" }
    ];

    const handleSlideChange = (swiper) => {
        const currentPage = pages[swiper.activeIndex];
        navigate(currentPage.path);
    };

    return (
        <Swiper onSlideChange={handleSlideChange}>
            {pages.map((page, index) => (
                <SwiperSlide key={index}>
                    {/* Du kan lägga till innehåll för varje slide här om du vill */}
                    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h1>{page.label}</h1>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default MySwiperComponent;