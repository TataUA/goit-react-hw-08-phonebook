import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { registerUserThunk } from 'redux/auth/authThunk';
import {
  FormContainer,
  Label,
  Input,
  ErrorValue,
  Button,
} from 'components/RegisterForm/RegisterForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .matches(
      /^[a-zA-Z][a-zA-Z0-9-_.]{1,20}$/,
      'The name can only contain letters, numbers, underscores and dash'
    )
    .required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(7)
    .matches(
      /(?=[#$-/:-?{-~!"^_`[\]a-zA-Z]*([0-9#$-/:-?{-~!"^_`[\]]))(?=[#$-/:-?{-~!"^_`[\]a-zA-Z0-9]*[a-zA-Z])[#$-/:-?{-~!"^_`[\]a-zA-Z0-9]{7,20}/,
      'Password can only contain letters, numbers and characters'
    )
    .required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(registerUserThunk({ name, email, password }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormContainer autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Rosie Simpson"
          />
          <ErrorMessage name="name" component={ErrorValue} />
        </Label>
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
            placeholder="
            Must be at least 7 characters"
          />
          <ErrorMessage name="password" component={ErrorValue} />
        </Label>
        <Button type="submit">Create</Button>
      </FormContainer>
    </Formik>
  );
};
