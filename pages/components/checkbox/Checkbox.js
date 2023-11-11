import React from 'react';

const Checkbox = ({
  register,
  name,
  label,
  errors,
  position = 'right',
  id,
  class_name = 'form-control',
  value,
  defaultValue = [],
  checkItemClass,
  formName = '',
  onChangeFormData = () => {},
}) => {
  return (
    <>
      <div className={`flag-dropdown checkbox-item ${checkItemClass}`} key={id}>
        <label className="flag-dropdown" htmlFor={`${id}`}>
          {position && position === 'left' && label && (
            <span className="flag-dropdown" htmlFor={`${name}`}>
              {label}
            </span>
          )}
          <input
            type="checkbox"
            id={id}
            name={name}
            ref={register}
            className={`${class_name} ${(!!errors && 'input-valid') || ''}`}
            value={value}
            defaultChecked={defaultValue.includes(value) ? 'checked' : ''}
            onChange={event => {
              onChangeFormData(formName, event.target.value);
            }}
          />
          {position && position === 'right' && label && <span className="flag-dropdown" htmlFor={`${id}`}></span>}
          <span
            className="checkbox-label flag-dropdown"
            title={label}
            dangerouslySetInnerHTML={{ __html: label || '' }}
          ></span>
        </label>
        {errors && (
          <span className="error">
            <small>{errors.message}</small>
          </span>
        )}
      </div>
    </>
  );
};
export default Checkbox;
