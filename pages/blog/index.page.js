import React from 'react';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';

import { data } from './data';
import Header from '../layouts/commons/header/Header';
import Footer from '../layouts/commons/footer/Footer';
import { ServiceBanner } from '@/public/images/web-isn';
import BlockBlogComponent from '../layouts/commons/block/BlockBlog.component';



const ListOffers1 = () => {
  const displayItems = () => {
    return (
      <div className="serviceapartment-page row">
        <div className="section-block blogs">
          <div className="container">
            <div className="row mt-5">
              <div className="col-12 service-apartment">
                <h3 className="service-title">NANCY&apos;S BLOGS</h3>
                <div style={{ width: '170px' }} className="under-line mt-3 mb-5 mx-auto">
                  <span className="middle-line"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Swiper
                  className="d-flex"
                  slidesPerView={3}
                  spaceBetween={30}
                >
                  {data.items.map((element, index) => (
                    <SwiperSlide
                      key={index}
                      className="nav-top owl-carousel owl-theme owl-loaded owl-drag owl-home-properties col-item"
                    >
                      <div className="col-item">
                        <BlockBlogComponent post={element} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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

export default ListOffers1;
