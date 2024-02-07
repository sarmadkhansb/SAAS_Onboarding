import React, { useState } from 'react';
import Image from 'next/image';

import plan_img_1 from "../../../../public/assets/img/plan/plan-1.png";
import plan_img_2 from "../../../../public/assets/img/plan/plan-2.png";
import plan_img_3 from "../../../../public/assets/img/plan/plan-3.png";
import plan_img_4 from "../../../../public/assets/img/plan/plan-4.png";
import plan_img_5 from "../../../../public/assets/img/plan/plan-5.png";
import plan_img_6 from "../../../../public/assets/img/plan/plan-6.png";
import admin from "../../../../public/assets/img/plan/portal-profile.webp";
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
        }
    };

    const img_box = getViewImageBox();

    return (
        <>
            <div className="tp-plan-area tp-plan-space">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-7 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
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
                                <h3 className="tp-section-title-5 text-black pb-15">Detailed customer CRM<br /></h3> <p>Clients can securely update their billing details and payment methods without asking your team.</p>
                                <div className="tp-plan-feature">
                                    <ul>
                                        <li><i className="far fa-check"></i>Custom fields</li> <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Extend client profiles with additional custom fields.</p>
                                        <li><i className="far fa-check"></i>Localization and time zones</li><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;All dates and times shown in your clients' local timezone.</p>
                                        <li><i className="far fa-check"></i>GDPR data export and deletion support</li><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Allow your EU customers to request data export.</p>
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
