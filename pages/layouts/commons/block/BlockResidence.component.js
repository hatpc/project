import React, { useState } from 'react';
import Link from 'next/link';
import { formatMoney } from '../../../utils/objects';
import { HeartIcon } from '../icons/index.page';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const BlockResidenceComponent = props => {
  const { post } = props;
  const [likeData, setLikeData] = useState('');

  if (post.name) post.name = post.name.replace('　', ' ');

  return (
    <>
      <div className="block-inner element-carousel">
        <div className="block-image">
          <div className="thumbail-slides thubnail-custom">
            <Swiper navigation={true} modules={[Navigation]}>
              {post?.images?.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="nav-top owl-carousel owl-theme owl-loaded owl-drag owl-home-properties col-item"
                >
                  <Link href="#" className="block-carousel-residence">
                    <div style={{ backgroundImage: `${item.url}` ? '' : `url("${banner1}")` }} className="thumbnail">
                      <Image alt="post 1" src={item?.url} layout='fill' />
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <span
              className={`heart circle ${likeData.includes(post.id) ? 'active-like' : ''}`}
            >
              <HeartIcon />
            </span>
          </div>
        </div>
        <div className="block-text none-split">
          <Link href="#" className="block-carousel-residence">
            <h4>{post.name}</h4>
          </Link>
          <div className="property-info d-flex flex-column">
            <div className="d-flex justify-content-between">
              <div className="price">
                {formatMoney(post.priceMin, 0, 0)}đ ~ {formatMoney(post.priceMax, 0, 0)}đ
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between extra-btn mt-3">
            <button className="block-button details-block-btn">Chi tiết</button>
            <button className="block-button booknow-block-btn">Mua ngay</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockResidenceComponent;
