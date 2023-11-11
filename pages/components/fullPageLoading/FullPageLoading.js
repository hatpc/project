import React from 'react';
import { Spinner } from 'react-bootstrap';

const FullPageLoading = () => {
  return (
    <div id="loadingPage" className="loader-container">
      <div className="loader">
        <Spinner animation="border" />
      </div>
    </div>
  );
};

export default FullPageLoading;
