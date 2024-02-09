import React from "react";

import CustomInput from "./CustomInput";
import { Form, Formik } from "formik";
import { advancedSchema } from "../schemass";
import CustomSelect from "./CustomSelect";
import CustomCheckBox from "./CustomCheckBox";
import { Link } from "react-router-dom";

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
        {({ isSubmitting }) => (
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
            <CustomCheckBox type="checkbox" name="isAccepted" />
            <button disabled={isSubmitting} type="submit">
              Kaydet
            </button>
            <Link className="formLink" to={"/"}>
              Ana Forma git
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
