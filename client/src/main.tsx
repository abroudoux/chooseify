import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat";

import "./index.css";


const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer!);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Chat />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
        </Routes>
    </BrowserRouter>
);