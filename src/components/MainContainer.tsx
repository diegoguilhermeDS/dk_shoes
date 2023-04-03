import React, { useState } from "react";
import Header from "./Header";
import Modal from "./Modal";
import { iMainContainer } from "@/interfaces";
import { data } from "@/database";

const Main_Container = ({ children }: iMainContainer) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Header setOpenModal={setOpenModal} />
      <div>{children}</div>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </>
  );
};

export default Main_Container;
