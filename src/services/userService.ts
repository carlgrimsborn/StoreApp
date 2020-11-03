import axios from 'axios';
import {User} from '../types';

export const getUsers = () => {
  axios
    .get('http://localhost:2000/users')
    .then((r) => {
      return r.data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
};

export const editUser = (user: User) => {
  axios
    .put('http://localhost:2000/user', user)
    .then((r) => {
      return r.data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
};

export const deleteUser = (id: string) => {
  axios
    .delete('http://localhost:2000/user', {params: {id: id}})
    .then((r) => {
      return r.data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
};

export const login = async (email: string, password: string) => {
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
      return resp.data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
};

export const register = async (user: User) => {
  await axios
    .post('http://localhost:2000/register', user)
    .then((r) => {
      return r.data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
};

export const loginDev = async (email: string, password: string) => {
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
      return resp.data;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
};
