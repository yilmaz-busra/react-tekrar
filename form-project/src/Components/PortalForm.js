import React from "react";
import { Form, Formik, Field } from "react-router-dom";

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
      >
        {() => <Form></Form>}
      </Formik>
    </>
  );
}

export default PortalForm;
