import React from "react";
import useSocket from "../hooks/useSocket";
import { List, Typography } from "@mui/material";
import RoomItem from "./RoomItem";

//  const rooms= [
//      {
//          roomId: string,
//          author: string
//      }
//  ]

const RoomsList = () => {
    const { rooms } = useSocket();

    return (
        <List
            sx={{ width: "100%", maxWidth: 260, bgcolor: "background.paper" }}>
            <Typography variant="h5" align="center">
                Room list
            </Typography>
            {rooms.map((room) => (
                <RoomItem key={room.roomId} room={room} />
            ))}
        </List>
    );
};
export default RoomsList;
