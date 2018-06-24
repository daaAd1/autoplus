import React from 'react';
import { DateRangePicker } from 'react-dates';

const TimePicker = (props) => {
  const { startDate, endDate, focusedInput } = props;
  return (
    <DateRangePicker
      displayFormat="DD MMM YYYY"
      startDate={startDate} // momentPropTypes.momentObj or null,
      startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
      endDate={endDate} // momentPropTypes.momentObj or null,
      endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
      onDatesChange={props.onDatesChange} // PropTypes.func.isRequired,
      focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      onFocusChange={props.onFocusChange} // PropTypes.func.isRequired,
      showClearDates
      reopenPickerOnClearDates
    />
  );
};

export default TimePicker;
