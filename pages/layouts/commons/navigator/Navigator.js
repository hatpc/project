import React, { useState } from 'react';
import { User, ArrowDown } from '../../../../public/images/web-isn';
import { UilShoppingCart } from '@iconscout/react-unicons'
import { NancyLogo } from '../../../../public/images/nancy';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Navigator = () => {
  const [showUserMenu] = useState(false);

  const router = useRouter();
  // Lấy pathname để check active cho menus
  const { pathname } = router || {};

  const currentMenu = [
    {
      link_href: `/products`,
      link_label: 'Sản phẩm',
      active: pathname.includes(`/products`),
    },
    {
      link_href: `/blog`,
      link_label: 'Bài viết',
      active: pathname.includes(`/blog`),
    },
    {
      link_href: `/contact`,
      link_label: 'Liên hệ',
      active: pathname.includes(`/contact`),
    },
    {
      link_href: `/faq`,
      link_label: 'FAQ',
      active: pathname.includes(`/faq`),
    },
    {
      link_href: `/about-nancy`,
      link_label: 'Về Nancy',
      active: pathname.includes(`/about-nancy`),
    },
  ];

  return (
    <>
      <section className="section-header-logo header-logo jp-font-sawarabi-gothic py-0" style={{ fontWeight: '500' }}>
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
                        <Image src={User} alt="user-icon" style={{ width: '42px', height: '40px' }}></Image>
                        <Image className="ml-2" src={ArrowDown} alt="arrow-icon"></Image>
                      </button>
                      <ul className="wrap-dropdown-flag" style={{ top: '52px' }}>
                        <li className="flag-item">
                          <div>
                            <span className="item-link">
                              Đăng xuất
                            </span>
                          </div>
                        </li>
                      </ul>
                    </li>
                  ) : (
                    <li className="px-0">
                      <div className="item-link">
                        <Link className="login-btn text-white" href="/login">Đăng nhập</Link>
                        <Link className="signup-btn text-white" href="/signup">Đăng ký</Link>
                      </div>
                    </li>
                  )}
                  <li className='addtocard'>
                    <span className="position-relative">
                      <Link className="btn-showmore card position-absolute translate-middle border border-light rounded-circle" href="/addtocard">10</Link>
                      <UilShoppingCart />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navigator;
