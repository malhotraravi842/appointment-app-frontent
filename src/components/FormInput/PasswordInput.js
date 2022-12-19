import { Field } from "formik";

const PasswordInput = ({ label, name, placeholder }) => {
  return (
    <div className="form__input">
      <label>{label}</label>
      <Field type="password" name={name} placeholder={placeholder || ""} />
    </div>
  );
};

export default PasswordInput;
