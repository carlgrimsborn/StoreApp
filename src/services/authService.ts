import axios from 'axios';
export const login = async (email: string, password: string) => {
  await axios
    .post(
      'http://localhost:2000/login',
      {},
      {
        headers: {
          email: email,
          password: password,
        },
      },
    )
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => console.log(err))
    .finally(() => console.log('f'));
};

export const getWerehouses = async () => {
  await axios
    .get('http://localhost:2000/products')
    .then((r) => console.log(r))
    .catch((e) => console.log(e));
};
