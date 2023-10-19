import React, { useState } from "react";
import styled from "styled-components";
import Profil from "./Profil";
import ToggleButton from "./ToggleButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastAdmin from "./ToastAdmin";

export default function NavBarRightSide({ username }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    if (!isChecked) {
      // Vérifiez si isChecked est actuellement false
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsChecked((prevState) => !prevState); // Utilisez une fonction pour mettre à jour l'état
  };

  return (
    <NavBarRightSideStyled>
      <ToggleButton onToggle={handleToggle} isChecked={isChecked} />
      <Profil username={username} />
      <ToastAdmin />
    </NavBarRightSideStyled>
  );
}

const NavBarRightSideStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
`;
