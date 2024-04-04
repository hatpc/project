import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import FullPageLoading from '../components/fullPageLoading/FullPageLoading';
import { Calendar } from '../../public/images/nancy';
import { HeartIcon } from '../layouts/commons/icons/index.page';
import Header from '../layouts/commons/header/Header';
import Footer from '../layouts/commons/footer/Footer';
// import axios from "axios";
import { useRouter } from 'next/router';
import { data } from './data';

// const baseURL = "https://tranquil-ocean-78518-9ef85aaab544.herokuapp.com/products";

const Products = () => {
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      // await axios.get(baseURL).then((response) => {
      //   setProducts(response?.data);
      // });
      setProducts(data?.listProducts);
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleGetProducts()
  }, [handleGetProducts]);

  const displayItems = () => {
    if (products) {
      return (
        <>
          <div className="serviceapartment-page row">
            {products?.map((item, index) => {
              return (
                <div id="serviceApartment" className="p-3 col-xl-4 col-md-6 col-sm-12 col-12" key={index}>
                  <div className="project-info justify-content-center align-items-center mt-3">
                    <div className="container-slider">
                      <Swiper
                        className="d-flex"
                      >
                        {item?.images?.map((element, index) => (
                          <div key={index} className="thumbail-slides thubnail-custom">
                            <SwiperSlide
                              key={index}
                              className="nav-top owl-carousel owl-theme owl-loaded owl-drag owl-home-properties col-item"
                            >
                              <div style={{ backgroundImage: `${element.url}` ? '' : `url("${banner1}")` }} className="thumbnail">
                                <Image alt="post 1" src={element?.url} layout='cover' />
                              </div>
                            </SwiperSlide>
                            <span
                              //   onClick={() => onClickLike()}
                              className='heart circle'
                            >
                              <HeartIcon />
                            </span>
                          </div>
                        ))}
                      </Swiper>
                    </div>
                    <div className="content">
                      <div className="project-name">
                        <p>{item.name}</p>
                      </div>
                      <div className="property-info d-flex flex-column">
                        <div className="d-flex justify-content-between">
                          <div className="price">
                            {item?.priceMin?.toLocaleString()}đ
                            ~
                            {item?.priceMax?.toLocaleString()}đ
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between extra-btn mt-3">
                        <button className="block-button details-block-btn" onClick={() => router.push('/products/1')}>Chi tiết</button>
                        <button className="block-button booknow-block-btn">Mua ngay</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      );
    }
  };

  return (
    <>
      {isLoading && <FullPageLoading />}
      <Header />
      <React.Fragment>
        <div id="serviceApartment" className='position-relative service-banner'>
          <Carousel>
            <Carousel.Item>
              <Image className="header-banner w-100" layout='cover' alt="img" src={Calendar} />
              <div className="overlay-text">Danh sách sản phẩm</div>
              <div className="color-overlay"></div>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="header-banner w-100" layout='cover' alt="img" src={Calendar} />
              <div className="overlay-text">Danh sách sản phẩm</div>
              <div className="color-overlay"></div>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="header-banner w-100" layout='cover' alt="img" src={Calendar} />
              <div className="overlay-text">Danh sách sản phẩm</div>
              <div className="color-overlay"></div>
            </Carousel.Item>
          </Carousel>
          <div className="container">
            <div className="item-per-page-container px-0 mt-5 col">
              <span className="text-sort mr-3">Sắp xếp:</span>
              <span className="along-line">&nbsp;</span>
              <select
                className="item-sort"
              >
                <option value="all">Tất cả</option>
                <option value="asc">Giá tăng dần</option>
                <option value="des">Giá giảm dần</option>
              </select>
              {/* select items display per page */}
              <select className="item-number">
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="45">45</option>
                <option value="60">60</option>
                <option value="75">75</option>
                <option value="90">90</option>
              </select>
            </div>
          </div>
          <div className="special-offers">
            <div className="d-flex">
              <div className="rectangle"></div>
              <div className="triangle-right"></div>
            </div>
            <span className="text">Ưu đãi đặc biệt</span>
          </div>
          <div
            className='like-contents'
          >
            <HeartIcon />
          </div>
          <div className="container">{displayItems()}</div>
        </div>
      </React.Fragment>
      <Footer />
    </>
  );
};

export default Products;
