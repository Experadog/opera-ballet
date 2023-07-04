
// import React from 'react';

import { Route, Routes } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import { path } from "../constants/path";
import { Header } from "./shared/header/Header";

const PrivatRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={path.MAINPATH} element={<AppLayout />} />
      </Routes>
    </>
  )
}

export default PrivatRouter;
