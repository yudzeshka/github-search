import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/userpage" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
