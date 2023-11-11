import React from 'react';
import { SmallNote, DanTuong } from '../../../public/images/nancy';
import Image from 'next/image';

const HomeAboutUs = () => { 

  return (
    <div className="section-block">
      <div className="container">
        <div className="row">
          <div className="col-6 about-us-path text-left">
            <h3 className="about-title">Về Nancy Store</h3>
            <div className="under-line mt-3 mb-4">
              <span className="middle-line"></span>
            </div>
            <p className="about-content">
              Được thành lập từ năm 2015, Nancy Store đã trải qua 6 năm từ khi lập nghiệp. Có vị trí đứng 
              vững chãi trong thị trường văn phòng phẩm của Việt Nam. 
              Ngoài ra với nhiều mặt hàng xinh xăn và mới lạ được cập nhật các mẫu và chạy theo xu thế,
              hot trend của giới trẻ. Nancy hứa hẹn sẽ mang đến cho khách hàng và người dùng nhiều sản phẩm
              tốt, chất lượng và hài lòng. :D
            </p>
            <button className="btn-about mt-5">
              Tìm hiểu thêm
            </button>
          </div>
          <div className="col-6 px-0">
            <div className="d-flex align-items-center">
              <div className="col-5">
                <Image className="about-icon" src={SmallNote} alt="about" objectFit='cover' />
              </div>
              <div className="col-7 d-flex flex-column pl-0">
                <Image className="about-icon" src={DanTuong} alt="about" objectFit='cover' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
