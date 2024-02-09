import React from "react";
import {} from "react-router-dom";
import CustomInput from "./CustomInput";
import { Form, Formik } from "formik";
import { advancedSchema } from "../schemass";

function PortalForm() {
  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{
          userName: "",
          university: "red",
          isAccepted: false,
        }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {() => (
          <Form>
            <CustomInput
              label="Kullanıcı Adı"
              name="userName"
              type="text"
              placeholder="Kullanici Adinizi Girin"
            />
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
