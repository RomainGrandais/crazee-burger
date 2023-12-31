import { useState } from "react";
import LoginPage from "./components/pages/login/LoginPage";
import { Route, Routes } from "react-router-dom";
import OrderPage from "./components/pages/Order/OrderPage";
import NotFoundPage from "./components/pages/Error/ErrorPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="/order/:username" Component={OrderPage} />
        <Route path="/*" Component={NotFoundPage} />
      </Routes>
    </div>
  );
}

export default App;
