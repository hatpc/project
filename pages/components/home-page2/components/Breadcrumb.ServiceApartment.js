import React from 'react';
import { Link } from 'react-router-dom';
import { Subtract } from '../../../assets/images/web-isn';

const BreadcrumbServiceApartment = () => {
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="breadcrumb-container">
          <Link className="breadcrumb-home mr-3" to="/">
            Trang chủ
          </Link>
          <img src={Subtract} alt="subtract" />
          <div className="breadcrumb-service ml-3">
            &nbsp;Danh sách sản phẩm
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BreadcrumbServiceApartment;
