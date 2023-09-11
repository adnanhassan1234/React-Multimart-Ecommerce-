import React from "react";
import './footer.scss';
import { Link } from "react-router-dom";

const categories = [
    { label: 'Mobile Phones', link: '/mobile-phones' },
    { label: 'Modern Sofa', link: '/modern-sofa' },
    { label: 'Arm Chair', link: '/arm-chair' },
    { label: 'Smart Watches', link: '/smart-watches' },
    { label: 'Hosting', link: '/hosting' },
  ];

  const usefulLinks = [
    { label: 'Shop', link: '/shop' },
    { label: 'Cart', link: '/cart' },
    { label: 'Terms Policy', link: '/terms-policy' },
    { label: 'Privacy Policy', link: '/privacy-policy' },
    { label: 'Login', link: '/login' },
  ];

  const contactInfo = [
    { label: '123 Johar Town, Lahore PAK', icon: 'ri-map-pin-line' },
    { label: '+923476275532', icon: 'ri-phone-line' },
    { label: 'ah5404219@gmail.com', icon: 'ri-mail-line' },
  ];

  const socialMediaIcons = [
    { iconClass: 'mdi mdi-facebook', title: 'Facebook', link: '' },
    { iconClass: 'mdi mdi-instagram', title: 'Instagram', link: '' },
    { iconClass: 'mdi mdi-twitter', title: 'Twitter', link: '' },
    { iconClass: 'mdi mdi-google-plus', title: 'Google +', link: '' },
    { iconClass: 'mdi mdi-linkedin', title: 'Linkedin', link: '' },
  ];

const Footer = () => {
  return (
    <>
      <footer className="footer bg-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
            <h4 className="text-light footer-head">Multimart</h4>
            <p className="mt-4">
              Ecommerce is a method of buying and selling goods and services online. The definition of ecommerce business can also include tactics like affiliate marketing. You can use ecommerce channels such as your own website.
            </p>
          </div>

          <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h4 className="text-light footer-head">Top Categories</h4>
            <ul className="list-unstyled footer-list mt-4">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link to={category.link} className="text-foot">
                    <i className="mdi mdi-chevron-right mr-1"></i> {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h4 className="text-light footer-head">Useful Links</h4>
            <ul className="list-unstyled footer-list mt-4">
              {usefulLinks.map((linkItem, index) => (
                <li key={index}>
                  <Link to={linkItem.link} className="text-foot">
                    <i className="mdi mdi-chevron-right mr-1"></i> {linkItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h4 className="text-light footer-head">Contact</h4>
            <ul className="list-unstyled footer-list mt-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <div className="text-foot">
                    <i className={contact.icon}></i> {contact.label}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
    {/* bottom-footer */}
    <footer className="footer bg-footer footer-bar">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <div className="text-sm-left">
              <p className="mb-0">
                &copy; 2023. Design with multimart. All right reserved!
                <i className="mdi mdi-heart text-danger"></i>
              </p>
            </div>
          </div>

          <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <ul className="list-unstyled text-sm-right social-icon social mb-0">
              {socialMediaIcons.map((icon, index) => (
                <li key={index} className="list-inline-item">
                  <Link to={icon.link} className="rounded">
                    <i className={icon.iconClass} title={icon.title}></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
