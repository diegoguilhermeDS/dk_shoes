import React, { useState } from 'react'
import Header from './Header'
import Modal from './Modal'

interface iMainContainer {
    children: React.ReactNode
}

const MainContainer = ({children}: iMainContainer) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
        <Header setOpenModal={setOpenModal}/>
        <div>{children}</div>
        {openModal && <Modal setOpenModal={setOpenModal}/>}
    </>
  )
}

export default MainContainer