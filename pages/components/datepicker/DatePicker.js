import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
// import format from 'date-fns/format';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.min.css';

const InputDate = ({
  register,
  name,
  label,
  errors,
  class_name = 'form-control',
  required,
  dateFormat = 'MM/dd/yyyy',
  onChange = () => {},
  formName = '',
}) => {
  const [startDate, setStartDate] = useState(moment().toDate());
  return (
    <>
      <div className="form-input-group contact-detail">
        {!!label && (
          <label>
            {label}
            {!!required && <span className="link-red"> *</span>}
          </label>
        )}

        <DatePicker
          className={`${class_name} ${(!!errors && 'input-valid') || ''}`}
          selected={startDate}
          dateFormat={dateFormat}
          minDate={new Date('1/1/1000')}
          maxDate={new Date('12/31/9999')}
          onChange={value => {
            if (value) {
              setStartDate(value);
              onChange(formName, value);
            } else {
              setStartDate(startDate);
              onChange(formName, startDate);
            }
          }}
          ref={register}
          name={name}
        />
      </div>
    </>
  );
};

export default InputDate;
