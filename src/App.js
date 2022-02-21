import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ReposPage from "./pages/ReposPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/:id" element={<ReposPage />} />
        <Route path="/users/:userId" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
