import React, { useMemo } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SearchResidence from '../searchs/residence/Residence';
import { banner1, banner3, banner4, Sale } from '../../../../public/images/nancy';
import Image from 'next/image';


const BannerSlides = () => {

  const items = [
    {
      imageUrl: banner1
    }, {
      imageUrl: banner3
    }, {
      imageUrl: banner4
    },
  ];

  const slideBanner = useMemo(() => {
    if (items && items.length) {
      return (
        <>
          <Carousel>
            <Carousel.Item>
              <Image className="header-banner w-100" layout='cover' alt="img" src={banner1} />
              <div className="banner-text">
                <h2 className="title-work">TƯNG BỪNG CHÀO ĐÓN TẾT TRUNG THU</h2>
                <Image className="label-sale" src={Sale} alt="sale" width={20} height={40}></Image>
                <p className="content-work mt-4 mb-0">Cùng với không khí tươi vui của mùa tết Trung Thu,
                  Nancy Store cũng sẽ góp một phần
                  vào sự chuẩn bị của bạn bằng chương trình khuyến mãi “Trung Thu ấm cúng, Tưng Bừng
                  Khuyến Mãi”.</p>
                <span className="button-work my-3">
                  Khám phá ngay!
                </span>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="header-banner w-100" layout='cover' alt="img" src={banner4} />
              <div className="banner-text">
                <h2 className="title-work">TƯNG BỪNG CHÀO ĐÓN TẾT TRUNG THU</h2>
                <Image className="label-sale" src={Sale} alt="sale" width={30} height={30}></Image>
                <p className="content-work mt-4 mb-0">Cùng với không khí tươi vui của mùa tết Trung Thu,
                  Nancy Store cũng sẽ góp một phần
                  vào sự chuẩn bị của bạn bằng chương trình khuyến mãi “Trung Thu ấm cúng, Tưng Bừng
                  Khuyến Mãi”.</p>
                <span className="button-work my-3">
                  Khám phá ngay!
                </span>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="header-banner w-100" layout='cover' alt="img" src={banner3} />
              <div className="banner-text">
                <h2 className="title-work">TƯNG BỪNG CHÀO ĐÓN TẾT TRUNG THU</h2>
                <Image className="label-sale" src={Sale} alt="sale" width={20} height={40}></Image>
                <p className="content-work mt-4 mb-0">Cùng với không khí tươi vui của mùa tết Trung Thu,
                  Nancy Store cũng sẽ góp một phần
                  vào sự chuẩn bị của bạn bằng chương trình khuyến mãi “Trung Thu ấm cúng, Tưng Bừng
                  Khuyến Mãi”.</p>
                <span className="button-work my-3">
                  Khám phá ngay!
                </span>
              </div>
            </Carousel.Item>
          </Carousel>
        </>
      );
    }
  });

  return (
    <>
      <section id="section-banner" className="section-block section-banner pt-0 less-height">
        {slideBanner}
        <div className="container search-wrapper">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="search-form jp-font-sawarabi-gothic">
                <ul className="nav nav-tabs" id="searchForm" role="tablist">
                  <li className="nav-item" role="presentation">
                    <span className="nav-link active" id="Residence-tab" data-toggle="tab" role="tab">
                      Search
                    </span>
                  </li>
                </ul>
                <SearchResidence />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerSlides;
