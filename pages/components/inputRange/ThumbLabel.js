import React from 'react';
import { useThumbOverlap } from 'react-range';
import { formatMoney } from '../../utils/objects';

const ThumbLabel = ({ rangeRef, values, index, isPrice}) => {
  let curr = JSON.parse(localStorage.getItem('CURRENCY'))
  const [labelValue, labelStyle] = useThumbOverlap(rangeRef, values, index, 1, ' ∼ ', value => {
    if (isPrice) return `${formatMoney(parseInt(value), 0, 0)}m&#178;`;
    if (curr?.symbol === '₫') {
      return `${formatMoney(parseInt(value), 0, 0)}${curr?.symbol}`
    } else {
      return `${curr?.symbol}${formatMoney(parseInt(value), 0, 0)}`
    }
  });
  return (
    <div
      data-label={index}
      style={{
        display: 'block',
        position: 'absolute',
        whiteSpace: 'nowrap',
        padding: '0 10px',
        border: 'solid 1px #fe6b8d',
        borderRadius: 7,
        color: '#fe6b8d',
        background: 'rgba(255, 255, 255, 0.95)',
        fontSize: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        top: '-35px',
        ...labelStyle,
      }}
      className="range-label"
      dangerouslySetInnerHTML={{ __html: labelValue || '' }}
    ></div>
  );
};

export default ThumbLabel;
