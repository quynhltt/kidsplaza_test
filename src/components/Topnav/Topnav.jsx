import React from "react";
import { Input, Space } from "antd";
import { Dropdown } from "antd";
const { Search } = Input;

export default function Topnav() {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="#"
        >
          Miền Bắc
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="#"
        >
          Miền Trung
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="#"
        >
          Miền Nam
        </a>
      ),
    },
  ];

  return (
    <div className="topnavContainer py-2">
      <div className="upper-nav flex justify-between px-4 pb-1">
        <div className="location space-x-2">
          <span>
            <i class="fa-solid fa-location-dot"></i>
          </span>
          <span>Xem tồn kho, giá bán tại: </span>
          <button>
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()} className='text-cyan-900 space-x-2 font-semibold'>
                Miền Bắc
                <span><i class="fa-solid fa-chevron-down"></i></span>
              </a>
            </Dropdown>
          </button>
        </div>
        <div className="menu-option">
          <ul className='flex space-x-1'>
            <li>Hotline: 1800.6608 | </li>
            <li>
              <a href="#">Zalo của hãng | </a>
            </li>
            <li>
              <a href="#">Ưu đãi khi tải app | </a>
            </li>
            <li>
              <a href="#">Hệ thống 159 cửa hàng |</a>
            </li>
            <li>
              <a href="#">Thưởng Kicoin</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-nav flex justify-between items-center p-3 px-10 bg-blue-600 ">
        <div className="logo">
          <a href="/index">LOGO</a>
        </div>
        <div className="search-bar">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{
              width: "100%",
            }}
          />
        </div>
        <div className="option">
          <ul className="flex space-x-5">
            <li>
              <a href="#" className="flex flex-col justify-around items-center">
                <span>
                  <i class="fa-solid fa-bars"></i>
                </span>
                <span>Lịch sử đơn hàng</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-col justify-center items-center">
                <span>
                  <i class="fa-regular fa-bell"></i>
                </span>
                <span>Ưu đãi</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-col justify-center items-center">
                <span>
                  <i class="fa-solid fa-cart-shopping"></i>
                </span>
                <span>Giỏ hàng</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
