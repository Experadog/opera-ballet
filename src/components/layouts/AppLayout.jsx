// import React from 'react';

import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import { path } from "../../constants/path";




const AppLayout = () => {
  return (
    <Routes>
      <Route path={path.HOME} element={<Home />} />
    </Routes>
  )
}

export default AppLayout;
