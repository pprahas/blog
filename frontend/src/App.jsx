import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ViewBlogs from "./pages/ViewBlogs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <h1 className="text-xl font-bold underline">Hello world!</h1> */}
      <ViewBlogs />
    </div>
  );
}

export default App;
