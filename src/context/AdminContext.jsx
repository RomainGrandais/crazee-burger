import { createContext } from "react";

export default createContext({
  isActive: false,
  setIsActive: () => {},
  isDown: true,
  setIsDown: () => {},
  isAddProduct: true,
  setAddProduct: () => {},
  isModifProduct: false,
  setModifProduct: () => {},
  isEmpty: false,
  setIsEmpty: () => {},
  productSelected: {},
  setProductSelected: () => {},
  titleEditBox: {},
  basketMenu: [],
  setBasketMenu: () => {},
});
