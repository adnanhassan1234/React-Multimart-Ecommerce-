import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <>
      <div className="col-lg-3 col-md-6">
        <motion.div
          className="products_details"
        //   animate={{
        //     rotate: [0, 0, 270, 270, 0],
        //   }}
        >
          <div className="product_img">
            <motion.img
              whileHover={{ scale: 0.9 }}
              src={item?.imgUrl}
              width="100%"
              alt=""
            />
          </div>
          <div className="product_info mb-3">
            <Link to="/shop/9">
              {" "}
              <h4 className="product_name mt-2">{item?.productName}</h4>
            </Link>
            <h6 className="product_category mt-1">{item?.category}</h6>
          </div>
          <div className="product_price_button">
            <span className="product_price">${item?.price}</span>
            <motion.span whileTap={{ scale: 1.2 }}>
              <i className="ri-add-circle-fill"></i>
            </motion.span>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProductCard;
