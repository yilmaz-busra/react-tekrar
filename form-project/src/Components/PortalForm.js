import React from "react";

import CustomInput from "./CustomInput";
import { Form, Formik } from "formik";
import { advancedSchema } from "../schemass";
import CustomSelect from "./CustomSelect";

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
            <CustomSelect
              label="Okulunuz"
              name="university"
              placeholder="Kullanici Okuduğunuz Üniversiteyi Seçiniz"
            >
              <option value="">Lütfen Üniversitenizi Seçin</option>
              <option value="bogazici">Boğaziçi Üniversitesi</option>
              <option value="gsu">Galatasaray Üniversitesi</option>
              <option value="itü">İstanbul Teknik Üniversitesi</option>
              <option value="ytü">Yıldız Teknik Üniversitesi</option>
              <option value="odtü">ODTÜ</option>
            </CustomSelect>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
