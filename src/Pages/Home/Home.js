import React, { Suspense, useEffect, useState } from "react";
import ProductList from "../../Components/UI/ProductList";
import products from "../../assets/data/products";
import Clock from "../../Components/UI/Clock";
import { Link } from "react-router-dom";
import counerImg from "../../assets/images/counter-timer-img.png";
import heroImg from "../../assets/images/hero-img.png";
import "../../style/products.scss";
import Helmet from "../../Components/Helmet/Helmet";
import Service from "../../Services/Service";
import './home.scss';

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [salesProducts, setSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const trendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const salesProducts = products.filter((item) => item.category === "sofa");
    const mobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const wirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const popularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTimeout(() => {
      setTrendingProducts(trendingProducts);
      setSalesProducts(salesProducts);
      setMobileProducts(mobileProducts);
      setWirelessProducts(wirelessProducts);
      setPopularProducts(popularProducts);
      setIsLoading(false);
    }, 1000);
  }, []);

  const year = new Date().getFullYear();
  return (
    <div>
      {isLoading ? (
        <div className="loaders">
          {/* <span className="loader-spinner"></span> */}
          <h2>Loading...</h2>
        </div>
      ) : (
        <>
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
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ab, in. Modi veniam excepturi voluptatem atque
                          eius dolor hic reprehenderit accusantium, perferendis
                          in ullam quasi dicta laudantium, nostrum cumque
                          recusandae tenetur!
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

            <section className="trending_products my-4">
              <div className="container">
                <h4 className="title">Trending Products</h4>
                <div className="row pb-4">
                  <ProductList data={trendingProducts} />
                </div>
              </div>
            </section>
            <section className="best_selling_products my-4">
              <div className="container">
                <h4 className="title">Best Sales</h4>
                <div className="row pb-4">
                  <ProductList data={salesProducts} />
                </div>
              </div>
            </section>
            <section className="timer_count">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="conter_info text-white mt-5">
                      <h5 className="my-2">Limited Offer</h5>
                      <h3>Quality Armchair</h3>
                      <Clock />
                      <div className="store_btn my-2">
                        <Link to="/store">
                          <button type="button" className="btn btn-dark">
                            Visit Store
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="conter_img text-end">
                      <img src={counerImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="arrival_products my-4">
              <div className="container">
                <h4 className="title my-3">New Arrivals</h4>
                <div className="row pb-4">
                  <ProductList data={mobileProducts} />
                  <ProductList data={wirelessProducts} />
                </div>
              </div>
            </section>
            <section className="popular_category_products my-4">
              <div className="container">
                <h4 className="title my-5">Popular in Category</h4>
                <div className="row pb-4">
                  <ProductList data={popularProducts} />
                </div>
              </div>
            </section>
          </Helmet>
        </>
      )}
    </div>
  );
};

export default Home;
