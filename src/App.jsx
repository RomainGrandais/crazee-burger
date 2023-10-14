import { useState } from "react";
import LoginPage from "./components/pages/login/LoginPage";
import { Route, Routes } from "react-router-dom";
import OrderPage from "./components/pages/Order/OrderPage";
import NotFoundPage from "./components/pages/Error/NotFoundPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="/order/:id" Component={OrderPage} />
        <Route path="/*" Component={NotFoundPage} />
      </Routes>
    </div>
  );
}

export default App;
