import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
// import OwlCarousel from 'react-owl-carousel2';
import EventBus from 'eventing-bus';
import { formatMoney } from '../../../utils/objects';
import { HeartIcon } from '../../../layouts/commons/icons';
import { ICON_LEFT, ICON_RIGHT } from '../../../utils/constants';
// import { LoginComponent } from '../../../components/loginPage/pages/Login.component';
// import { VerifyEmailComponent } from '../../signUp/pages';
// import ForgotModal from '../../../modules/forgotPassword/pages/ForgotModal.component';
import { getQueryString } from '../../../utils/params';
// import { getFavoriteApartment, postNewFavorite, postRemoveFavorite } from '../../serviceApartment/serviceApartment.api';
// import { banner1 } from '../../../assets/images/nancy';
import Image from 'next/image';
import next from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const BlockResidenceComponent = props => {
  const imageThumbnails = useRef(null);
  const { post } = props;
  // const language = localStorage.getItem('language') ?? 'en';
  const [likeData, setLikeData] = useState([]);
  // const authUserData = JSON.parse(localStorage.getItem('authUserData'));
  const [showLogin, setShowLogin] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [showVerifyPopup, setShowVerifyPopup] = useState(false);

  // useEffect(() => {
  //   if (authUserData) {
  //     getFavoriteApartment(getQueryString({ language, pageSize: '3', pageIndex: '1' })).then(res => {
  //       if (res?.data) {
  //         let data = res?.data?.map(el => {
  //           return el.id;
  //         });
  //         setLikeData(data);
  //       }
  //     });
  //   }
  //   // eslint-disable-next-line
  // }, []);

  const onClickLike = async () => {
    if (authUserData) {
      let newList = [];
      if (likeData.includes(post.id)) {
        let res = await postRemoveFavorite({ apartmentId: post.id });
        if (res?.data) {
          newList = likeData.filter(el => el !== post.id);
          setLikeData(newList);
        }
      } else {
        let res = await postNewFavorite({ apartmentId: post.id });
        if (res?.data) {
          newList = [...likeData, post.id];
          setLikeData(newList);
        }
      }
      EventBus.publish('RESET_LIKE', true);
    } else {
      handleShowLogin();
    }
  };
  const handleShowLogin = () => {
    setShowLogin(true);
    setShowForgot(false);
  };

  const handleShowForgot = () => {
    setShowLogin(false);
    setShowForgot(true);
  };

  const handleShowSignUp = () => {
    setShowLogin(false);
    setShowVerifyPopup(true);
  };
  const closeVerifyEmailPopup = () => {
    setShowVerifyPopup(false);
  };

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
              onClick={() => onClickLike()}
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
      {/* <LoginComponent
        closeLogin={() => {
          setShowLogin(false);
        }}
        showLogin={showLogin}
        handleShowForgot={handleShowForgot}
        handleShowSignUp={handleShowSignUp}
      /> */}
      {/* <VerifyEmailComponent
        showVerifyEmail={showVerifyPopup}
        hideVerifyEmail={closeVerifyEmailPopup}
      ></VerifyEmailComponent> */}
      {/* <ForgotModal showModal={showForgot} hideModal={() => setShowForgot(false)} handleShowLogin={handleShowLogin} /> */}
    </>
  );
};

export default BlockResidenceComponent;
