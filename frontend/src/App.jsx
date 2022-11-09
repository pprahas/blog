import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ViewBlogs from "./pages/ViewBlogs";
import Socials from "./pages/Socials";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    (async function () {
      const data = await fetch("http://localhost:9090/blog/");
      const jsonData = await data.json();
      console.log("here");
      console.log(jsonData);
    });
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewBlogs />}></Route>
        <Route path="/blogs" element={<ViewBlogs />}></Route>
        <Route path="/socials" element={<Socials />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
