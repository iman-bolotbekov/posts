import React from 'react';
import Navbar from "./UI/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<About />} path="/about" />
            <Route element={<Posts />} path="/"  />
            <Route element={<h1>Страница не найдена!</h1>} path='*'/>
        </Routes>
    );
};

export default AppRouter;