import React, { useState } from 'react';
import FullPageLoading from '../fullPageLoading/FullPageLoading';

const useFullPageLoader = () => {
  const [loading, setLoading] = useState(false);
  return [loading ? <FullPageLoading /> : null, () => setLoading(true), ()=> { setTimeout(() => setLoading(false), 1000)}];
};

export default useFullPageLoader;
