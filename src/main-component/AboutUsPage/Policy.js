import React from "react";
import sIcon1 from "../../images/icons/icon_clock.svg";
import sIcon2 from "../../images/icons/icon_dart_board_2.svg";
import sIcon3 from "../../images/icons/icon_target.svg";

const Policy = [
  {
    title: "Our Story",
    subTitle:
      "Since 2008, Binod Verma & Co. has supported individuals and businesses with reliable tax, audit, and financial advisory services.",
    icon: sIcon1,
  },
  {
    title: "Our Mission",
    subTitle:
      "We aim to simplify finance for our clients through personalized solutions in taxation, compliance, and advisory. Our focus is on empowering growth.",
    icon: sIcon2,
  },
  {
    title: "Our Vision",
    subTitle:
      "We envision becoming a trusted financial partner by combining expert guidance, client-centric service, and innovation to help our clients.",
    icon: sIcon3,
  },
];

const PolicySection = (props) => {
  return (
    <section className="policy_section bg-light">
      <div className="container">
        <div className="row">
          {Policy.map((policy, pitem) => (
            <div className="col-lg-4" key={pitem}>
              <div className="iconbox_block">
                <div className="iconbox_icon">
                  <img src={policy.icon} alt="Dollar SVG Icon" />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">{policy.title}</h3>
                  <p className="mb-0">{policy.subTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicySection;
