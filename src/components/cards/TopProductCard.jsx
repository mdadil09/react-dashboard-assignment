import React from "react";
import "../../Pages/dashboard/dash-style.css";
import donut from "../../assests/donut.png";

const TopProductCard = () => {
  return (
    <div className="top-product-card">
      <div className="top-product-text">Top Products</div>
      <div className="top-product-text-date">May - June 2023</div>
      <div className="basic-tees-eclipse"></div>
      <div className="top-product-basic-tees">Basic Tees</div>
      <div className="top-product-basic-tees-text">55%</div>
      <div className="custom-pants-eclipse"></div>
      <div className="top-product-custom-pants">Custom Short Pants</div>
      <div className="top-product-custom-pants-text">31%</div>
      <div className="supper-hoodies-ecilipse"></div>
      <div className="top-product-supper-hoodies">Super Hoodies</div>
      <div className="top-product-supper-hoodies-text">14%</div>
      <div className="top-product-donut">
        <img src={donut} alt="donut" />
      </div>
    </div>
  );
};

export default TopProductCard;
