import React, { useEffect } from 'react';
import HomeServiced from './components/HomeServiced.component';
import HomeProject from './components/HomeProject.component';
import HomeAboutUs from './components/HomeAboutUs.component';
import BannerSlides from '../layouts/commons/bannerSlides/BannerSlides';
import HomeBlog from './components/HomeBlog.component';
import Footer from '../layouts/commons/footer/Footer';
import Header from '../layouts/commons/header/Header';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import Shop from '../products/[id]';

const Home = () => {
  return (
    <>
      <Header />
      {/* <SwiperSlide /> */}
      <div className="section-block background-gray">
        <HomeServiced
          section="RESIDENCES_LIKE"
          key="Hot Properties"
          headerTitle='Hot Properties'
          class={'host-properties'}
          metaKey="hot"
        />
      </div>
      <HomeProject />
      <HomeBlog />
      <HomeAboutUs />
      <Footer />
      {/* <Shop /> */}

    </>
  );
};

export default Home;
