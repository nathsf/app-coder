import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,

} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./home";
import Page from "./page";
import About from "./about";

export default function ItemListContainer() {
  return (
    <>
    <Router>
        <NavBar></NavBar>
    <Routes>
                <Route exact path="/" element={<Home/>} >
                </Route>
                <Route path="/page" element={<Page/>} >
                </Route>
                <Route path="/about" element={<About/>}>
                </Route>
            </Routes>
    </Router>
    </>
  );
}