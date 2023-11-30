import React from 'react';
import './css/Homepage.css'
import { Carousel } from 'antd';
import Menu from './components/Menu';
import HomeSlider from './components/HomeSlider';
import UserInfo from './components/UserInfo';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function Homepage() {
  const propsCarousel = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className='homeContainer container mx-auto h-full flex flex-col'>
      <section className='content'>
        <div className="menu">
          <Menu />
        </div>
        <HomeSlider />
        <UserInfo />
      </section>
      <section className='banner flex-grow mt-0'>
        {/* <button className='carousel-btn'><i class="fa-solid fa-chevron-left"></i></button> */}
        <Carousel className='h-full' {...propsCarousel}>
          <div className='h-full px-4'>
            <h3 style={contentStyle}>Banner</h3>
          </div>
          <div className='h-full px-4'>
            <h3 style={contentStyle}>Banner</h3>
          </div>
          <div className='h-full px-4'>
            <h3 style={contentStyle}>Banner</h3>
          </div>
          <div className='h-full px-4'>
            <h3 style={contentStyle}>Banner</h3>
          </div>
        </Carousel>
        {/* <button className='carousel-btn'><i class="fa-solid fa-chevron-right" onClick={React.createRef().next()}></i></button> */}
      </section>
    </div>
  )
}
