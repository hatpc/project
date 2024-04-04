import React, { useState, useEffect } from 'react';
import EventBus from 'eventing-bus';

import Header from './commons/header/Header';
import Footer from './commons/footer/Footer';

const PublicLayout = props => {

  return (
    <div className={`wrapper`}>
      <Header />
      <div className="public-layout">{props.children}</div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
