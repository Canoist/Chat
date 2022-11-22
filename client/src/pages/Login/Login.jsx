import { Box } from "@mui/material";
import React, { useState } from "react";
import sxForm from "../sxForm.styles";
import FieldRequired from "./components/FieldRequired";
import JoinButton from "./components/JoinButton";
import TitleLoginForm from "./components/TitleLoginForm";
import UserNameField from "./components/UserNameField";

export const Login = () => {
    const [userName, setUserName] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userName.trim().length < 2) {
            setError("Name must be more than 2 symbols");
            return;
        }
        console.log(userName);
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setUserName(value);
        setError("");
    };
    return (
        <Box
            sx={{
                width: "100vw" - "18px",
                minHeight: "80vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&::-webkit-scrollbar": {
                    width: "18px",
                },
            }}>
            <Box component="form" sx={sxForm} onSubmit={handleSubmit}>
                <TitleLoginForm />
                <UserNameField
                    error={error}
                    onChange={handleChange}
                    userName={userName}
                />
                <FieldRequired />
                <JoinButton />
            </Box>
        </Box>
    );
};
