import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import { GlobalContextProvider } from "./context/GlobalContext.jsx";
import Cv from "./pages/Cv.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<Cv />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  </StrictMode>
);
