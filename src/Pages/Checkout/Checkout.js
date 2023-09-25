import React from "react";
import Helmet from "../../Components/Helmet/Helmet";
import CommonSection from "../../Components/UI/CommonSection";
import "./checkout.scss";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Checkout = () => {
  const totalAmount = useSelector((state) => state.carts.totalAmount);
  const totalQuantity = useSelector((state) => state.carts.totalQuantity);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section className="checkout_form my-5">
        <div className="container">
          <h4 className="mb-3">Billing Information</h4>
          <div className="row">
            <div className="col-md-8">
              <div className="billing_info">
                <form action="">
                  <div className="form_group my-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Please enter your name"
                    />
                  </div>
                  <div className="form_group my-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Please enter your email"
                    />
                  </div>
                  <div className="form_group my-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Please enter phone number"
                    />
                  </div>
                  <div className="form_group my-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Street address"
                    />
                  </div>
                  <div className="form_group my-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                  <div className="form_group my-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Postal code"
                    />
                  </div>
                  <div className="form_group my-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Country"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="checkout_cart mt-3">
                <h6 className="mt-2 d-flex justify-content-between">
                  Total Qty: <span>{totalQuantity} items</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  Shipping fee <span>$5</span>
                </h6>
                <hr />
                <h5 className="my-3">
                  Total Cost: <span>${totalAmount + 5}</span>
                </h5>
                <div className="shopping_btn my-3">
                  <Link to="/checkout">
                    <Button
                      title="place an order"
                      width="100%"
                      bgColor="checkout_bg"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Checkout;
