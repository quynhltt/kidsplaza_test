import React from "react";
import "../css/HomeSlider.css";
import { Carousel } from "antd";
import { NavLink } from "react-router-dom";

export default function HomeSlider() {
  const propsMainSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true
  };
  const propsCarouselItem = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className="banner">
      <div className="slider mb-2">
        <Carousel className="h-full" {...propsMainSlider}>
          <div className="mainSlider my-auto justify-center items-center">
            <h3 className="text-4xl" >
              Home Banner 1
            </h3>
          </div>
          <div className="mainSlider my-auto justify-center items-center">
            <h3 className="text-4xl" >
              Home Banner 2
            </h3>
          </div>
          <div className="mainSlider my-auto justify-center items-center">
            <h3 className="text-4xl" >
              Home Banner 3
            </h3>
          </div>
          <div className="mainSlider my-auto justify-center items-center">
            <h3 className="text-4xl" >
              Home Banner 4
            </h3>
          </div>
        </Carousel>
      </div>
      <div className="item">
        <Carousel {...propsCarouselItem}>
          <NavLink to={"#"} className="itemSlider">
            <span className="icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </span>
            <span className="title">Siêu deal</span>
          </NavLink>
          <NavLink to={"#"} className="itemSlider">
            <span className="icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </span>
            <span className="title">Voucher</span>
          </NavLink>
          <NavLink to={"#"} className="itemSlider">
            <span className="icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </span>
            <span className="title">Ưu đãi</span>
          </NavLink>
          <NavLink to={"#"} className="itemSlider">
            <span className="icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </span>
            <span className="title">Hỏi đáp</span>
          </NavLink>
          <NavLink to={"#"} className="itemSlider">
            <span className="icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </span>
            <span className="title">Tra cứu đơn hàng</span>
          </NavLink>
          <NavLink to={"#"} className="itemSlider">
            <span className="icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </span>
            <span className="title">Siêu thị gần bạn</span>
          </NavLink>
          <NavLink to={"#"} className="itemSlider">
            <span className="icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </span>
            <span className="title">Miễn phí giao hàng</span>
          </NavLink>
        </Carousel>
      </div>
    </div>
  );
}
