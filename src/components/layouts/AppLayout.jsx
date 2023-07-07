// import React from 'react';

import { Route, Routes } from "react-router-dom";
import { path } from "../../constants/path";
import Home from "../../pages/home/Home";
import ScenesRepertoire from "../../pages/scenesRepertoire/scenesRepertoire";
import Artists from "../../pages/artists/Artists";
import About from "../../pages/about/About";
import Contacts from "../../pages/contacts/Contacts";
import Poster from "../../pages/poster/Poster";




const AppLayout = () => {
  return (
    <Routes>
      <Route path={path.HOME} element={<Home />} />
      <Route path={path.SCENES} element={<ScenesRepertoire />} />
      <Route path={path.ARTISTS} element={<Artists />} />
      <Route path={path.ABOUT} element={<About />} />
      <Route path={path.CONTACTS} element={<Contacts />} />
      <Route path={path.POSTER} element={<Poster />} />
    </Routes>
  )
}

export default AppLayout;
