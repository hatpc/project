import React from 'react';
import Image from 'next/image';
import { banner6, banner1, banner3, Calendar, DanTuong } from '../../../public/images/nancy';

const HomeProjectComponent = () => {
  const items = [
    {
      id: 5,
      projectName: "Lịch để bàn xinh xắn nhiều màu sắc",
      imageUrl: banner6,
      quantity: 223
    },
    {
      id: 4,
      projectName: "Lịch để bàn xinh xắn nhiều màu sắc",
      imageUrl: banner1,
      quantity: 654
    },
    {
      id: 3,
      projectName: "Lịch để bàn xinh xắn nhiều màu sắc",
      imageUrl: banner3,
      quantity: 222
    },
    {
      id: 2,
      projectName: "Lịch để bàn xinh xắn nhiều màu sắc",
      imageUrl: Calendar,
      quantity: 465
    },
    {
      id: 1,
      projectName: "Lịch để bàn xinh xắn nhiều màu sắc",
      imageUrl: DanTuong,
      quantity: 278
    }
  ]

  const longImages = items ? items.slice(0, 1) : [];
  const shortImages = items ? items.slice(1, 5) : [];

  const handleFeaturedProjects = () => {
    if (items && items.length !== 0) {
      return (
        <div className="row featured-image">
          {longImages.map((element, index) => {
            return (
              <div key={index} className="col-4 my-3 under-path">
                <Image src={element.imageUrl} alt="features" layout='fill' />
                <div className="text-bottom">
                  <span className="name">{element.projectName}</span>
                  <span className="listing">
                    {element.quantity} sản phẩm đã được bán/tháng
                  </span>
                </div>
              </div>
            );
          })}
          <div className="col-8 d-flex flex-wrap px-0">
            {shortImages.map((element, index) => {
              return (
                <div
                  style={{ height: '250px' }}
                  className="col-6 my-3 under-path"
                  key={index}
                >
                  <Image src={element.imageUrl} alt="features" layout='fill' />
                  <div className="text-bottom">
                    <span className="name">{element.projectName}</span>
                    <span className="listing">
                      {element.quantity} sản phẩm đã được bán/tháng
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="featured-project py-5">
        <div className="container properties-title">
          <div className="col-12 service-apartment">
            <h3 className="service-title">SẢN PHẨM BÁN CHẠY</h3>
            <div className="under-line mt-3 mb-5 mx-auto">
              <span className="middle-line"></span>
            </div>
          </div>
          {handleFeaturedProjects()}
        </div>
        <div className="col-12 mt-5 text-center">
          <button className="btn-showmore">
            Xem thêm
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeProjectComponent;
