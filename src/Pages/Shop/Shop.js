import React, { useState } from "react";
import CommonSection from "../../Components/UI/CommonSection";
import Helmet from "../../Components/Helmet/Helmet";
import "./shop.scss";
import products from "../../assets/data/products";
import ProductList from "../../Components/UI/ProductList";

const Shop = () => {
  const [productData, setProductData] = useState(products);
  const [sortOption, setSortOption] = useState("ascending");

  const filterCategory = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "sofa" || filterValue === "mobile" || filterValue === "chair" || filterValue === "watch" || filterValue === "wireless") {
      const filterProducts = products.filter(
        (item) => item.category.toLowerCase() === filterValue.toLowerCase()
      );
      setProductData(filterProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchProducts = products.filter((item) => item.productName.toLowerCase().includes(searchTerm.toLowerCase()));
    setProductData(searchProducts);
  }

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    if (sortOption === "ascending") {
      productData.sort((a, b) => a.price - b.price);
    } else if (sortOption === "descending") {
      productData.sort((a, b) => b.price - a.price);
    }
    setProductData(productData);
  };

  return (
    <>
      <Helmet title="Shop">
        <CommonSection title="Products" />
        <section className="shop_section my-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-12">
                <div className="filter_widget my-1">
                  <select onChange={filterCategory}>
                    <option>Filter By Category</option>
                    <option value="sofa">Sofa</option>
                    <option value="mobile">Mobile</option>
                    <option value="chair">Chair</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div className="filter_widget my-1">
                  <select onChange={handleSortChange}>
                    <option>Sort By</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="search_box my-1">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search...."
                    onChange={handleSearch}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* product list data */}
        <section className="trending_products my-4">
          <div className="container">
            <div className="row pb-4">
              {productData.length === 0 ? (
                <h4 className="text-center">No products are found!</h4>
              ) : (
                <ProductList data={productData} />
              )}
            </div>
          </div>
        </section>
      </Helmet>
    </>
  );
};

export default Shop;
