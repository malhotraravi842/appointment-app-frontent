import { Field, ErrorMessage } from "formik";

const TextInput = ({ label, type, name, placeholder, error }) => {
  return (
    <div className="form__input">
      <label>{label || ""}</label>
      <Field
        type={type || "text"}
        name={name}
        placeholder={placeholder || ""}
        className={error ? "error" : ""}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="form__input__errormsg"
      />
    </div>
  );
};

export default TextInput;
