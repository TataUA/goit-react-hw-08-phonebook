import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { loginUserThunk } from 'redux/auth/authThunk';
import {
  FormContainer,
  Label,
  Input,
  ErrorValue,
  Button,
} from 'components/RegisterForm/RegisterForm.styled';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(7)
    .matches(
      /(?=[#$-/:-?{-~!"^_`\[\]a-zA-Z]*([0-9#$-/:-?{-~!"^_`\[\]]))(?=[#$-/:-?{-~!"^_`\[\]a-zA-Z0-9]*[a-zA-Z])[#$-/:-?{-~!"^_`\[\]a-zA-Z0-9]{7,20}/,
      'Password can only contain letters, numbers and characters'
    )
    .required(),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(loginUserThunk({ email, password }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormContainer autoComplete="off">
        <Label htmlFor="email">
          Email
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="rosiesimpson@gmail.com"
          />
          <ErrorMessage name="email" component={ErrorValue} />
        </Label>
        <Label htmlFor="password">
          Password
          <Input
            autoComplete="off"
            id="password"
            type="password"
            name="password"
            placeholder="*******"
          />
          <ErrorMessage name="password" component={ErrorValue} />
        </Label>
        <Button type="submit">Log In</Button>
      </FormContainer>
    </Formik>
  );
};
