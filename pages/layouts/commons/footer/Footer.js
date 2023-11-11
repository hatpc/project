import React from 'react';
import { MasterCard, SignupChecked, Visa, YouTube, Zalo } from '../../../../public/images/web-isn';
import { backtop, NancyLogo } from '../../../../public/images/nancy';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <footer className="section-block footer background-black">
        <div className="container">
          <div className="d-flex row">
            <div className="col-3 footer-items">
              <h3 className="mb-4">Tìm kiếm sản phẩm</h3>
              <div>
                <Link href="#">
                  <p className="mb-3">Tìm theo tên</p>
                </Link>
              </div>
              <div>
                <Link href="#">
                  <p className="mb-3">Tìm theo giá tiền</p>
                </Link>
              </div>
              <div>
                <Link href="#">
                  <p className="mb-3">Sản phẩm bán chạy</p>
                </Link>
              </div>
            </div>
            <div className="col-3 footer-items">
              <h3 className="mb-4">Về Nancy</h3>
              <div>
                <Link href="#">
                  <p className="mb-3">Hệ thống cửa hàng</p>
                </Link>
              </div>
              <div>
                <Link href="#">
                  <p className="mb-3">Chi nhánh</p>
                </Link>
              </div>
              <div>
                <Link href="#">
                  <p className="mb-3">Ưu đãi</p>
                </Link>
              </div>
            </div>
            <div className="col-3 footer-items">
              <h3 className="mb-4">Trợ giúp</h3>
              <div>
                <Link href="#">
                  <p className="mb-3">Liên hệ</p>
                </Link>
              </div>
              <div>
                <Link href="#">
                  <p className="mb-3">FAQ</p>
                </Link>
              </div>
            </div>
            <div className="col-3 footer-items ">
              <h3 className="mb-4">Theo dõi</h3>
              <div className='d-flex'>
                <Image className="mr-2" src={YouTube} alt="youtube-icon"></Image>
                <Image src={Zalo} alt="zalo-icon"></Image>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap mt-4 row align-items-end">
            <div className="col-2">
              <Link href="#">
                <Image className="w-100" alt="ISN Vietnam Housing" src={NancyLogo} effect="blur" />
              </Link>
            </div>
              <div className="col-2 pl-0">
                <Link href="#">
                  <p className="mb-0">Điều khoản sử dụng</p>
                </Link>
              </div>
              <div className="col-2 pl-0">
                <Link href="#">
                  <p className="mb-0">Chính sách bảo mật</p>
                </Link>
              </div>
            <div className='col-2'>
              <Link href="#">
                <p className="mb-0">Chính sách hủy</p>
              </Link>
            </div>
            <div className='col-2'>
              <p className="mb-2">Bảo mật giao dịch</p>
              <Image src={Visa} alt="visa-icon"></Image>
            </div>
            <div className="col-2">
              <p className="mb-2 pr-4">Chứng nhận</p>
              <Image src={SignupChecked} alt="signup-icon"></Image>
            </div>
            <div className="mt-5 col-12" style={{ border: '1px solid #EEEEEE' }}></div>
            <div className="mt-4 col-12 text-left">
              <p>2021 @ Bản quyền thuộc Nancy</p>
            </div>
          </div>
          <div className="isn-item-2 gotop-icon" onClick={goToTop}>
            <Image src={backtop} alt="gotop-icon"></Image>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
