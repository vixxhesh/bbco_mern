import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header3/Header3";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import CtaSection from "../../components/CtaSection/CtaSection";
import srImg from "../../images/services/service_image_8.webp";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import WhyUs from "../AboutUsPage/WhyUs";

const ServicePage = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <Fragment>
      <Header />
      <main className="page_content about-page">
        <PageTitle
          pageTitle={"Our Services"}
          pagesub={"Services "}
          pageTop={"Our Main"}
        />
        <section className="about_section section_space bg-light">
          <div className="container">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-5 order-lg-last">
                <div className="team_cartoon_image">
                  <img src={srImg} alt="Service Cartoon" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about_content">
                  <div className="heading_block">
                    <div className="heading_focus_text">
                      We Are
                      <span className="badge bg-secondary text-white">
                        Your Trusted Financial Partners 😊
                      </span>
                    </div>
                    <h2 className="heading_text">
                      Comprehensive Accounting & Tax Solutions for Your Growth
                    </h2>
                    <p className="heading_description mb-0">
                      At Binod Verma & Co., we recognize that every business has
                      unique financial needs. Our expert team provides
                      customized accounting, tax, and compliance solutions to
                      help businesses stay ahead. Explore our wide range of
                      services, from income tax consultancy to GST compliance,
                      audit & assurance, financial management, and business
                      advisory.
                    </p>
                  </div>
                  <Link onClick={ClickHandler} to={"/contact"} className="btn">
                    <span className="btn_label" data-text="Contact Us">
                      Contact Us
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ServiceSection />
        <div className="pt-130"></div>
        <WhyUs />
      </main>
      <CtaSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ServicePage;
