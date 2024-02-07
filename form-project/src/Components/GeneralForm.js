import React from "react";
import { Formik, useFormik } from "formik";
import { basicSchema } from "../schemass";

function GeneralForm() {
  const onSubmit = () => {};
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label>Mail Adresinizi Girin</label>
        <input
          type="mail"
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="Mailinizi Girin"
        />
      </div>

      <div className="inputDiv">
        <label>Yaşınızı Girin</label>
        <input
          type="number"
          value={values.age}
          onChange={handleChange}
          id="age"
          placeholder="Yaşınızı Girin"
        />
      </div>

      <div className="inputDiv">
        <label>Şifre</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          id="password"
          placeholder="Şifrenizi Girin"
        />
      </div>

      <div className="inputDiv">
        <label>Şifre Tekrar</label>

        <input
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          id="confirmPassword"
          placeholder="Şifreyi Tekrar Girin"
        />
      </div>
      <button type="submit">Kaydet</button>
    </form>
  );
}

export default GeneralForm;
