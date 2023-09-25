import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import NavLink instead of Link for active link styling
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "./header.scss";
import user from "../../assets/images/user-icon.png";
import { useSelector } from "react-redux";
import useAuth from "../../CustomHook/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

const nav_Link = [
  { path: "/", name: "Home" },
  { path: "/shop", name: "Shop" },
  { path: "/cart", name: "Cart" },
];

const Header = () => {
  const { currUser } = useAuth();
  const navigate = useNavigate();
  const [showBar, setShowBar] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const totalQuantity = useSelector((state) => state.carts.totalQuantity);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const authLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success('Logged out');
        navigate('/');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  

  return (
    <MDBNavbar navbar expand="lg" fixed="top">
      <MDBContainer>
        <MDBNavbarBrand to="/">
          <i className="ri-shopping-bag-line"></i>&nbsp;
          <h5 style={{ color: "#081835" }}>
            <b>Multimart</b>
          </h5>
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBar(!showBar)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBar}>
          <MDBNavbarNav className="mb-2 mb-lg-0">
            {nav_Link?.map((link, ind) => {
              return (
                <MDBNavbarItem key={ind}>
                  <NavLink
                    exact
                    to={link.path}
                    className={`nav-link ${
                      activeLink === link.path ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick(link.path)}
                  >
                    {link.name}
                  </NavLink>
                </MDBNavbarItem>
              );
            })}
          </MDBNavbarNav>

          <div className="rightIon d-flex">
            <div className="cart_icon mt-2">
              <i className="ri-heart-3-line"></i>
              <span className="badge">1</span>
            </div>
            <div className="fav_icon mt-2">
              <i className="ri-shopping-bag-line me-2"></i>
              <NavLink to="/cart">
                <span className="badge">{totalQuantity}</span>
              </NavLink>
            </div>
            {/* Dropdown */}
            <div className="dropdown">
              <img
                src={currUser ? currUser.photoURL : user}
                alt="user_img"
                width={60}
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ borderRadius: "50px" }}
              />
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {currUser ? (
                  <li>
                    <a className="dropdown-item" href="#" onClick={authLogout}>
                      Logout
                    </a>
                  </li>
                ) : (
                  <>
                    <li>
                      <NavLink className="dropdown-item" to="/login">
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="signup">
                        Sign up
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
