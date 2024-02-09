import React from "react";
import { Formik, useFormik } from "formik";
import { basicSchema } from "../schemass";
import { Link } from "react-router-dom";

function GeneralForm() {
  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
  };
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
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
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="inputDiv">
        <label>Yaşınızı Girin</label>
        <input
          type="number"
          value={values.age}
          onChange={handleChange}
          id="age"
          placeholder="Yaşınızı Girin"
          className={errors.age ? "input-error" : ""}
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>

      <div className="inputDiv">
        <label>Şifre</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          id="password"
          placeholder="Şifrenizi Girin"
          className={errors.password ? "input-error" : ""}
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
          className={errors.confirmPassword ? "input-error" : ""}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </div>
      <button disabled={isSubmitting} type="submit">
        Kaydet
      </button>
      <Link className="formLink" to={"/portal"}>
        Portala git
      </Link>
    </form>
  );
}

export default GeneralForm;
