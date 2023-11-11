import React, { useState, useRef, useEffect } from 'react';
import Navigator from '../navigator/Navigator';

const Header = () => {
  // const [isScrollUp, setIsScrollUp] = useState(false);
  // const prevScrollY = useRef(0);

  // const handleScroll = () => {
  //   const currentScrollY = window.scrollY;

  //   if (prevScrollY.current > currentScrollY && currentScrollY) setIsScrollUp(true);
  //   else setIsScrollUp(false);

  //   prevScrollY.current = currentScrollY;
  // };

  // const handleMouseOver = () => {
  //   if (prevScrollY.current > 50) setIsScrollUp(true);
  // };

  // useEffect(() => {
  //   window.addEventListener('mouseover', handleMouseOver);
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  //   // eslint-disable-next-line
  // }, [prevScrollY]);

  return (
    <>
      {/* <div className={`${window.scrollY > 50 ? 'fixed-frame-header' : ''}`}></div> */}
      {/* <header className={`section-header header ${isScrollUp ? 'sticky' : window.scrollY > 50 ? 'hide-sticky' : ''}`}> */}
        <Navigator />
      {/* </header> */}
    </>
  );
};

export default Header;
