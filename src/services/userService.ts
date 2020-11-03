import axios from 'axios';
import {User} from '../types';

export const getUsers = () => {
  let data;
  axios
    .get('http://localhost:2000/users')
    .then((r) => {
      data = r.data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
  return data;
};

export const editUser = (user: User) => {
  let data;
  axios
    .put('http://localhost:2000/user', user)
    .then((r) => {
      data = r.data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
  return data;
};

export const deleteUser = (id: string) => {
  let data;
  axios
    .delete('http://localhost:2000/user', {params: {id: id}})
    .then((r) => {
      data = r.data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
  return data;
};

export const login = async (email: string, password: string) => {
  let data;
  await axios
    .post(
      'http://localhost:2000/login',
      {},
      {
        params: {
          email: email,
          password: password,
        },
      },
    )
    .then((resp) => {
      console.log(resp.data);
      data = resp.data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
  return data;
};

export const register = async (user: User) => {
  let data;
  await axios
    .post('http://localhost:2000/register', user)
    .then((r) => {
      data = r.data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
  return data;
};

export const loginDev = async (email: string, password: string) => {
  let data;
  await axios
    .post(
      'http://localhost:2000/login/dev',
      {},
      {
        params: {
          email: email,
          password: password,
        },
      },
    )
    .then((resp) => {
      console.log(resp.data);
      data = resp.data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
  return data;
};
