import React from 'react';

const ChevronRightIcon = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
        <path fill="none" d="M0 0H24V24H0z" />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 14l4-4-4-4"
          transform="translate(1.5 2.5)"
        />
      </svg>
    </>
  );
};

export default ChevronRightIcon;
