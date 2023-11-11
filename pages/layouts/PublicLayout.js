import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactLoading from 'react-loading';
import EventBus from 'eventing-bus';
import { Helmet } from 'react-helmet';

import Header from './commons/header/Header';
import Footer from './commons/footer/Footer';
/* import Subscribe from './commons/subscribe/Subscribe'; */
import { getLanguage, getPathLanguage } from '../utils/params';

const PublicLayout = props => {
  const location = useLocation();
  const language = getLanguage(location);
  const pathLanguage = getPathLanguage(location);

  const [isHiddenScroll, setIsHiddenScroll] = useState(false);

  useEffect(() => {
    return () => EventBus.unregisterCallbacksForEvent('checkBodyScroll');
  }, []);

  EventBus.on('checkBodyScroll', data => setIsHiddenScroll(data));

  return (
    <div className={`wrapper ${language} ${isHiddenScroll ? 'h-100vh' : ''}`}>
      <Helmet htmlAttributes={{ lang: language }}>
        <html lang={language}></html>
        <title>Nancy Store</title>
      </Helmet>
      <Header />
      <div className="public-layout">{props.children}</div>
      {location.pathname === '/' ||
        location.pathname === pathLanguage ||
        location.pathname === `${pathLanguage}/` ||
        location.pathname === `${pathLanguage}/residences`}
      <Footer />
      {props.loading && props.loading.loading ? (
        <div className="wrap-loading">
          <ReactLoading type={'spinningBubbles'} height={'80px'} color="#fff" width={'80px'} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default PublicLayout;
