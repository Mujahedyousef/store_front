import React from "react";
import { useState } from 'react';
import Categories from "./Categories";
import Products from "./Products";
import Tab from "./Nav";
import Cart from "./Cart";
export default function Main() {
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(true);
  const handleChangeShow = () => {
    setShow(!show);
    setHidden(!hidden);
  };
  return (
    <div>
      <Cart />
      <Tab hidden={hidden} show={show} handleChangeShow={handleChangeShow} />
      <Categories   show={show} handleChangeShow={handleChangeShow} />
      <Products />
    </div>
  );
}
