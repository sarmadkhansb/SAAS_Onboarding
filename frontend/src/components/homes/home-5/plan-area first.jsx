import React, { useState } from 'react';
import Image from 'next/image';

import plan_img_1 from "../../../../public/assets/img/plan/plan-1-1.png"
import plan_img_2 from "../../../../public/assets/img/plan/plan-1-2.png"
import plan_img_3 from "../../../../public/assets/img/plan/plan-1-3.png"
import plan_img_4 from "../../../../public/assets/img/plan/plan-1-4.png"
import plan_img_5 from "../../../../public/assets/img/plan/plan-1-5.png"
import plan_img_6 from "../../../../public/assets/img/plan/plan-1-6.png"

import orderForm from "../../../../public/assets/img/plan/orderform.webp"
import invoice from "../../../../public/assets/img/plan/invoice.webp"
import intakeForm from "../../../../public/assets/img/plan/intake-form-2.webp"
import clientPortal from "../../../../public/assets/img/plan/orders.webp"
import teamInbox from "../../../../public/assets/img/plan/portal-new.webp"

import img from "../../../../public/assets/img/cta/cta-title-icon-2.png";

const PlanArea = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (questionId) => {
    setSelectedQuestion(questionId);
  };

  const img_box = [
    { id: 1, img: orderForm, cls: "1", size: 10 },
    { id: 2, img: invoice, cls: "1 d-none d-sm-block", size: 120 },
    { id: 3, img: intakeForm, cls: "1", size: 100 },
    { id: 4, img: clientPortal, cls: "1", size: 100 },
    { id: 5, img: teamInbox, cls: "1 d-none d-sm-block", size: 120 },
  ];
  
  const img_box2 = [
    {id:1, img: plan_img_1, cls: "1",},
    {id:2, img: plan_img_2, cls: "2 d-none d-sm-block",},
    {id:3, img: plan_img_3, cls: "3",},
    {id:4, img: plan_img_4, cls: "4",},
    {id:5, img: plan_img_5, cls: "5 d-none d-sm-block",},
    {id:6, img: plan_img_6, cls: "6 d-none d-sm-block",},
];
  

  const plan_content = {
    img_box: img_box,
    sub_title: "dashboard to keep your projects organized",
    title: <>A streamlined workflow <span>for Billing and Projects</span></>,
  };

  const { sub_title, title } = plan_content;

  const accordion_data = [
    {
      id: 1,
      question: "1. Order Form",
      answer: (
        <>
          <p>
            No matter what type of services you sell, order forms make it easy for clients to buy them.
          </p>
          <div style={{ marginTop: '1em' }}>
            <p style={{ marginBottom: '0.5em' }}>
              <strong>Key features:</strong>
            </p>
            <ul style={{ marginLeft: '20px', color: 'rgba(59, 130, 246, 0.5)' }}>
              <div><i>&#10003; One-page or multistep checkout</i></div>
              <div><i>&#10003; Service types, quantities, and add-ons</i></div>
              <div><i>&#10003; If → then rules for conditional fields</i></div>
            </ul>
          </div>
        </>
      ),
      accordion_id: "headingOne",
      collapsed: "collapsed",
      data_bs_target: "#collapseOne",
      aria_expanded: true,
      aria_controls: "collapseOne",
      show: "",
      actice: "",
    },
    {
      id: 2,
      question: "2. Invoice & Billing",
      answer: (
        <>
          <p>
          Not all your services fit into a package. With SPP, you don't need a separate invoicing platform.
          </p>
          <div style={{ marginTop: '1em' }}>
            <p style={{ marginBottom: '0.5em' }}>
              <strong>Key features:</strong>
            </p>
            <ul style={{ marginLeft: '20px', color: 'rgba(59, 130, 246, 0.5)' }}>
              <div><i>&#10003; Contact forms for quote requests</i></div>
              <div><i>&#10003; Shareable invoice payment links</i></div>
              <div><i>&#10003; Capture client details when they pays</i></div>
            </ul>
          </div>
        </>
      ),
      accordion_id: "headingTwo",
      collapsed: "collapsed",
      data_bs_target: "#collapseTwo",
      aria_expanded: true,
      aria_controls: "collapseTwo",
      show: "",
      actice: "",

    },
    {
      id: 3,
      question: "3. Intake Form",
      answer: (
        <>
          <p>
          Collect the info you need from your clients without the back-and-forth.
          </p>
          <div style={{ marginTop: '1em' }}>
            <p style={{ marginBottom: '0.5em' }}>
              <strong>Key features:</strong>
            </p>
            <ul style={{ marginLeft: '20px', color: 'rgba(59, 130, 246, 0.5)' }}>
              <div><i>&#10003; Various field types and rules</i></div>
              <div><i>&#10003; Automated follow-ups</i></div>
              <div><i>&#10003; Save drafts and come back later</i></div>
            </ul>
          </div>
        </>
      ),
      accordion_id: "headingThree",
      collapsed: "collapsed",
      data_bs_target: "#collapseThree",
      aria_expanded: true,
      aria_controls: "collapseThree",
      show: "",
      actice: "",

    },
    {
      id: 4,
      question: "4. Client Portal",
      answer: (
        <>
          <p>
          A branded client portal that makes you look professional and saves your clients time.
          </p>
          <div style={{ marginTop: '1em' }}>
            <p style={{ marginBottom: '0.5em' }}>
              <strong>Key features:</strong>
            </p>
            <ul style={{ marginLeft: '20px', color: 'rgba(59, 130, 246, 0.5)' }}>
              <div><i>&#10003; Custom colors, menus, and language</i></div>
              <div><i>&#10003; Support for custom pages</i></div>
              <div><i>&#10003; Full control over underlying templates</i></div>
            </ul>
          </div>
        </>
      ),
      accordion_id: "headingFour",
      collapsed: "collapsed",
      data_bs_target: "#collapseFour",
      aria_expanded: true,
      aria_controls: "collapseFour",
      show: "",
      actice: "",

    },
    {
      id: 5,
      question: "5. Team Inbox",
      answer: (
        <>
          <p>
          Your team can see everything that needs to be done, when orders are due, and who's assigned.
          </p>
          <div style={{ marginTop: '1em' }}>
            <p style={{ marginBottom: '0.5em' }}>
              <strong>Key features:</strong>
            </p>
            <ul style={{ marginLeft: '20px', color: 'rgba(59, 130, 246, 0.5)' }}>
              <div><i>&#10003; Permission controls for your team</i></div>
              <div><i>&#10003; Internal & external messaging</i></div>
              <div><i>&#10003; Custom statuses and tags</i></div>
            </ul>
          </div>
        </>
      ),
      accordion_id: "headingFive",
      collapsed: "collapsed",
      data_bs_target: "#collapseFive",
      aria_expanded: true,
      aria_controls: "collapseFive",
      show: "",
      actice: "",

    },
  ];

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
                <span className="tp-section-subtitle-5 text-black">{sub_title}</span>
                <h3 className="tp-section-title-5 text-black pb-25">{title} </h3>
              </div>
              <div className="tp-custom-accordio-2" >
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
                          onClick={() => handleQuestionClick(item.id)} // Call handleQuestionClick when the button is clicked
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


            <div className="col-xl-7 col-lg-7 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                <div className="tp-plan-2-img-box p-relative">
                    {selectedQuestion ? (
                    // Rendering the image corresponding to the selected question
                    img_box.map((item, i) =>
                        selectedQuestion === item.id &&
                        <div key={i} className={`tp-plan-2-img-${item.cls}`}>
                        <Image src={item.img} alt="theme-pure" />
                        </div>
                    )
                    ) : (
                    // Rendering the images from img_box2 only when no option is selected
                    img_box2.map((item, i) =>
                        <div key={i} className={`tp-plan-2-img-${item.cls}`}>
                        <Image src={item.img} alt="theme-pure" />
                        </div>
                    )
                    )}
                </div>
                </div>
            
                

          </div>
        </div>
      </div>
    </>
  );
};

export default PlanArea;
