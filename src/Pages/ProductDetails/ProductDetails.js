import React, { useState,useRef, useEffect } from "react";
import Helmet from "../../Components/Helmet/Helmet";
import CommonSection from "../../Components/UI/CommonSection";
import { useParams } from "react-router-dom";
import products from "../../assets/data/products";
import Button from "../../Components/Button/Button";
import "./product_details.scss";
import ProductList from "../../Components/UI/ProductList";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/Slices/CartSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";

const ProductDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  const [tab, setTab] = useState("des");
  const [rating, setRating] = useState(null);
  const reviewUser = useRef('');
  const reviewMsg = useRef('');

  const product = products.find((item) => item.id === id);
  const {
    avgRating,
    category,
    description,
    imgUrl,
    price,
    productName,
    reviews,
    shortDesc,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
   e.preventDefault();

   const reviewUserName = reviewUser.current.value;
   const reviewUserMsg = reviewMsg.current.value;

   const reviewObject = {
     userName:reviewUserName,
     text:reviewUserMsg,
     rating,
   }
   console.log(reviewObject);
  }

  const addToCart = () => {
    dispatch(
      addItem({
        id,
        productName,
        imgUrl: imgUrl,
        price,
      })
    );
    toast.success('Product added successfully!');
  }

  useEffect(() => {
   window.scrollTo(0,0);
  }, [product]);

  return (
    <>
      <Helmet title={productName}>
        <CommonSection title="Product Details" />
        <section className="product__details my-4">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="product__img">
                  <img src={imgUrl} width="80%" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product_info_details mt-5">
      
                  <br />
                  <h3>{productName}</h3>
                  <div className="product__rating d-flex my-3">
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i className="ri-star-s-fill"></i>
                    <i class="ri-star-half-s-fill"></i>
                    <p className="ms-5">
          
                      <span>({avgRating})</span> ratings
                    </p>
                  </div>
                  <div className="price">
                    <h6 className="my-3">Category: {category}</h6>
                    <h6>Price: {price}$</h6>
                    <p className="mt-2">{shortDesc}</p>
                  </div>
                  <div className="product__button mt-4" onClick={addToCart}>
                    <Button title="Add to Cart" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* description & reviews */}
        <section className="description__reviews mb-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tab_wrapper d-flex">
                  <h6
                    className={`${tab === "des" ? "active_tab" : " "}`}
                    onClick={() => setTab("des")}
                  >
                    Description
                  </h6>
                  <h6
                    className={`${tab === "rev" ? "active_tab ms-5" : "ms-5"}`}
                    onClick={() => setTab("rev")}
                  >
                    Reviews ({reviews.length})
                  </h6>
                </div>
                {tab === "des" ? (
                  <div className="tab__content my-3">
                    <p> {description} </p>
                  </div>
                ) : (
                  <div className="tab__reviews my-3">
                    <div className="product_wrapper">
                      <ul className="rating">
                        {reviews?.map((item, index) => {
                          return (
                            <>
                              <li className="my-4" key={index}>
                                <h6>
                                  <i class="ri-user-2-line"></i> &nbsp; Adnan
                                  hassan
                                </h6>
                                <span>{item.rating} (rating)</span>
                                <p>{item.text}</p>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                      <div className="form__reviews">
                        <h4>Leave your experience</h4>
                        <form onSubmit={submitHandler}>
                          <div className="form_group my-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter name"
                              required
                              ref={reviewUser}
                            />
                          </div>
                          <div className="form_group my-3 gap-5">
                            <motion.span whileTap={{scale:1.1}} onClick={() => setRating(1)}>
                             &nbsp; 1 <i className="ri-star-s-fill"></i>
                            </motion.span>
                            <motion.span whileTap={{scale:1.1}} onClick={() => setRating(2)}>
                            &nbsp; 2 <i className="ri-star-s-fill"></i>
                            </motion.span>
                            <motion.span whileTap={{scale:1.1}} onClick={() => setRating(3)}>
                            &nbsp; 3 <i className="ri-star-s-fill"></i>
                            </motion.span>
                            <motion.span whileTap={{scale:1.1}} onClick={() => setRating(4)}>
                            &nbsp;  4 <i className="ri-star-s-fill"></i>
                            </motion.span>
                            <motion.span whileTap={{scale:1.1}} onClick={() => setRating(5)}>
                            &nbsp;  5 <i className="ri-star-s-fill"></i>
                            </motion.span>
                          </div>
                          <div className="form_group my-3">
                            <textarea
                              rows={4}
                              className="form-control"
                              placeholder="Review message..."
                              required
                              ref={reviewMsg}
                            />
                          </div>
                          <div className="review__btn mt-4">
                            <Button title="Submit" submit="submit" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* relatedProducts */}
        <section className="trending_products my-4">
          <div className="container">
            <h3> You might also like</h3>
            <div className="row pb-4">
              {<ProductList data={relatedProducts} />}
            </div>
          </div>
        </section>
      </Helmet>
    </>
  );
};

export default ProductDetails;
