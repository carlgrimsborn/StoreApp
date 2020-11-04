import {ProductType, Warehouse, WarehouseName} from '../Types';

const initWarehouses: Warehouse[] = [
  {
    name: WarehouseName.Hatchworks,
    items: [],
    productSizeRange: {
      fromValue: 0,
      toValue: 0,
    },
    productTypes: [ProductType.Cardboard],
  },
];

const WarehouseReducer = (
  warehouses: Warehouse[] = initWarehouses,
  action: any,
) => {
  if (action.type === 'SET_WAREHOUSES') {
    const newWarehouses = action.warehouses;
    return [...newWarehouses];
  }
  if (action.type === 'CLEAN_WAREHOUSES') {
    return [...initWarehouses];
  }
  return warehouses;
};

export default WarehouseReducer;
