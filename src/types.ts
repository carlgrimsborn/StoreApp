export interface User {
  id: number;
  surname: string;
  lastname: string;
  email: string;
  password: string;
  items: Product[];
}

export interface Dev {
  name: string;
  email: string;
  password: string;
}

export interface Product {
  id: number;
  name: string;
  ownerId: string;
  type: ProductType;
  size: ProductSize;
  period: ProductPeriod;
  warehouse: WarehouseName;
  status: ProductStatus;
}

export enum ProductType {
  Furniture = 'Furniture',
  Electronics = 'Electronics',
  Vehicle = 'Vehicle',
  Cardboard = 'Cardboard',
}

export interface ProductSize {
  length: number;
  width: number;
  height: number;
}

export enum ProductStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export interface ProductPeriod {
  fromDate: string;
  toDate: string;
}

export interface Warehouse {
  name: WarehouseName;
  items: Product[];
  productSizeRange: Range;
  productTypes: ProductType[];
}

export interface Range {
  fromValue: number;
  toValue: number;
}

export interface Authentication {
  authenticated: boolean;
  authType: AuthType;
}

export enum AuthType {
  USER,
  DEV,
}

export enum WarehouseName {
  Hatchworks = 'Hatchworks',
  Solstice_Enterprises = 'Solstice Enterprises',
  Odin_Networks = 'Odin Networks',
  Phantomedia = 'Phantomedia',
  Sphinxecurity = 'Sphinxecurity',
}

export interface ReduxState {
  AllUsersReducer: User[];
  DevReducer: Dev;
  ProductReducer: Product[];
  UserReducer: User;
  WarehouseReducer: Warehouse[];
  AuthReducer: Authentication;
}
