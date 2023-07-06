// import React from 'react';

import { Route, Routes } from "react-router-dom";
import { path } from "../../constants/path";
import Home from "../../pages/home/Home";
import ScenesRepertoire from "../../pages/scenesRepertoire/scenesRepertoire";
import Contacts from "../../pages/contacts/Contacts";




const AppLayout = () => {
  return (
    <Routes>
      <Route path={path.HOME} element={<Home />} />
      <Route path={path.SCENES} element={<ScenesRepertoire />} />
      <Route path={path.CONTACTS} element={<Contacts />} />
    </Routes>
  )
}

export default AppLayout;
