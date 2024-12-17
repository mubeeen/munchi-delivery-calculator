import React from 'react';

interface CustomInputProps {
  id: string;
  label: string;
  type?: 'text' | 'number' | 'date' | 'datetime-local';
  placeholder?: string;
  step?: string;
  min?: number;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addonText?: string; 
}

const CustomInput: React.FC<CustomInputProps> = ({
  id,
  label,
  type = 'text',
  placeholder,
  step,
  min,
  value,
  onChange,
  addonText,
}) => {
  return (
    <div className="row mb-3">
      <label htmlFor={id} className="col-2 form-label">
        {label}
      </label>
      <div className="col input-group">
        <input
          id={id}
          type={type}
          className="form-control"
          placeholder={placeholder}
          step={step}
          min={min}
          value={value}
          onChange={onChange}
        />
        { addonText && <span className="input-group-text">{addonText}</span> }
      </div>
    </div>
  );
};

export default CustomInput;
