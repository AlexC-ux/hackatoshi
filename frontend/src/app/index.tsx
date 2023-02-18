import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.scss";

import { PageHintPage } from "page/page-hint";
import { TourPage } from "page/tour";



export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<PageHintPage />} />
        <Route path="/tour/:tourId" element={<TourPage />} />
      </Routes>
    </BrowserRouter>
  );
};
