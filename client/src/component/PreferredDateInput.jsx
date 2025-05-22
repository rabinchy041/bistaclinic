import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PreferredDateInput = ({ value, onChange }) => {
  return (
    <div className="mb-3">
      <label className="form-label">Preferred Date</label>
      <DatePicker
        selected={value}
        onChange={onChange}
        dateFormat="yyyy-MM-dd"
        minDate={new Date()}
        className="form-control"
        placeholderText="Select a date"
      />
    </div>
  );
};

export default PreferredDateInput;
