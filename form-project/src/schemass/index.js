import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli email girin")
    .required("Email Girmek Zorunlu"),
  age: yup
    .number()
    .positive("Lütfen pozitif bir yaş girin")
    .integer("Lütfen yaşınızı tam sayı olarak girin")
    .required("Yaş belirtmek zorunlu"),
  password: yup
    .string()
    .min(5, "Lütfen en az 5 karakter girin")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf, 1 küçük harf ve 1 sayı girin",
    })
    .required("Şifre girmek zorunlu"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
    .required("Tekrar şifreyi girin"),
});
