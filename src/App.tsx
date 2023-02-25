import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full h-screen bg-black text-white">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
