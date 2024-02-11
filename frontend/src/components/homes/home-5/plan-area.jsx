import React, { useState } from 'react';
import Image from 'next/image';

import plan_service_1 from "../../../../public/assets/img/plan/portal-services-1.webp";
import plan_service_2 from "../../../../public/assets/img/plan/portal-services-2.webp";
import plan_service_3 from "../../../../public/assets/img/plan/portal-services-3.webp";
import plan_service_4 from "../../../../public/assets/img/plan/portal-services-4.webp";

import img from "../../../../public/assets/img/cta/cta-title-icon-2.png";

const plan_content = {
    img_box_2: [
        { id: 1, img: plan_service_1, cls: "1", highlightArea: { x: 280, y: 125, radius: 20 } },
        { id: 2, img: plan_service_2, cls: "1", highlightArea: { x: 377, y: 91, radius: 20 } },
        { id: 3, img: plan_service_3, cls: "1", highlightArea: { x: 190, y: 220, radius: 20 } },
        { id: 4, img: plan_service_4, cls: "1", highlightArea: { x: 240, y: 217, radius: 20 } },
    ],
    sub_title: "A page inside the customer portal showing all your public services.",
    title: <>Your <span>Services</span> catalog</>,
};

const accordion_data = [
    {
        id: 1,
        question: "Organized into folders",
        answer: <>Group your services into folders for easier navigation.</>,
        accordion_id: "headingOne",
        collapsed: "collapsed",
        data_bs_target: "#collapseOne",
        aria_expanded: true,
        aria_controls: "collapseOne",
        show: "",
        active: "",
    },
    {
        id: 2,
        question: "Add featured images",
        answer: <>Images help your services stand out in the services list.</>,
        accordion_id: "headingTwo",
        collapsed: "collapsed",
        data_bs_target: "#collapseTwo",
        aria_expanded: true,
        aria_controls: "collapseTwo",
        show: "",
        active: "",
    },
    {
        id: 3,
        question: "Control which services get shown",
        answer: <>Only your public services are included in the services list.</>,
        accordion_id: "headingThree",
        collapsed: "collapsed",
        data_bs_target: "#collapseThree",
        aria_expanded: true,
        aria_controls: "collapseThree",
        show: "",
        active: "",
    },
];

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
                            <div className="tp-custom-accordio-2">
                                <div className="accordion" id="accordionExample">
                                    {accordion_data.map((item, i) =>
                                        <div key={i} className="accordion-items">
                                            <h2 className="accordion-header" id={item.accordion_id}>
                                                <button
                                                    className={`accordion-buttons ${item.collapsed}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={item.data_bs_target}
                                                    aria-expanded={item.aria_expanded}
                                                    aria-controls={item.aria_controls}
                                                >
                                                    {item.question}
                                                </button>
                                            </h2>
                                            <div
                                                id={item.aria_controls}
                                                className={`accordion-collapse collapse ${item.show}`}
                                                aria-labelledby={item.accordion_id}
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    {item.answer}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
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
