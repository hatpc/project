import React, { useState } from 'react';
import FullPageLoading from '../../../components/fullPageLoading/FullPageLoading';

const useFullPageLoader = () => {
  const [iloading, setIloading] = useState(false);
  return [iloading ? <FullPageLoading /> : null, () => setIloading(true), ()=> { setTimeout(() => setIloading(false), 1000)}];
};

export default useFullPageLoader;
