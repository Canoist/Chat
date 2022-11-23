import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChatWrapper, Login } from "./pages";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/:roomId" element={<ChatWrapper />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
