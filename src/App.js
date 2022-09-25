import HomePage from "./pages/HomePage";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import {Navigate} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Nav from "./components/Nav";
import GenBrun from "./pages/GenBRUN";
import LittleTrees from "./pages/LittleTrees";



function App() {



    return (
        <main>
         
          <Routes>
          <Route path="*" element={<Navigate to="http://evasasvari.github.io/portfolio/home" />} />
          <Route path="http://evasasvari.github.io/portfolio/home" element={< HomePage/>} />
          <Route path="http://evasasvari.github.io/portfolio/genbrun" element={< GenBrun/>} />
          <Route path="http://evasasvari.github.io/portfolio/little-trees" element={< LittleTrees/>} />
          <Route path="http://evasasvari.github.io/portfolio/about" element={< AboutPage/>} />
          </Routes>
          <Nav/>
        </main>
    );
}

export default App;


