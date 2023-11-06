import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from './pages/Home'
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Start from "./pages/Start";

import Header from "./components/Header/Header";
import HeaderDashboard from "./components/Header/HeaderDashboard";
import Footer from "./components/Footer/Footer";
import Padding from "./components/Config/Padding";

import "./style/index.css";


const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer!);

const AppRoutes = () => {

    const location = useLocation();

    const showHeaderPaths = ["/", "/start", "/about", "/contact"];
    const shouldShowHeader = showHeaderPaths.includes(location.pathname);

    const showPaddingPaths = ["/"];
    const shouldShowPadding = showPaddingPaths.includes(location.pathname);

    const showHeaderDashboardPaths = ["/dashboard", "/dashboard/account"];
    const shouldShowHeaderDashboard = showHeaderDashboardPaths.includes(location.pathname);

    const showFooterPaths = ["/", "/start", "/about"];
    const shouldShowFooter = showFooterPaths.includes(location.pathname);

    return (
        <>
            {shouldShowPadding && <Padding position="top" color="green"/>}
            {shouldShowHeader && <Header />}
            {shouldShowHeaderDashboard && <HeaderDashboard />}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/start" element={<Start />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            {shouldShowFooter && <Footer />}
           {shouldShowPadding && <Padding position="bottom" color="green" />} 
        </>
    );
};

root.render(
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
);
