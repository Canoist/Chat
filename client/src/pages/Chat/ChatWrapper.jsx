import React from "react";
import { Navigate } from "react-router-dom";
import localStorageService from "../../services/localStorageService";
import Chat from "./Chat";

export const ChatWrapper = () => {
    const userData = localStorageService.getUserData();

    if (!userData) {
        return <Navigate to="/" replace={true} />;
    }

    return <Chat />;
};
