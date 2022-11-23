import React from "react";
import useSocket from "../hooks/useSocket";
import { List, ListItemButton, ListItemText, Typography } from "@mui/material";
import localStorageService from "../services/localStorageService";

//  const rooms= [
//      {
//          roomId: string,
//          author: string
//      }
//  ]

const RoomsList = () => {
    const { rooms } = useSocket();
    const userData = localStorageService.getUserData();

    return (
        <List
            sx={{ width: "100%", maxWidth: 260, bgcolor: "background.paper" }}>
            <Typography variant="h5" align="center">
                Room list
            </Typography>
            {rooms.map((room) => (
                <ListItemButton
                    key={room.roomId}
                    selected={room.roomId === userData.roomId}>
                    <ListItemText primary={`Room of ${room.author}`} />
                </ListItemButton>
            ))}
        </List>
    );
};
export default RoomsList;
