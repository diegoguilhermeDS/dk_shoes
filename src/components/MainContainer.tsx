import React, { useState } from "react";
import Header from "./Header";
import Modal from "./Modal";
import { iMainContainer } from "@/interfaces";
import { data } from "@/database";
import { useProducts } from "@/providers/productContext";

const Main_Container = ({ children }: iMainContainer) => {
  
  const { openModal, setOpenModal } = useProducts()

  return (
    <>
      <Header setOpenModal={setOpenModal} />
      <div>{children}</div>
      {openModal && <Modal /> }
    </>
  );
};

export default Main_Container;
