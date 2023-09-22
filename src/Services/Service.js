import React from "react";
import Helmet from "../Components/Helmet/Helmet";
import "./service.scss";
import serviceData from "../assets/data/serviceData";
import { motion } from "framer-motion"

const Service = () => {
  return (
    // <Helmet title="Service">
      <section className="service">
        <div className="container">
          <div className="row">
            {serviceData?.map((content, ind) => {
              return (
                <>
                  <div className="col-lg-3 col-md-6">
                    <motion.div whileHover={{scale: 1.1}}
                      className="service_content my-2"
                      style={{ backgroundColor: content.bg }}
                    >
                      <span>
                        <i className={content.icon} />
                      </span>
                      <div>
                        <h4>{content.title}</h4>
                        <p>{content.subtitle}</p>
                      </div>
                    </motion.div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    // </Helmet>
  );
};

export default Service;
