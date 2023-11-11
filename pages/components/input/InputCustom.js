import React from 'react';

const InputCustom = ({
  register,
  name,
  label,
  errors,
  placeholder,
  id,
  class_name = 'form-control',
  type = 'text',
  defaultValue,
  required,
  onChange = () => {},
}) => {
  return (
    <>
      <div className="form-input-group">
        {!!label && (
          <label>
            {label}
            {!!required && <span className="link-red">*</span>}
          </label>
        )}
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          name={name}
          ref={register}
          className={`${class_name} ${(!!errors && 'input-valid') || ''}`}
          value={defaultValue || ''}
          onChange={e => onChange(e.target.value)}
        />
        {errors && (
          <span className="error">
            <small>{errors.message}</small>
          </span>
        )}
      </div>
    </>
  );
};

export default InputCustom;
