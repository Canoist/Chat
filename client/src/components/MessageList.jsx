import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import useSocket from "../hooks/useSocket";
import MessageItem from "./MessageItem";

const MessageList = () => {
    const { messages, log, removeMessage } = useSocket();
    return (
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Typography variant="h4">Messages</Typography>
            <Stack
                direction="column"
                justifyContent="flex-end"
                alignItems="stretch"
                spacing={1}>
                {messages.map((message) => (
                    <MessageItem
                        key={message.messageId}
                        message={message}
                        removeMessage={removeMessage}
                    />
                ))}
            </Stack>

            <p className="log">{log}</p>
        </Box>
    );
};
export default MessageList;
