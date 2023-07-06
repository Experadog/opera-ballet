// import React from 'react';

import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import { path } from "../../constants/path";
import ScenesRepertoire from "../../pages/scenesRepertoire/scenesRepertoire";
import Artists from "../../pages/artists/Artists";
import About from "../../pages/about/About";




const AppLayout = () => {
  return (
    <Routes>
      <Route path={path.HOME} element={<Home />} />
      <Route path={path.SCENES} element={<ScenesRepertoire />} />
      <Route path={path.ARTISTS} element={<Artists />} />
      <Route path={path.ABOUT} element={<About />} />
    </Routes>
  )
}

export default AppLayout;
