import React, { useState, useEffect } from 'react';
import EventBus from 'eventing-bus';

import Header from './commons/header/Header';
import Footer from './commons/footer/Footer';
/* import Subscribe from './commons/subscribe/Subscribe'; */
import { getLanguage, getPathLanguage } from '../utils/params';

const PublicLayout = props => {
  const language = getLanguage(location);
  const [isHiddenScroll, setIsHiddenScroll] = useState(false);
  useEffect(() => {
    return () => EventBus.unregisterCallbacksForEvent('checkBodyScroll');
  }, []);
  EventBus.on('checkBodyScroll', data => setIsHiddenScroll(data));

  return (
    <div className={`wrapper ${language} ${isHiddenScroll ? 'h-100vh' : ''}`}>
      <Header />
      <div className="public-layout">{props.children}</div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
