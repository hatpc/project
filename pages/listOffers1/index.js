import React from 'react';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';

import { data } from './data';
import Header from '../layouts/commons/header/Header';
import Footer from '../layouts/commons/footer/Footer';
import { ServiceBanner } from '@/public/images/web-isn';
import BlockBlogComponent from '../layouts/commons/block/BlockBlog.component';



const listOffers1 = () => {
  const displayItems = () => {
    if (data.items) {
      return (
        <div className="serviceapartment-page row">
          {data.items.map((index) => {
            return (
              <div id="serviceApartment" className="p-3 col-xl-4 col-md-6 col-sm-12 col-12" key={index}>
                <div className="project-info justify-content-center align-items-center mt-3">
                  <div className="container-slider">
                    <SwiperSlide
                      className="col-12 mt-5"
                    >
                      {data.items.length ? (
                        <Swiper
                          className="nav-top owl-carousel owl-theme owl-loaded owl-drag"
                        >
                          {data.items.map((blog, i) => {
                            if (!blog) return null;
                            return (
                              <div key={i} className="col-item">
                                <BlockBlogComponent post={blog} />
                              </div>
                            );
                          })}
                        </Swiper>
                      ) : (
                        ''
                      )}
                    </SwiperSlide>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <>
      <Header />
      <React.Fragment>
        <div id="listOffers">
          <div className="position-relative service-banner">
            <div className="overlay-text">Bài viết nổi bật</div>
            <Image className="header-banner w-100" layout='cover' alt="img" src={ServiceBanner} />
            <div className="color-overlay"></div>
          </div>
          <div className="container">{displayItems()}</div>
        </div>
      </React.Fragment>
      <Footer />
    </>
  );
};

export default (listOffers1);
