import React, { useState } from 'react';
import Image from 'next/image';

import plan_service_1 from "../../../../public/assets/img/plan/subscriptions-1.webp";
import plan_service_2 from "../../../../public/assets/img/plan/subscriptions-2.webp";
import plan_service_3 from "../../../../public/assets/img/plan/subscriptions-3.webp";


import img from "../../../../public/assets/img/cta/cta-title-icon-2.png";

const plan_content = {
    img_box_2: [
        { id: 1, img: plan_service_1, cls: "8", highlightArea: { x: 25, y: 101, radius: 15 } },
        { id: 2, img: plan_service_2, cls: "1", highlightArea: { x: 18, y: 148, radius: 15 } },
        { id: 3, img: plan_service_3, cls: "8", highlightArea: { x: 18, y: 41, radius: 15 } },
    ],
    sub_title: "Self-service features for subscription management and request-based services.",
    title: <>Handle <span>Subscriptions and Request</span></>,
};

const PlanArea = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleImageClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % plan_content.img_box_2.length);
    };

    return (
        <>
            <div onContextMenu={e => e.preventDefault()} className="tp-plan-area tp-plan-2-space fix">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-5 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                            <div className="tp-plan-section-box">
                                <div className="tp-plan-section-icon pb-30">
                                    <Image src={img} alt="theme-pure" />
                                </div>
                                <span className="tp-section-subtitle-5 text-black">{plan_content.sub_title}</span>
                                <h3 className="tp-section-title-5 text-black pb-25">{plan_content.title}</h3>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7  wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                            <div className="tp-plan-2-img-box p-relative" onClick={handleImageClick}>
                                <div className={`tp-plan-2-img-${plan_content.img_box_2[currentImageIndex].cls}`}>
                                    <Image src={plan_content.img_box_2[currentImageIndex].img} alt="theme-pure" />
                                    {plan_content.img_box_2[currentImageIndex].highlightArea && (
                                        <div className="highlight-overlay" style={{
                                            position: 'absolute',
                                            top: `${plan_content.img_box_2[currentImageIndex].highlightArea.y}px`,
                                            left: `${plan_content.img_box_2[currentImageIndex].highlightArea.x}px`,
                                            width: `${plan_content.img_box_2[currentImageIndex].highlightArea.radius * 2}px`,
                                            height: `${plan_content.img_box_2[currentImageIndex].highlightArea.radius * 2}px`,
                                            borderRadius: '50%',
                                            border: '2px solid white',
                                            backgroundColor: 'rgba(22, 223, 255, 0.62)',
                                            animation: 'pulse 1s infinite',
                                        }} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes pulse {
                    0% {
                        transform: scale(1);
                        opacity: 0.7;
                    }
                    50% {
                        transform: scale(1.1);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 0.7;
                    }
                }
            `}</style>
        </>
    );
};

export default PlanArea;