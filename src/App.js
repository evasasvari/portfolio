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
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/home" element={< HomePage/>} />
          <Route path="/genbrun" element={< GenBrun/>} />
          <Route path="/little-trees" element={< LittleTrees/>} />
          <Route path="/about" element={< AboutPage/>} />
          </Routes>
          <Nav/>
        </main>
    );
}

export default App;


