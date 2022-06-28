import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "../pages/home";
import About from "../pages/about";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import SingleCocktails from "../pages/single-cocktails";
import Error from "../pages/error";
const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path={"/Cocktails"} element={<Home />} />
                <Route path={"/Cocktails/about"} element={<About />} />
                <Route path={"/Cocktails/cocktails/:id"} element={<SingleCocktails />} />
                <Route path={"*"} element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
