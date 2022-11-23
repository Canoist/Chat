import React from "react";
import useSocket from "../hooks/useSocket";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

//  const rooms= [
//      {
//          roomId: string,
//          author: string
//      }
//  ]

const RoomsList = () => {
    const { rooms } = useSocket();
    return (
        <List>
            Rooms list:
            {rooms.map((room) => (
                <ListItem key={room.roomId}>
                    <ListItemButton>
                        <ListItemText primary={`Room of ${room.author}`} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};
export default RoomsList;
