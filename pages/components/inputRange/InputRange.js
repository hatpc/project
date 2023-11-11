import React, { useRef } from 'react';
import { Range, getTrackBackground } from 'react-range';
import ThumbLabel from './ThumbLabel';
const COLORS = ['#b3b3b3', '#fe6b8d', '#b3b3b3'];

const RangeComponent = ({ maxValue, minValue, value, step, onChangeUnit, isPrice, currency }) => {
  const rangeRef = useRef();

  const Thumb = ({ props, index }) => (
    <div
      {...props}
      style={{
        ...props.style,
      }}
      className={currency?.code === 'USD' ? "button-range" : "button-range button-range-vnd"}>
      <ThumbLabel rangeRef={rangeRef.current} values={value} index={index} isPrice={isPrice} currency={currency}/>
    </div>
  );

  const Track = ({ props, children }) => (
    <div
      onMouseDown={props.onMouseDown}
      onTouchStart={props.onTouchStart}
      style={{ ...props.style }}
      className="input-range-component"
    >
      <div
        ref={props.ref}
        style={{
          height: '5px',
          width: '100%',
          borderRadius: '4px',
          background: getTrackBackground({ values: value, colors: COLORS, min: minValue, max: maxValue }),
          alignSelf: 'center',
        }}
        className="status-track"
      >
        {children}
      </div>
    </div>
  );
  return (
    <Range
      ref={rangeRef}
      values={value}
      onChange={values => onChangeUnit(values)}
      renderThumb={Thumb}
      renderTrack={Track}
      step={step}
      min={minValue}
      max={maxValue}
    />
  );
};

export default RangeComponent;
