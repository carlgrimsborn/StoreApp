import {Dev, ProductType, User, Warehouse, WarehouseName} from '../Types';

const initWarehouse: Warehouse = {
  name: WarehouseName.Hatchworks,
  items: [],
  productSizeRange: {
    fromValue: 0,
    toValue: 0,
  },
  productTypes: [ProductType.Cardboard],
};

const WarehouseReducer = (
  warehouse: Warehouse = initWarehouse,
  action: any,
) => {
  if (action.type === 'SET_WAREHOUSE') {
    const newWarehouse = action.warehouse;
    return {
      ...initWarehouse,
      newWarehouse,
    };
  }
  if (action.type === 'CLEAN_WAREHOUSE') {
    return {
      ...warehouse,
      initWarehouse,
    };
  }
  return warehouse;
};

export default WarehouseReducer;
