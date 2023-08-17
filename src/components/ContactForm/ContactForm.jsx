import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { addContactThunk } from 'redux/contacts/contactsThunk';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import {
  FormContainer,
  Title,
  Label,
  Input,
  ErrorValue,
  Button,
} from 'components/RegisterForm/RegisterForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .min(7)
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const isExist = contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContactThunk({ name, number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormContainer autoComplete="off">
      <Title>New contact</Title>
        <Label htmlFor="">
          Name
          <Input type="text" name="name" placeholder="Rosie Simpson" />
          <ErrorMessage name="name" component={ErrorValue} />
        </Label>
        <Label htmlFor="">
          Number
          <Input type="tel" name="number" placeholder="000-000-0000" />
          <ErrorMessage name="number" component={ErrorValue} />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormContainer>
    </Formik>
  );
};
