import * as yup from 'yup';

const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";


 export const schema = yup.object().shape({
    email: yup
    .string()
    .email('Geçerli bir mail formatı giriniz')
    .required('Zorunlu alan'),

    age: yup
    .number()
    .min(18, "Yaşınız 18'den küçük olamaz")
    .max(100, "Yaşınız 100' den büyük olamaz")
    .integer('Yaşınız tam sayı olmalı')
    .required('Zorunlu alan'),

    password: yup
    .string()
    .min(5, "Şifre minimum 5 karakterden oluşmalıdır.")
    .matches(regex, "Şifreniz yeterince güçlü değil")
    .required("Zorunlu Alan"),
  confirm_password: yup
    .string()
    .oneOf(
     
      [yup.ref("password")],
      "Şifre Eşleşmiyor"
    )
    .required("Zorunlu Alan"),

 });