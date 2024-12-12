import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home.jsx";
//import { Login } from "../components/Login";
import { SignUp } from "../components/SignUp";
import { SKINMEDICA } from "../components1/SKINMEDICA";
import { Account } from "../components/Account";
import { Dermstore } from "../menu/Dermstore";
import ProductDetails from "../components/ProductDetails";
import { Cart } from "../components/Cart";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
     
      <Route path="/signup" element={<SignUp />} />

      <Route path="/account" element={<Account />} />
      <Route path="/Dermstore" element={<Dermstore />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
