import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./page/Home";
import Product from "./page/Product";
import About from "./page/About";
import Contacts from "./page/Contacts";
import Favorite from "./page/Favorite";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
