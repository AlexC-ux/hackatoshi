import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.scss";

import { PageHintPage } from "page/page-hint";
import { TourPage } from "page/tour";
import { ChatPage } from "page/chat";
import { ChatButtonPage } from "page/chat-button";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<PageHintPage />} />
        <Route index path="/chat" element={<ChatPage />} />
        <Route index path="/chat-button" element={<ChatButtonPage />} />
        <Route path="/tour/:tourId" element={<TourPage />} />
      </Routes>
    </BrowserRouter>
  );
};
