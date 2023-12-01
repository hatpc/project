import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Subtract } from '../../../../public/images/web-isn';

const BreadcrumbListOffers = () => {
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="breadcrumb-container">
          <Link className="breadcrumb-home mr-3" href="/">
            Trang chủ
          </Link>
          <img src={Subtract} alt="subtract" />
          <div className="breadcrumb-service ml-3">
            &nbsp;Bài viết nổi bật
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BreadcrumbListOffers;
