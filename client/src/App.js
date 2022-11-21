import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/login";

function App() {
    return (
        <>
            <BrowserRouter>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Chat />} />
            </BrowserRouter>
        </>
    );
}

export default App;
