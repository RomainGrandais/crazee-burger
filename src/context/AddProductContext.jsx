import { createContext } from "react";

export default createContext({
  image: "",
  setImage: () => {},
  title: "",
  setTitle: () => {},
  price: "",
  setPrice: () => {},
  menu: [],
  setMenu: () => {},
  id: 1,
  setId: () => {},
  handleEdit: () => {},
});
