import { Field } from "formik";

const TextInput = ({ label, type, name, placeholder }) => {
  return (
    <div className="form__input">
      <label>{label || ""}</label>
      <Field
        type={type || "text"}
        name={name}
        placeholder={placeholder || ""}
      />
    </div>
  );
};

export default TextInput;
