import React, { useState } from 'react';
import Image from 'next/image';

import plan_img_1 from "../../../../public/assets/img/plan/plan-1.png";
import plan_img_2 from "../../../../public/assets/img/plan/plan-2.png";
import plan_img_3 from "../../../../public/assets/img/plan/plan-3.png";
import plan_img_4 from "../../../../public/assets/img/plan/plan-4.png";
import plan_img_5 from "../../../../public/assets/img/plan/plan-5.png";
import plan_img_6 from "../../../../public/assets/img/plan/plan-6.png";
import admin from "../../../../public/assets/img/plan/order-admin.webp";
import contractor from "../../../../public/assets/img/plan/order-contractor.webp";
import client from "../../../../public/assets/img/plan/order-client.webp";
import img from "../../../../public/assets/img/cta/cta-title-icon-1.png";

const CtaArea = () => {
    const [view, setView] = useState('Admin'); // Default view is Admin

    const handleViewChange = (event) => {
        setView(event.target.value);
    };

    const getViewImageBox = () => {
        switch (view) {
            case 'Admin':
                return [
                    { id: 1, img: admin, cls: "1" },
                ];
            case 'Contractor':
                return [
                    { id: 1, img: contractor, cls: "1" },
                ];
            case 'Client':
                return [
                    { id: 1, img: client, cls: "1" },
                ];
            default:
                return [];
        }
    };

    const img_box = getViewImageBox();

    return (
        <>
            <div className="tp-plan-area tp-plan-space">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-7 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                                <div className="form-group mt-3" style={{ border: '1px solid #ccc', borderRadius: '2px', padding: '', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',paddingBottom:'20px' }}>
                                    <select className="form-control" id="viewSelect" value={view} onChange={handleViewChange} style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', backgroundColor: '#f9f9f9', border: 'none', borderRadius: '5px', }}>
                                        <option value="Admin">View As Admin</option>
                                        <option value="Contractor">View As Contractor</option>
                                        <option value="Client">View As Client</option>
                                    </select>
                                </div>
                            <div className="tp-plan-img-box p-relative">
                                {img_box.map((item, i) =>
                                    <div key={i} className={`tp-plan-img-${item.cls}`}>
                                        <Image src={item.img} alt="theme-pure" />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                            <div className="tp-plan-section-box">
                                <div className="tp-plan-section-icon pb-30">
                                    <Image src={img} alt="theme-pure" />
                                </div>
                                <h4 className="tp-section-title-5 text-black pb-15">Client messaging, in one place.<br />Send and receive order updates without leaving email.</h4>
                                <div className="tp-plan-feature">
                                    <ul>
                                        <li><i className="far fa-check"></i>Feels just like email to your clients.</li>
                                        <li><i className="far fa-check"></i>Incoming email processing</li>
                                        <li><i className="far fa-check"></i>Email from your domain</li>
                                        <li><i className="far fa-check"></i>Open tracking</li>
                                        <li><i className="far fa-check"></i>Business hours auto-reply</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CtaArea;
