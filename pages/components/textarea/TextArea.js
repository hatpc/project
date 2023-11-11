import React, { useState } from 'react';

const TextArea = ({
  register,
  name,
  label,
  required,
  errors,
  col = null,
  row = null,
  placeholder,
  id,
  defaultValue = '',
  htmlRender = false,
  class_name = 'form-control',
}) => {
  /*
  register : rule validate
  name : name properties
  errors : object message error
  col : cols properties textarea
  row : rows properties textarea
  placeholder : placeholder text
  id : id properties
  defaultValue : value properties
  htmlRender : check render value
  */
  const [textValue, setTextArea] = useState((!!defaultValue && defaultValue) || '');
  return (
    <>
      {!!label && (
        <label>
          {label}
          {!!required && <span className="link-red">*</span>}
        </label>
      )}
      {htmlRender ? (
        <textarea
          name={name}
          id={id}
          rows={row}
          cols={col}
          placeholder={placeholder}
          ref={register}
          className={`${class_name} ${(!!errors && 'input-valid') || ''}`}
          onChange={event => {
            setTextArea(event.target.value);
          }}
        >
          {textValue}
        </textarea>
      ) : (
        <textarea
          name={name}
          id={id}
          rows={row}
          cols={col}
          value={textValue}
          placeholder={placeholder}
          ref={register}
          className={`${class_name} ${(!!errors && 'input-valid') || ''}`}
          onChange={event => {
            setTextArea(event.target.value);
          }}
        ></textarea>
      )}

      {errors && (
        <span className="error">
          <small>{errors.message}</small>
        </span>
      )}
    </>
  );
};

export default TextArea;
