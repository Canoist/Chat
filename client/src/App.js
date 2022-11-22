import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import { Login } from "./pages";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/:roomId" element={<Chat />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
