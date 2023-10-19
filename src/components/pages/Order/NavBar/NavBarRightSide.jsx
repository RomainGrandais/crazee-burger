import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Profil from "./Profil";
import ToggleButton from "./ToggleButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer className="toaster" bodyClassName="body-toast" />
    </NavBarRightSideStyled>
  );
}

const NavBarRightSideStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
