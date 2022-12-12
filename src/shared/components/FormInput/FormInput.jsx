import { useMemo, memo } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const FormInput = ({
  children,
  label,
  type,
  name,
  value,
  required,
  autocomplete,
  min,
  max,
  step,
  onChange,
  onBlur,
  placeholder,
  generalStyle,
  labelStyle,
  inputStyle,
}) => {
  const inputId = useMemo(() => nanoid(2), []);
  return (
    <div className={generalStyle} style={{ position: "relative" }}>
      {label ? (
        <label className={labelStyle} htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <input
        className={inputStyle}
        id={inputId}
        type={type}
        name={name}
        value={value}
        required={required}
        autoComplete={autocomplete}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {children}
    </div>
  );
};

FormInput.defaultProps = {
  label: "",
  type: "text",
  required: true,
  autocomplete: "off",
  step: 1,
  onChange: () => {},
  onBlur: () => {},
  placeholder: "",
};

FormInput.propTypes = {
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  type: PropTypes.string,
  required: PropTypes.bool,
  autocomplete: PropTypes.oneOf(["on", "off"]),
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  generalStyle: PropTypes.string,
  labelStyle: PropTypes.string,
  inputStyle: PropTypes.string,
};
export default memo(FormInput);
