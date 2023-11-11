import React from 'react';
import BlockResidenceComponent from '../../layouts/commons/block/BlockResidence.component';
import { listProducts } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';

const HomeServiced = props => {
  return (
    <div className="container block-home-properties mt-5">
      <div className="row">
        <div className="col-12 service-apartment">
          <h3 className="service-title">SẢN PHẨM TIÊU BIỂU</h3>
          <div className="under-line mt-3 mb-5 mx-auto">
            <span className="middle-line"></span>
          </div>
        </div>
        <Swiper
          className="d-flex"
          slidesPerView={3}
          spaceBetween={30}
        >
          {listProducts.map((element, index) => (
            <SwiperSlide
              key={index}
              className="nav-top owl-carousel owl-theme owl-loaded owl-drag owl-home-properties col-item"
            >
              <BlockResidenceComponent
                post={element}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="col-12 mt-5 text-center">
          <button className="btn-showmore">
            Xem thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeServiced;
