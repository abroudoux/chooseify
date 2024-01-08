import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "@/pages/Home";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";

import Header from "@/components/Header/Header";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import Footer from "@/components/Footer/Footer";
import Padding from "@/components/Config/Padding";

import "@/style/index.css";
import "@/style/layouts.css";


const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer!);

const AppRoutes = () => {

    const location = useLocation();

    const showHeaderPaths = ["/", "/start", "/about", "/contact"];
    const shouldShowHeader = showHeaderPaths.includes(location.pathname);

    const showHeaderDashboardPaths = ["/dashboard", "/dashboard/account"];
    const shouldShowHeaderDashboard = showHeaderDashboardPaths.includes(location.pathname);

    return (
        <>
            {/* {shouldShowPadding && <Padding position="top" color="green"/>} */}
            {/* {shouldShowHeader && <Header />} */}
            {shouldShowHeaderDashboard && <HeaderDashboard />}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/register" element={<Register />} />
                </Routes>
            {/* {shouldShowFooter && <Footer />} */}
           {/* {shouldShowPadding && <Padding position="bottom" color="green" />}  */}
           {/* <div className={`bottom-0 left-0 fixed h-4 w-full bg-green z-20`}></div> */}
        </>
    );
};

root.render(
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
);
