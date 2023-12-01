import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import BreadcrumbListOffers from '../common2/Breadcrumb.ListOffers';
import { ServiceBanner } from '../../../../public/images/web-isn';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import useFullPageLoader from '../../common3/isn/useFullPageLoader';
import { data } from '../data';
import BlockBlogComponent from '../../../layouts/commons/block/BlockBlog.component';
import { ARROW_LEFT, ARROW_RIGHT } from '../../../utils/constants';


const ListOffersComponent = () => {
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [listServiced, setListServiced] = useState([]);
  const owlBlog = useRef(null);
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

  useEffect(() => {
    showLoader();
    const listData = data;
    setListServiced(listData);
    hideLoader();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    //eslint-disable-next-line
  }, [])

  const displayItems = () => {
    if (listServiced && listServiced.items) {
      return (
        <>
          <div className="section-block blogs">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {listServiced.items && listServiced.items.length ? (
                    <SwiperSlide
                      ref={owlBlog}
                      options={options}
                      className="nav-top owl-carousel owl-theme owl-loaded owl-drag"
                    >
                      {listServiced.items.map((blog, i) => {
                        if (!blog) return null;
                        return (
                          <div key={i} className="col-item">
                            <BlockBlogComponent post={blog} />
                          </div>
                        );
                      })}
                    </SwiperSlide>
                  ) : (
                    ''
                  )}s
                </div>
                <div className="col-12 mt-5">
                  {listServiced.items && listServiced.items.length ? (
                    <Swiper
                      ref={owlBlog}
                      options={options}
                      className="nav-top owl-carousel owl-theme owl-loaded owl-drag"
                    >
                      {listServiced.items.map((blog, i) => {
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
                </div>
                <div className="col-12 mt-5">
                  {listServiced.items && listServiced.items.length ? (
                    <Swiper
                      ref={owlBlog}
                      options={options}
                      className="nav-top owl-carousel owl-theme owl-loaded owl-drag"
                    >
                      {listServiced.items.map((blog, i) => {
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
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  return (
    <React.Fragment>
      <div id="listOffers">
        <div className="position-relative service-banner">
          <div className="overlay-text">Bài viết nổi bật</div>
          {/* <LazyLoadImage src={ServiceBanner} alt="banner" /> */}
          <div className="color-overlay"></div>
        </div>
        <BreadcrumbListOffers />
        <div className="container">{displayItems()}</div>
      </div>
      {loader}
      <BreadcrumbListOffers />
    </React.Fragment>
  )
}

export default ListOffersComponent;