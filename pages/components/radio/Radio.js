import React from 'react';

const Radio = ({
  register,
  errors,
  name,
  options,
  position = 'right',
  defaultValue,
  radioItemClass = '',
  handleChange = () => {},
}) => {
  return (
    <>
      {options &&
        options.length &&
        options.map((item, index) => (
          <div className={`radio-item ${radioItemClass}`} key={index}>
            <label htmlFor={`${name}${index}`}>
              {position && position === 'left' && <span htmlFor={`${name}${index}`}>{item.label}</span>}
              <input
                type="radio"
                id={`${name}${index}`}
                name={name}
                value={item.value}
                ref={register}
                defaultChecked={defaultValue === item.value}
                onChange={event => {
                  handleChange(event.target.value);
                }}
              />
              {position && position === 'right' && <span htmlFor={`${name}${index}`}>{item.label}</span>}
            </label>
          </div>
        ))}
      {errors && <div>{errors.message}</div>}
    </>
  );
};

export default Radio;
