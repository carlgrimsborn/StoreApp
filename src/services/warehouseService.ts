import axios from 'axios';

export const getWarehouses = async () => {
  let data;
  await axios
    .get('http://localhost:2000/warehouses')
    .then((r) => (data = r.data))
    .catch((e) => console.log(e));
  return data;
};
