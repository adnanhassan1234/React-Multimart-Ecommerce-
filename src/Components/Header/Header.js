import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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

const nav_Link = [
  { path: "/", name: "Home" },
  { path: "/shop", name: "Shop" },
  { path: "/cart", name: "Cart" },
];

const Header = () => {
  const [showBar, setShowBar] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const totalQuantity = useSelector((state) => state.carts.totalQuantity);

  const handleLinkClick = (link) => {
    setActiveLink(link);
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
                  <Link
                    exact
                    to={link.path}
                    className={`nav-link ${
                      activeLink === link.path ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick(link.path)}
                  >
                    {link.name}
                  </Link>
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
             <NavLink to="/cart"> <span className="badge">{totalQuantity}</span></NavLink>
            </div>
            {/* Dropdown */}
            <div className="dropdown">
              <img
                src={user}
                alt="user_img"
                width={60}
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Login
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
