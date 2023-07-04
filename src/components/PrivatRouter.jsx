// import React from 'react';

import { Route, Routes } from "react-router-dom";
import { path } from "../constants/path";
import { Footer } from "./shared/footer/Footer";
import AppLayout from "./layouts/AppLayout";
import { Header } from "./shared/header/Header";

const PrivatRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={path.MAINPATH} element={<AppLayout />} />
      </Routes>
      <Footer />
    </>
  )
}

export default PrivatRouter;
