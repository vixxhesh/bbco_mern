import React, { Fragment } from "react";
import Header from "../../components/header3/Header3";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import CtaSection from "../../components/CtaSection/CtaSection";
import ContactSection from "../../components/ContactSection";

const ContactPage = (props) => {
  return (
    <Fragment>
      <Header />
      <main className="page_content about-page">
        <PageTitle
          pageTitle={"Contact Us"}
          pagesub={"Us"}
          pageTop={"Contact"}
        />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default ContactPage;
