import styled from "styled-components";
import { theme } from "../../../../../../theme";
import TextInput from "../../../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import { MdOutlineEuroSymbol } from "react-icons/md";
import { useContext } from "react";
import AddProductContext from "../../../../../../context/AddProductContext";
import ToastAdmin from "../../../../../reusable-ui/ToastAdmin";
import { toast } from "react-toastify";

export default function AddProductForm() {
  const info = useContext(AddProductContext);

  const handleChangeImage = (event) => {
    info.setImage(event.target.value);
  };

  const handleChangeTitle = (event) => {
    info.setTitle(event.target.value);
  };

  const handleChangePrice = (event) => {
    info.setPrice(event.target.value);
  };

  const handleError = (event) => {
    event.target.style.display = "none";
  };

  const handleClick = (event) => {
    event.preventDefault();
    const menuCopy = [...info.menu];

    menuCopy.push({
      id: new Date().valueOf(),
      imageSource: info.image,
      title: info.title,
      price: info.price,
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    });
    info.setMenu(menuCopy);
    info.setImage("");
    info.setPrice("");
    info.setTitle("");
    toast.info("Ajouté avec succès !", {
      theme: "dark",
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <AddProductFormStyled action="submit">
      <div className="image-input">
        <label>
          {!info.image ? (
            "Aucune image"
          ) : (
            <img src={info.image} alt="" onError={handleError} />
          )}
        </label>
      </div>
      <div className="text-input">
        <TextInput
          value={info.title}
          handleChange={handleChangeTitle}
          Icon={<FaHamburger />}
          placeholder={"Nom du produit (ex: Super Burger)"}
        />
        <TextInput
          value={info.image}
          handleChange={handleChangeImage}
          Icon={<BsFillCameraFill />}
          placeholder={
            "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          }
        />
        <TextInput
          value={info.price}
          handleChange={handleChangePrice}
          Icon={<MdOutlineEuroSymbol />}
          placeholder={"Prix"}
        />
        <div className="submit" onClick={handleClick}>
          <PrimaryButton
            label={"Ajouter un nouveau produit au menu"}
            height={"2px"}
            color={theme.colors.success}
          />
        </div>
        <ToastAdmin />
      </div>
    </AddProductFormStyled>
  );
}

const AddProductFormStyled = styled.form`
  margin: 30px 0px 0px 70px;
  width: 80%;
  height: 65%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  gap: 8px;

  .image-input {
    border: 1px solid ${theme.colors.greyLight};
    color: ${theme.colors.greySemiDark};
    border-radius: 5px;
    width: 215px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100px;
      height: 100px;
    }
  }
  .text-input {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;
