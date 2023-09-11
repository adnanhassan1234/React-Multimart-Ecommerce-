import React from "react";
import Helmet from "../../Components/Helmet/Helmet";
import heroImg from "../../assets/images/hero-img.png";
import "./home.scss";
import { Link } from "react-router-dom";
import Service from "../../Services/Service";

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmet title="Home">
      <section className="hero_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="hero_content">
                <h5>Trending product in {year}</h5>
                <div className="main_heading my-2">
                  <h3 className="mb-4">
                    Make Your Interior More Minimalistic & Modern
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                    in. Modi veniam excepturi voluptatem atque eius dolor hic
                    reprehenderit accusantium, perferendis in ullam quasi dicta
                    laudantium, nostrum cumque recusandae tenetur!
                  </p>
                </div>
                <div className="shop_btn mt-3">
                  <Link to="/shop">
                    <button type="button" className="btn btn-dark">
                      SHOP NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="hero_img">
                <img src={heroImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service */}
      <Service />
    </Helmet>
  );
};

export default Home;
