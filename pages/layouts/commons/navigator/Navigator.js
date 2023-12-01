import React, { useState, useEffect, useRef } from 'react';
import { Subtract, SubtractDown, SubtractRed } from '../../../../public/images/web-isn';
import { User, ArrowDown } from '../../../../public/images/web-isn';
// import { LoginComponent } from '../../../';
// import { VerifyEmailComponent } from '../../../modules/signUp/pages';
// import ForgotModalComponent from '../../../modules/forgotPassword/pages/ForgotModal.component';
import { NancyLogo } from '../../../../public/images/nancy';
import Image from 'next/image';
import Link from 'next/link';


const Navigator = () => {
  // const language = localStorage.getItem('language');
  const [showMenu, setShowMenu] = useState(false);
  const refImg = useRef();
  useOnClickOutside(refImg, () => setShowMenu(false));
  const [showUserMenu, setShowUserMenu] = useState(false);
  // const authUserData = JSON.parse(localStorage.getItem('authUserData'));
  const [showLogin, setShowLogin] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [showVerifyPopup, setShowVerifyPopup] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowForgot(false);
  };

  const closeVerifyEmailPopup = () => {
    setShowVerifyPopup(false);
  };
  const showVerifyEmailPopup = () => {
    setShowVerifyPopup(true);
  };

  const handleShowForgot = () => {
    setShowLogin(false);
    setShowForgot(true);
  };

  const handleShowSignUp = () => {
    setShowLogin(false);
    setShowVerifyPopup(true);
  };

  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = event => {
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
          document.removeEventListener('mousedown', listener);
          document.removeEventListener('touchstart', listener);
        };
      },
      //eslint-disable-next-line
      [refImg, handler],
    );
  }

  const currentMenu = [
    {
      link_href: `/products`,
      link_label: 'Sản phẩm',
      // active: location.pathname.includes(`/`),
    },
    {
      link_href: `/news`,
      link_label: 'Bài viết',
      // active: location.pathname.includes(`/news`),
    },
    {
      link_href: `/contact`,
      link_label: 'Liên hệ',
      // active: location.pathname.includes(`/contact`),
    },
    {
      link_href: `/faq`,
      link_label: 'FAQ',
      // active: location.pathname.includes(`/faq`),
    },
    {
      link_href: `/about-nancy`,
      link_label: 'Về Nancy',
      // active: location.pathname.includes(`/about-nancy`),
    },
  ];

  const listProduct = [
    { name: "Bút mực" },
    { name: "Sổ tay" },
    { name: "Sách giáo khoa" },
    { name: "Thước kẻ" },
    { name: "Bút chì" },
    { name: "Giấy note" },
    { name: "Quả lưu niệm" },
    { name: "Balo học sinh" },
    { name: "Đồng hồ để bản" },
    { name: "Ly thủy tinh" },
    { name: "Bình nước" },
  ]

  // useEffect(() => {
  //   if (authUserData && authUserData.token && authUserData.token.refresh_token) {
  //     setShowUserMenu(true);
  //   }
  // }, [authUserData]);

  const logout = () => {
    localStorage.removeItem('authUserData');
    setShowUserMenu(false);
    // history.push(``);
  };

  const DropdownItems = () => {
    return (
      <ul ref={refImg} className="dropItems" id="dropScroll">
        {listProduct.map((item, i) => {
          return (
            <div key={i} className="d-flex sub-menu-item">
              <div className="icon-sub d-flex align-items-center justify-content-center">
                <img src={Subtract} alt="icon"></img>
              </div>
              <li className='text-sub-active ml-0'>
                {item.name}
              </li>
            </div>
          )
        })}
      </ul>
    );
  };

  return (
    <>
      <section className="section-header-logo header-logo jp-font-sawarabi-gothic" style={{ fontWeight: '500' }}>
        <div className="container pt-4 pb-3">
          <div className="row align-items-center d-flex bd-highlight">
            <div className="col-4 col-md-2">
              <div className="header-logo-image text-left">
                <Link href='/'>
                  <Image alt="Nancy logo" src={NancyLogo} effect="blur" style={{ width: '105px' }} />
                </Link>
              </div>
            </div>
            {/* <div className="menu-responsive-overlay show"></div> */}
            <div className="col-12 col-md-10 d-none d-lg-block bd-highlight ml-auto">
              <div className="nav-main-menu ">
                <ul className="main-menu text-right">
                  {currentMenu.map((menu, i) => (
                    <li className={`menu-item ${menu.active ? 'active' : ''} `} key={i}>
                      <Link href={`${menu.link_href}`}>{menu.link_label}</Link>
                    </li>
                  ))}
                  {showUserMenu === true ? (
                    <li>
                      <button className="item-link">
                        <img src={User} alt="user-icon" style={{ width: '42px', height: '40px' }}></img>
                        <img className="ml-2" src={ArrowDown} alt="arrow-icon"></img>
                      </button>
                      <ul className="wrap-dropdown-flag" style={{ top: '52px' }}>
                        <li className="flag-item">
                          <div>
                            <span className="item-link" onClick={() => logout()}>
                              Đăng xuất
                            </span>
                          </div>
                        </li>
                      </ul>
                    </li>
                  ) : (
                    <li className="px-0">
                      <div className="item-link">
                        <button className="login-btn" onClick={() => setShowLogin(true)}>
                          Đăng nhập
                        </button>
                        <button className="signup-btn" onClick={() => showVerifyEmailPopup()}>
                          Đăng ký
                        </button>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
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
        {/* <ForgotModalComponent
          showModal={showForgot}
          hideModal={() => setShowForgot(false)}
          handleShowLogin={handleShowLogin}
        /> */}
      </section>
    </>
  );
};

export default Navigator;
