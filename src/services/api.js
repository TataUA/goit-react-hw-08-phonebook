import axios from 'axios';

const $instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

//Token
export const setToken = token => {
  $instance.defaults.headers['Authorization'] = `Bearer ${token}`;
};

export const clearToken = () => {
  $instance.defaults.headers['Authorization'] = '';
};

//User
export const registerUser = async (name, email, password) => {
  const { data } = await $instance.post('/users/signup', {
    name,
    email,
    password,
  });
  return data;
};

export const loginUser = async (email, password) => {
  const { data } = await $instance.post('/users/login', { email, password });
  return data;
};

export const currentUser = async () => {
  const { data } = await $instance.get('/users/current');
  return data;
};

export const logoutUser = async () => {
  const { data } = await $instance.post('/users/logout');
  return data;
};

//Contacts
export const fetchContacts = async () => {
  const { data } = await $instance.get('/contacts');
  return data;
};

export const addContact = async (name, number) => {
  const { data } = await $instance.post('/contacts', { name, number });
  return data;
};

export const updateContact = async (id, name, number) => {
  const { data } = await $instance.patch(`/contacts/${id}`, { name, number });
  return data;
};

export const deleteContact = async contactId => {
  const { data } = await $instance.delete(`/contacts/${contactId}`);
  return data;
};
