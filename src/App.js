import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Scroll from "./components/Scroll";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Blog from "./components/Blog";

function App() {
  return (
    <div className=" min-h-screen py-10 px-3  sm:px-5 bg-gray-100 ">
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="project" element={<Project />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
