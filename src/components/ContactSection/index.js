import React from "react";
import ContactForm from "../ContactFrom/ContactForm";
import icon1 from "../../images/icons/icon_map_mark_2.svg";
import icon2 from "../../images/icons/icon_calling_2.svg";
import icon3 from "../../images/icons/icon_mail_3.svg";
import icon4 from "../../images/icons/icon_calendar_2.svg";

const ContactSection = (props) => {
  return (
    <section className="contact_section section_space bg-light">
      <div className="container">
        <div className="contact_info_box row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="iconbox_block text-center">
              <div className="iconbox_icon">
                <img src={icon1} alt="Map Mark SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">Location</h3>
                <p className="mb-0">
                  D-29, OFFICE NO-206, Laxmi Nagar, Delhi 110092
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="iconbox_block text-center">
              <div className="iconbox_icon">
                <img src={icon2} alt="Calling SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">Contact</h3>
                <p className="mb-0">011 4022 4920</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="iconbox_block text-center">
              <div className="iconbox_icon">
                <img src={icon3} alt="User Check SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">Email</h3>
                <p className="mb-0">accounts@bindoverma.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="iconbox_block text-center">
              <div className="iconbox_icon">
                <img src={icon4} alt="Calendar SVG Icon" />
              </div>
              <div className="iconbox_content">
                <h3 className="iconbox_title">Visit Between</h3>
                <p className="mb-0">Mon - Friday: 9.00-6.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section_space pb-0">
          <div className="row justify-content-lg-between">
            <div className="col-lg-7">
              <div className="contact_form mb-0">
                <h3 className="details_item_info_title mb-1">
                  Send Us A Message
                </h3>
                <p className="mb-5">
                  Write to us about your query or tax consulting services
                </p>
                <ContactForm />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="gmap_canvas ps-lg-5">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12676.20509251602!2d77.280722!3d28.632290000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd87909c8a95%3A0x923d3b1f7057a6fb!2sCA%20BINOD%20VERMA%20%26%20CO!5e1!3m2!1sen!2sus!4v1743491470874!5m2!1sen!2sus"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
