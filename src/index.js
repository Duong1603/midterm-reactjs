import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ADMIN from "./DK/ADMIN";
import Home from "./DK/Home";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ADMIN />} />
      <Route path="*" element={<ADMIN />} />
      <Route path="Homepage" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
