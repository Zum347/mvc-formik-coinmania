import { useFormik } from "formik";
import React from "react";
import { schema } from "../schema";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: async (values, actions) => {
      console.log("values", values);
      await new Promise((resolve) => setTimeout(resolve, 1900));
      localStorage.setItem("user", JSON.stringify({ ...values, id: v4() }));
      navigate("/home");

      actions.resetForm();
    },

    validationSchema: schema,
  });
  console.log(formik.isSubmitting);
  return (
    <div>
      <div className="container">
        <div className="logo">
          <img src="/public/c-logo.png" alt="logo" />
          <h2>Coinmania</h2>
        </div>
     
        <form onSubmit={formik.handleSubmit}>
          {inputs.map((data, key) => (
            <InputField formik={formik} data={data} key={key} />
          ))}
          <button type="submit" disabled={formik.isSubmitting}>
            Kaydol
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

const inputs = [
  {
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    label: "Yaş",
    name: "age",
    type: "number",
  },
  {
    label: "Şifre",
    name: "password",
    type: "password",
  },
  {
    label: "Şifre Onay",
    name: "confirm_password",
    type: "password",
  },
];

const InputField = ({ formik, data }) => {
  const { label, name, type } = data;
  return (
    <div>
      <label>{label}</label>
      <input
        value={formik.values[name]}
        type={type}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
  
      {formik.touched[name] && formik.errors[name] && (
        <span>{formik.errors[name]}</span>
      )}
    </div>
  );
};
