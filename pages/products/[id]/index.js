import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ARROW_LEFT, ARROW_RIGHT } from '../../utils/constants';
import Header from '@/pages/layouts/commons/header/Header';
import Footer from '@/pages/layouts/commons/footer/Footer';


import {
  banner1,
   banner3,
  SmallNote,
  banner6,
  banner4
} from '../../../public/images/nancy';

import { listProducts } from '@/pages/homePage/data';

function Shopping() {
  const options = {
    items: 3,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: false,
    loop: false,
    navText: [ARROW_LEFT, ARROW_RIGHT],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  };
  return (
    <div className='card'>
      <div id="services" className="services section-bg">
        <Header />
        <div className="container-fluid">
          <div className="row row-sm">
            <div className="col-md-6 _boxzoom">
              <div className="zoom-thumb">
                <ul className="piclist">
                  <li><Image src={banner4} alt="" /></li>
                  <li><Image src={banner1} alt="" /></li>
                  <li><Image src={banner3} alt="" /></li>
                  <li><Image src={banner6} alt="" /></li>
                </ul>
              </div>
              <div className="_product-images">
                <div className="picZoomer">
                <div>
                  <Image className="my_img" src={banner6} alt="" />
                  {/* <Image id="zoomC" src={banner8} alt="" /> */}
                </div>
              </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="_product-detail-content">
                <p className="_p-name">Vở 4 Ô ly 48 trang School Oringa Galaxy 0560 </p>
                <div className="_p-price-box">
                  <div className="p-list">
                    <span> Giá : <i className="fa fa-inr"></i> <del> 17.999 đ  </del>   </span>
                    <span className="price">13.745 đ </span>
                  </div>
                  <div className="_p-add-cart">
                    <div className="_p-qty">
                      <span>Số lượng</span>
                      <div className="value-button decrease_" id="" value="Decrease Value">-</div>
                      <input type="number" name="qty" id="number" value="1" />
                      <div className="value-button increase_" id="" value="Increase Value">+</div>
                    </div>
                  </div>
                  <div className="_p-features">
                    <span className='detail-information'>Thông tin chi tiết sản phẩm: </span>
                    <ul>
                        <li> Dòng Kẻ:      4 ly vuông (2.5 x 2.5)mm</li>
                        <li>     Kích Thước: 170 x 240 (±2mm)   </li>
                        <li> Số Trang:     48 Trang Không Kể Bìa</li>
                        <li> Định Lượng:110 g/m2</li>
                        <li>  Độ Trắng:     90 - 92%ISO</li>
                        <li>  Đóng Gói:    5 quyển/lốc</li>
                        <li>Sản xuất tại:    Công ty Cổ phần Văn phòng phẩm Hồng Hà</li>
                        <li>  Xuất xứ:          Việt Nam</li>
                    </ul>
                  </div>
                  <form action="" method="post" accept-charset="utf-8">
                    <ul className="spe_ul"></ul>
                    <div className="_p-qty-and-cart">
                      <div className="_p-add-cart">
                        <button className="btn-theme btn buy-btn" tabindex="0">
                          <i className="fa fa-shopping-cart"></i> Mua ngay
                        </button>
                        <button className="btn-theme btn btn-success" tabindex="0">
                          <i className="fa fa-shopping-cart"></i> Thêm vào giỏ hàng
                        </button>
                        <input type="hidden" name="pid" value="18" />
                        <input type="hidden" name="price" value="850" />
                        <input type="hidden" name="url" value="" />
                      </div>
                    </div>
                  </form>
                  <div className='call'> Gọi ngay <a href=''>0383575012 </a> để có được tư vấn tốt nhất </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec bg-light">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 title_bx mb-5">
              <h3 className="title"> Sản phẩm cùng loại</h3>
            </div>
          </div>
          <Swiper
            className="d-flex"
            slidesPerView={4}
            spaceBetween={30}
          >
            {listProducts.map((element, index) => (
              <SwiperSlide
                key={index}
                className="nav-top owl-carousel owl-theme owl-loaded owl-drag owl-home-properties col-item"
              >
                <div className="sq_box shadow">
                  <div className="pdis_img">
                    <span className="wishlist">
                      <a alt="Add to Wish List" title="Add to Wish List" href="javascript:void(0);"> <i className="fa fa-heart"></i></a>
                    </span>
                    <a href="#">
                      <Image src={SmallNote} />
                    </a>
                  </div>
                  <h4 className="mb-1"> <a href="details.php"> Milton Bottle </a> </h4>
                  <div className="price-box mb-2">
                    <span className="price"> Giá <i className="fa fa-inr"></i> 200 </span>
                    <span className="offer-price"> Chào giá <i className="fa fa-inr"></i> 130 </span>
                  </div>
                  <div className="btn-box text-center">
                    <a className="btn btn-sm" href="javascript:void(0);"> <i className="fa fa-shopping-cart"></i> Thêm vào giỏ hàng </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Footer />
        </div>
      </div>
    </div>

  );
}

export default Shopping;