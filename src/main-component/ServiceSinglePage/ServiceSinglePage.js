import React, { Fragment, useState } from "react";
import Services from "../../api/service";
import { useParams } from "react-router-dom";
import ModalVideo from "react-modal-video";
import Header from "../../components/header3/Header3";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

import srImg from "../../images/services/service_details_image_1.webp";
import srImg2 from "../../images/services/service_details_image_2.webp";
import srImg3 from "../../images/services/service_details_image_3.webp";
import srImg4 from "../../images/services/service_details_image_4.webp";
import icon from "../../images/icons/icon_check_3.svg";

const ServiceSinglePage = (props) => {
  const { slug } = useParams();
  const ServiceDetails = Services.find((item) => item.slug === slug);
  const [isOpen, setOpen] = useState(false);

  // Service-specific content based on slug
  const getServiceContent = () => {
    switch (slug) {
      case "Audit-&-Assurances":
        return {
          description: `Audit & Assurance services are the backbone of financial transparency and regulatory compliance. At our firm, we specialize in conducting comprehensive audits tailored to meet the unique needs of our clients. From statutory requirements to specialized audits, we understand the critical importance of accurate financial reporting and robust internal controls in driving confidence among stakeholders.`,
          additionalInfo: `Our team of experienced professionals works closely with clients to ensure thorough examination of financial records, compliance with applicable standards, and identification of potential areas for improvement. We take a holistic approach to auditing, considering factors such as regulatory requirements, internal control effectiveness, and operational efficiency.`,
          servicesList: [
            "Statutory Audit",
            "Internal Audit",
            "Internal Financial Control (IFC) over financial reporting Audit",
            "Bank Concurrent Audit",
            "Bank Statutory Audit",
            "Transfer Pricing Audit u/s 92 E",
            "GST Audit",
            "Form 10B Audit in case of NGO",
            "Forensic Audit",
            "Audit of Form 15CB of Income Tax Act and Issue Form 15CA",
          ],
          outcomes: [
            "Regulatory Compliance",
            "Enhanced Financial Reporting",
            "Risk Identification and Mitigation",
            "Improved Internal Controls",
            "Stakeholder Confidence",
            "Fraud Prevention",
          ],
        };
      case "Income-Tax-Consultancy":
        return {
          description: `Income Tax Consultancy services are essential for navigating the complex landscape of tax regulations and optimizing financial outcomes. At our firm, we specialize in providing comprehensive tax advisory services tailored to the unique needs of individuals, businesses, and organizations.`,
          additionalInfo: `Our team of tax experts works diligently to ensure compliance with tax laws while identifying opportunities for tax efficiency. We provide strategic guidance throughout the tax cycle, from planning and preparation to representation before tax authorities.`,
          servicesList: [
            "Preparation of Income Tax Return",
            "Rectification of Proposed Adjustments in Income Tax Returns",
            "Faceless Assessment (Scrutiny) of Tax Returns and Penalty Proceedings",
            "Specified Financial Transactions (Form 61A, Form 61B)",
            "Form 10B Audit in case of NGO, 10BB Audit",
            "Tax Evasion Petitions, CPGRAMS, raising grievances for long pending matters",
            "Quarterly Statement in Form15CC (Rule 37BB)",
            "Lower or No TDS Deduction Certificate related consultancy",
            "Income tax Appeals before Income Tax Appellate Tribunal (ITAT)",
            "Survey, Search & Seizer Consultancy",
            "Appearance before Investigation Wing of Income Tax Department (Section 153A to 153C cases)",
            "Appearance before Central Board of Direct Taxes (CBDT) and before Ministry of Finance",
          ],
          outcomes: [
            "Tax Compliance",
            "Tax Optimization",
            "Penalty Mitigation",
            "Effective Representation",
            "Strategic Tax Planning",
            "Audit Defense",
          ],
        };
      case "Goods-&-Services-Tax":
        return {
          description: `Goods and Services Tax (GST) services are critical for businesses operating in today's indirect tax environment. Our GST expertise helps clients navigate the complexities of this comprehensive tax system that has transformed India's indirect taxation landscape.`,
          additionalInfo: `Our dedicated GST professionals provide end-to-end support, from initial registration to ongoing compliance, audit assistance, and representation before authorities. We help businesses optimize their GST structure while ensuring full compliance with applicable regulations.`,
          servicesList: [
            "GST Registration for new Assessee",
            "Filing of monthly, quarterly and Annual GST returns",
            "Assistance in deposit of GST to electronic cash ledger",
            "Consultancy on GST on regular basis",
            "Refund of GST from GST Department",
            "Bond and Letter of Undertaking (LUT) related work for Exporters",
            "Assisting in Internal Audit by GST Department",
            "Assisting and Representation in Show Cause Notice issued by Superintendent, GST Audit Department",
            "Search Cases under GST",
            "Contract review from GST perspective",
            "Representation before relevant authority for GST appeal i.e. Commissioner, CESTAT",
          ],
          outcomes: [
            "Timely Compliance",
            "Optimized Input Tax Credit",
            "Reduced GST Liabilities",
            "Audit Readiness",
            "Effective Dispute Resolution",
            "Export Benefit Maximization",
          ],
        };
      case "Accounting-Services":
        return {
          description: `Accounting Services form the foundation of sound financial management for businesses of all sizes. Our comprehensive accounting solutions are designed to provide accurate, timely, and insightful financial information that supports informed decision-making.`,
          additionalInfo: `Our experienced accounting professionals deliver tailored solutions that range from basic bookkeeping to complex financial reporting. We leverage industry best practices and advanced accounting principles to ensure your financial records are maintained with precision and in accordance with relevant standards.`,
          servicesList: [
            "Book Keeping and Accounting for Individuals, Firms, NGOs and Companies including foreign Companies",
            "Design, implementation and review of accounting manual",
            "Advice on various Accounting Standards, Ind AS & IFRS",
          ],
          outcomes: [
            "Accurate Financial Records",
            "Compliance with Standards",
            "Improved Financial Visibility",
            "Decision Support",
            "International Reporting Compatibility",
            "Streamlined Financial Processes",
          ],
        };
      case "Finance-Registration":
        return {
          description: `Finance services are crucial for businesses seeking funding, valuation, and strategic financial guidance. Our finance professionals provide comprehensive support for businesses at various stages of development, from startup funding to established business valuation.`,
          additionalInfo: `We deliver meticulously prepared financial analyses and projections that help clients secure appropriate financing, evaluate business opportunities, and make informed investment decisions. Our finance services are built on deep industry knowledge and financial expertise.`,
          servicesList: [
            "Preparation of project report",
            "Preparation of CMA Data",
            "Loan arrangement- Cash credit limit, Term loan & Project loan",
            "Due diligence for finance",
            "Valuation of Business",
          ],
          outcomes: [
            "Access to Capital",
            "Investment Readiness",
            "Strategic Financial Planning",
            "Accurate Business Valuation",
            "Risk Assessment",
            "Investor Confidence",
          ],
        };
      default:
        return {
          description: `Our professional services are tailored to meet the unique needs of our clients. We specialize in providing comprehensive solutions that drive business success and compliance.`,
          additionalInfo: `Our team of experienced professionals works closely with clients to ensure the highest quality of service and outcomes. We take a holistic approach, considering all factors that might impact your business objectives.`,
          servicesList: [],
          outcomes: [
            "Enhanced Compliance",
            "Business Optimization",
            "Risk Mitigation",
            "Strategic Guidance",
            "Operational Efficiency",
            "Future Readiness",
          ],
        };
    }
  };

  const serviceContent = getServiceContent();

  // Helper function to create list items for services
  const renderServicesList = (services) => {
    if (!services || services.length === 0) return null;

    // Split the list into two columns if more than 5 items
    if (services.length > 5) {
      const halfwayPoint = Math.ceil(services.length / 2);
      const firstHalf = services.slice(0, halfwayPoint);
      const secondHalf = services.slice(halfwayPoint);

      return (
        <div className="row mb-4">
          <div className="col-lg-6">
            <ul className="icon_list unordered_list_block">
              {firstHalf.map((service, index) => (
                <li key={index}>
                  <span className="icon_list_icon">
                    <img src={icon} alt="Check SVG Icon" />
                  </span>
                  <span className="icon_list_text">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="icon_list unordered_list_block">
              {secondHalf.map((service, index) => (
                <li key={index}>
                  <span className="icon_list_icon">
                    <img src={icon} alt="Check SVG Icon" />
                  </span>
                  <span className="icon_list_text">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row mb-4">
          <div className="col-lg-12">
            <ul className="icon_list unordered_list_block">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="icon_list_icon">
                    <img src={icon} alt="Check SVG Icon" />
                  </span>
                  <span className="icon_list_text">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  };

  // Helper function to render outcome items
  const renderOutcomes = (outcomes) => {
    if (!outcomes || outcomes.length === 0) return null;

    const halfwayPoint = Math.ceil(outcomes.length / 2);
    const firstHalf = outcomes.slice(0, halfwayPoint);
    const secondHalf = outcomes.slice(halfwayPoint);

    return (
      <div className="row mb-4">
        <div className="col-lg-6">
          <ul className="icon_list unordered_list_block">
            {firstHalf.map((outcome, index) => (
              <li key={index}>
                <span className="icon_list_icon">
                  <img src={icon} alt="Check SVG Icon" />
                </span>
                <span className="icon_list_text">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-6">
          <ul className="icon_list unordered_list_block">
            {secondHalf.map((outcome, index) => (
              <li key={index}>
                <span className="icon_list_icon">
                  <img src={icon} alt="Check SVG Icon" />
                </span>
                <span className="icon_list_text">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <Header />
      <main className="page_content service-single-page">
        <PageTitle
          pageTitle={ServiceDetails.title}
          pagesub={"Details"}
          pageTop={"Services"}
        />
        <section className="service_details_section section_space bg-light">
          <div className="container">
            <div className="details_item_image position-relative">
              <img src={srImg} alt="Service Details" />
              <button
                className="video_btn ripple_effect"
                onClick={() => setOpen(true)}
              >
                <span className="btn_icon">
                  <i className="fa-solid fa-play"></i>
                </span>
              </button>
            </div>
            <h2 className="details_item_title">{ServiceDetails.title}</h2>
            <p>{serviceContent.description}</p>
            <p>{serviceContent.additionalInfo}</p>

            {serviceContent.servicesList &&
              serviceContent.servicesList.length > 0 && (
                <>
                  <h3 className="details_item_info_title">
                    Our {ServiceDetails.title} Services
                  </h3>
                  <p className="mb-4">
                    We offer a comprehensive range of{" "}
                    {ServiceDetails.title.toLowerCase()} services to meet your
                    business needs:
                  </p>
                  {renderServicesList(serviceContent.servicesList)}
                </>
              )}

            <h3 className="details_item_info_title">Services Outcome</h3>
            <p className="mb-4">
              Here are the key benefits you can expect from our{" "}
              {ServiceDetails.title} services:
            </p>
            {renderOutcomes(serviceContent.outcomes)}

            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="details_item_image m-0">
                  <img src={srImg2} alt="Service Details" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="details_item_image m-0">
                  <img src={srImg3} alt="Service Details" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="details_item_image m-0">
                  <img src={srImg4} alt="Service Details" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Scrollbar />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="FEre5kk6cMQ"
        onClose={() => setOpen(false)}
      />
    </Fragment>
  );
};

export default ServiceSinglePage;
