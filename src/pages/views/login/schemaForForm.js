import * as Yup from 'yup';

const BasicFormSchema = Yup.object().shape({
  email: Yup.string()
    //Проверяем, корректный ли адрес.
    //Если нет, то выводится сообщение в скобках
    .email('Invalid email address')
    //не сабмитим, если поле не заполнено
    .required('Please Enter your Email'),
  //   username: Yup.string()
  //     //минимальная длина - 2 символа
  //     .min(2, "Must be longer than 2 characters")
  //     //максимальная длина - 20 символов
  //     .max(20, "Nice try, nobody has a first name that long")
  //     .required("Required"),
  password: Yup.string()
    .min(6, 'Must be longer than 6 characters')
    .max(12, 'Must less than 12 characters')
    .required('Please Enter your Password'),
});
export default BasicFormSchema;
