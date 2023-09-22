import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/Slices/CartSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    const { id, productName, imgUrl, price } = item;
    dispatch(
      addItem({
        id,
        productName,
        imgUrl: imgUrl,
        price,
      })
    );
    toast.success('Product added successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };

  return (
    <>
      <div className="col-lg-3 col-md-6">
        <motion.div className="products_details">
          <div className="product_img">
            <motion.img
              whileHover={{ scale: 0.9 }}
              src={item?.imgUrl}
              width="100%"
              alt=""
            />
          </div>
          <div className="product_info mb-3">
            <Link to={`/shop/${item.id}`}>
              <h4 className="product_name mt-2">{item?.productName}</h4>
            </Link>
            <h6 className="product_category mt-1">{item?.category}</h6>
          </div>
          <div className="product_price_button">
            <span className="product_price">${item?.price}</span>
            <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
              <i className="ri-add-circle-fill"></i>
            </motion.span>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProductCard;
