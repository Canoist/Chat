import React from "react";
import PropTypes from "prop-types";
import { ListItemButton, ListItemText } from "@mui/material";
import localStorageService from "../services/localStorageService";
import { useNavigate } from "react-router-dom";
import useSocket from "../hooks/useSocket";

const RoomItem = ({ room }) => {
    const userData = localStorageService.getUserData();
    const navigate = useNavigate();
    const { changeRoom } = useSocket();

    const handleClick = () => {
        localStorageService.changeRoom(room.roomId);
        changeRoom();
        navigate("/" + room.roomId);
    };

    return (
        <ListItemButton
            selected={room.roomId === userData.roomId}
            onClick={handleClick}>
            <ListItemText primary={`Room of ${room.author}`} />
        </ListItemButton>
    );
};

RoomItem.propTypes = {
    room: PropTypes.object,
};

export default RoomItem;
