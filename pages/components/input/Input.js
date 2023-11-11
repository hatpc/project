import React from 'react';
import Image from 'next/image';

const Input = ({
  register,
  name,
  label,
  errors,
  placeholder,
  id,
  class_name = 'form-control',
  type = 'text',
  required,
  src,
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
        />
        {errors && (
          <span className="error">
            <small>{errors.message}</small>
          </span>
        )}
        <Image src={src} alt={`${src}-icon`} width={20} height={20}></Image>
      </div>
    </>
  );
};

export default Input;
