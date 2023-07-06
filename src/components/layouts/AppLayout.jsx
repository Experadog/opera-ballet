// import React from 'react';

import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import { path } from "../../constants/path";
import ScenesRepertoire from "../../pages/scenesRepertoire/scenesRepertoire";




const AppLayout = () => {
  return (
    <Routes>
      <Route path={path.HOME} element={<Home />} />
      <Route path={path.SCENES} element={<ScenesRepertoire />} />
    </Routes>
  )
}

export default AppLayout;
