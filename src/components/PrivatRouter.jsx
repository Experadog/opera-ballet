
// import React from 'react';

import { Route, Routes } from "react-router-dom";
import { path } from "../constants/path";
import { Footer } from "./shared/footer/Footer";
import AppLayout from "./layouts/AppLayout";

const PrivatRouter = () => {
  return (
    <>
      <Routes>
        <Route path={path.MAINPATH} element={<AppLayout />} />
      </Routes>
      <Footer />
    </>

  )
}

export default PrivatRouter;
