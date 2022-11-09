import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ViewBlogs from "./pages/ViewBlogs";
import Socials from "./pages/Socials";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState(null);

  // useEffect(() => {
  //   axios("http://localhost:9090/blog/")
  //     .then((response) => {
  //       // console.log(response.data);
  //       setPosts(response.data);
  //       console.log(posts);
  //     })
  //     .catch((error) => {
  //       // console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    (async function () {
      const resp = await fetch("http://localhost:9090/blog/");
      const json = await resp.json();
      setPosts(json);
      // console.log(json);
    })();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewBlogs data={posts} />}></Route>
        <Route path="/blogs" element={<ViewBlogs data={posts} />}></Route>
        <Route path="/socials" element={<Socials />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
