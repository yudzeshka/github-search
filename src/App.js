import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ReposPage from "./pages/ReposPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div className="bg-slate-100 w-screen h-screen text-center text-slate-500">
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/:id" element={<ReposPage />} />
        <Route path="/users/:userId" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
