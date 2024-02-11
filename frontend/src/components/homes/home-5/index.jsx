import ContextProvider from "@/src/context/ContextProvider";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderFive from "@/src/layout/headers/header-5";
import React from "react";
import BusinessBox from "./business-box";
import CtaArea from "./cta-area";
import CtaAreaSecond from "./cta-area_second";
import FeatureArea from "./feature-area";
import FunFactArea from "./fun-fact-area";
import HeroArea from "./hero-area";
import IntegrationArea from "./integration-area";
import PlanArea from "./plan-area";
import PlanArea2 from "./plan-area first";
import ServiceArea from "./service-area";
import TestimonialArea from "../../../common/testimonial-area";
import VideoArea from "./video-area";
import AnimateMouse from "./AnimateMouse";
import PlanAreaSecond from "./plan-area_second"
import Buttons from "./buttonsValue"

const HomeFive = () => {
  return (
    <ContextProvider>
      <AnimateMouse />
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <HeroArea />
            <VideoArea />
            <FunFactArea />
            <Buttons/>
            <PlanArea2 />
            <Buttons/>
            <CtaArea />
            <BusinessBox />
            <PlanArea />
            <Buttons/>
            <CtaAreaSecond/>
            <PlanAreaSecond/>
            <TestimonialArea />
            <FeatureArea />
          </main>
          
        </div>
      </div>
    </ContextProvider>
  );
};

export default HomeFive;
