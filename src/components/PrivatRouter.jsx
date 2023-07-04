
// import React from 'react';

import { Route, Routes } from "react-router-dom";
import { path } from "../constants/path";
import AppLayout from "./layouts/AppLayout";

const PrivatRouter = () => {
  return (
    <Routes>
      <Route path={path.MAINPATH} element={<AppLayout />} />
    </Routes>
  )
}

export default PrivatRouter;
