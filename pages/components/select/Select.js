import React from 'react';

const Select = ({ register, id, defaultValue, isAll, name, options, errors, class_name, onChange, src = () => {} }) => {
  return (
    <>
      <div className="form-input-group">
        <select
          onChange={e => {
            onChange(e.target.value);
          }}
          id={id}
          value={defaultValue}
          name={name}
          ref={register}
          className={`${class_name} ${(!!errors && 'input-valid') || ''}`}
        >
          {isAll ? <option value={isAll.value}>{isAll.label}</option> : ''}
          {options && options.length
            ? options.map((item, index) => (
                <option value={item.value} key={index}>
                  {item.label}
                </option>
              ))
            : ''}
        </select>
        {errors && (
          <span className="error pos-left">
            <small>{errors.message}</small>
          </span>
        )}
        <img src={src} alt="icon"></img>
      </div>
    </>
  );
};

export default Select;
