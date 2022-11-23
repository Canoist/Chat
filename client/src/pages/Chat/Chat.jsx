import { Box, Divider, Stack } from "@mui/material";
import React from "react";
import MessageList from "../../components/MessageList";
import RoomsList from "../../components/RoomsList";
import useSocket from "../../hooks/useSocket";

export const Chat = () => {
    const { messages, users } = useSocket();
    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh",
                "&::-webkit-scrollbar": {
                    width: "18px",
                },
                backgroundColor: "#eeeeee",
                p: 2,
            }}>
            Chat
            <p>Messages: {messages.length}</p>
            <p>Users: {users.length}</p>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}>
                <RoomsList />
                <MessageList />
            </Stack>
        </Box>
    );
};
