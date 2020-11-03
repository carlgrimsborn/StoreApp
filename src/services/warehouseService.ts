import axios from 'axios';

export const getWarehouses = async () => {
  await axios
    .get('http://localhost:2000/warehouses')
    .then((r) => console.log(r.data))
    .catch((e) => console.log(e));
};
