import {Product, ProductStatus, ProductType, WarehouseName} from '../Types';

const initProducts: Product[] = [
  {
    id: 0,
    name: '',
    ownerId: '',
    period: {fromDate: '', toDate: ''},
    size: {height: 0, length: 0, width: 0},
    status: ProductStatus.ACTIVE,
    type: ProductType.Furniture,
    warehouse: WarehouseName.Solstice_Enterprises,
  },
];

const ProductReducer = (products = initProducts, action: any) => {
  if (action.type === 'SET_PRODUCTS') {
    const newProducts = action.products;
    return {
      ...products,
      ...newProducts,
    };
  }
  if (action.type === 'CLEAN_PRODUCTS') {
    return {
      ...products,
      initProducts,
    };
  }

  return products;
};

export default ProductReducer;
