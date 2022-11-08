import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ViewBlogs from "./pages/ViewBlogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewBlogs />}></Route>
        <Route path="/blogs" element={<ViewBlogs />}></Route>
        <Route path="/socials" element={<ViewBlogs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
