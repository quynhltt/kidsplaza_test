import React, { useNavigate } from "react";
import "../css/UserInfo.css";
import { NavLink } from "react-router-dom";

export default function UserInfo() {
  //   const navigate = useNavigate();
  //   let navigateToQuickBuy = () => {
  //     navigate("/");
  //   };
  return (
    <div className="userInfo">
      <div className="username grid grid-cols-2 p-3">
        <div className="name col-span-1 flex items-center p-5 space-x-2">
          <div className="ava">
            <i class="fa-regular fa-user"></i>
          </div>
          <div className="coinContent space-y-2">
            <p>Xin chào, {"Bố Bin"}!</p>
            <NavLink className="quickBuyBtn" to={"#"}>
              Mua nhanh
            </NavLink>
          </div>
        </div>
        <div className="coin col-span-1 flex items-center p-5 space-x-3">
          <div className="icon">
            <i class="fa-solid fa-coins"></i>
          </div>
          <div className="coinContent">
            <p>KiCoin</p>
            <p>{"12.000"}</p>
          </div>
        </div>
      </div>
      <div className="option grid grid-cols-3 p-4">
        <NavLink to={"#"} className="optionItem flex flex-col justify-start items-center">
          <span className="icon">
            <i class="fa-regular fa-user"></i>
          </span>
          <span className="title w-4/5 text-center">Thông tin tài khoản</span>
        </NavLink>
        <NavLink to={"#"} className="optionItem flex flex-col justify-start items-center">
          <span className="icon">
            <i class="fa-regular fa-user"></i>
          </span>
          <span className="title w-4/5 text-center">Số địa chỉ</span>
        </NavLink>
        <NavLink to={"#"} className="optionItem flex flex-col justify-start items-center">
          <span className="icon">
            <i class="fa-regular fa-user"></i>
          </span>
          <span className="title w-4/5 text-center">Sản phẩm đã xem</span>
        </NavLink>
      </div>
      <div className="app text-center">
        <h4 className="title">Tải app KidsPlaza - Nhận quà bao la</h4>
        <div className="appContent">
          <p>Nhập mã BANMOIT8 - Giảm ngay 50.000 cho đơn hàng từ 699.000đ</p>
          <p>Hảng ngàn voucher khác chỉ áp dụng khi đặt hàng tại App.</p>
        </div>
        <div className="qrCode mt-2">
          <p className="font-medium">Quét mã QR để tải App</p>
          <div className="image grid grid-cols-3 gap-1">
            <div className="qr col-span-1">
              <a href="#">
                <img src="./images/qrCode.png" alt="" />
              </a>
            </div>
            <div className="download col-span-2">
              <a href="">
                <img src="./images/appstore.png" alt="" />
              </a>
              <a href="">
                <img src="./images/chplay.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
