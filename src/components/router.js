import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./home";
import GraphicDesign from "./graphicDesign";
import VideoEditing from "./videoEditing";
import Footer from "./footer";
function RouterConfig() {
    return (
      <Router>
            <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/graphicDesign" element={<GraphicDesign/>}></Route>
            <Route exact path="/videoEditing" element={<VideoEditing/>}></Route>
            </Routes>
        <Footer/>
      </Router>
    );
  }
  
  export default RouterConfig;