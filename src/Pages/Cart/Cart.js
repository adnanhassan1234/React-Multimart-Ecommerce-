import React from "react";
import Helmet from "../../Components/Helmet/Helmet";
import CommonSection from "../../Components/UI/CommonSection";
import "./cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../../Redux/Slices/CartSlice";
import { toast } from "react-toastify";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.carts.cartItem);
  const totalAmount = useSelector((state) => state.carts.totalAmount);

  const deleteItem = (id) => {
    dispatch(removeItem(id));
    toast.success('Product deleted successfully!');
  };

  const removeAllItem = () => {
    dispatch(clearCart());
    toast.success('All Products deleted successfully!');
  };

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section className="cart my-5">
        <div className="container">
          {cartItem.length === 0 ? (
            <div className="text-center mx-5 fs-3">
              <h4>No Items in Cart!</h4>
            </div>
          ) : (
            <div className="row">
              <div className="col-lg-9">
                <div className="cart_details">
                  <table className="table bordered">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItem.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <img src={item.imgUrl} alt="" />
                          </td>
                          <td>{item.productName}</td>
                          <td>{item.price}</td>
                          <td>{item.quantity}</td>
                          <td onClick={() => deleteItem(item.id)}>
                            <i className="ri-delete-bin-6-line"></i>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="clear_all_item my-3">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={removeAllItem}
                    >
                      Remove all Items
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="sub_total">
                  <div className="mt-3 d-flex justify-content-between">
                    <h5>Subtotal</h5>
                    <span><b>${totalAmount}</b></span>
                  </div>
                  <div className="taxes my-3">
                    <p>Taxes and shipping will be calculated at checkout</p>
                  </div>
                  <div className="shopping_btn mt-4">
                    <Link to="/shop"><Button title="Continue Shopping" width="100%" /></Link>
                  </div>
                  <div className="shopping_btn my-3">
                    <Link to="/checkout"><Button title="Checkout" width="100%" /></Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Helmet>
  );
};

export default Cart;
