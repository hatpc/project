import React, { useRef } from 'react';
import Link from 'next/link';
import { items } from '../../../pages/listOffers1/data';


import BlockBlogComponent from '../../layouts/commons/block/BlockBlog.component';
import { ARROW_LEFT, ARROW_RIGHT } from '../../utils/constants';  
import { banner6, banner8, SmallNote } from '../../../public/images/nancy';
import { Swiper, SwiperSlide } from 'swiper/react';


const HomeBlog = () => {
  const items = [
    {
      "id": 3,
      "blogTitle": "Nancy vừa nhập một lô hàng lịch để bàn siêu cute để phục vụ khách hàng",
      "blogThumnail": SmallNote,
      "date": "August 20, 2023",
    },
    {
      "id": 2,
      "blogTitle": "Nancy vừa nhập một lô hàng lịch để bàn siêu cute để phục vụ khách hàng",
      "blogThumnail": banner6,
      "date": "August 17, 2023",
    },
    {
      "id": 1,
      "blogTitle": "Nancy vừa nhập một lô hàng lịch để bàn siêu cute để phục vụ khách hàng",
      "blogThumnail": banner8,
      "date": "August 16, 2022",
    }
  ]

  return (
    <>
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
                {items.map((element, index) => (
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
          <div className="col-12 mt-5 text-center ">
            {/* <button className="btn-showmore">
              Xem thêm
            </button> */}
            <Link className="btn-showmore" href="/listOffers1">Xem thêm</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBlog;
