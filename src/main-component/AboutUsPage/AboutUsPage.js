import React, { Fragment, useState } from "react";
import Header from "../../components/header3/Header3";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import aImg from "../../images/about/about_image_3.webp";
import aImg2 from "../../images/about/about_image_4.webp";
import ModalVideo from "react-modal-video";
import PolicySection from "./Policy";
import WhyUs from "./WhyUs";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";

import CtaSection from "../../components/CtaSection/CtaSection";

const AboutUsPage = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      <Header />
      <main className="page_content about-page">
        <PageTitle
          pageTitle={"About Us"}
          pagesub={"B&B Co. "}
          pageTop={"About"}
        />
        <section className="intro_about_section section_space bg-light">
          <div className="intro_about_content">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="image_wrap">
                    <img src={aImg} alt="B&B Co. - About " />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="image_wrap position-relative">
                    <img src={aImg2} alt="B&B Co. - About" />
                    <button
                      className="video_btn ripple_effect"
                      onClick={() => setOpen(true)}
                    >
                      <span className="btn_icon">
                        <i className="fa-solid fa-play"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="heading_block mb-0">
              <div className="row justify-content-lg-between">
                <div className="col-lg-4">
                  <div className="heading_focus_text">
                    About
                    <span className="badge bg-secondary text-white">
                      Binod Verma & Co.
                    </span>
                  </div>
                  <h2 className="heading_text mb-0">
                    Trusted Financial Advisors for Over 15 Years
                  </h2>
                </div>
                <div className="col-lg-6">
                  <p className="heading_description mb-0">
                    We don’t believe in one-size-fits-all solutions. Our team
                    adapts to your unique challenges—whether it’s navigating
                    complex audits, optimizing tax positions, or ensuring smooth
                    regulatory compliance. What sets us apart is our blend of
                    technical expertise and personalized attention, making your
                    growth and peace of mind our top priorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PolicySection />
        <FeaturesSection />
        {/* <TeamSection /> */}
        <WhyUs />
        <CtaSection />
      </main>
      <Footer />
      <Scrollbar />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="i-v6oeVxtNM"
        onClose={() => setOpen(false)}
      />
    </Fragment>
  );
};
export default AboutUsPage;
