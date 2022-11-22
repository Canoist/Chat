import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const UserNameField = ({ error, userName, onChange }) => {
    return (
        <TextField
            helperText={error}
            error={!!error}
            id="userName"
            label="Enter youre name"
            placeholder="Name"
            variant="standard"
            margin="normal"
            value={userName}
            onChange={onChange}
            required
        />
    );
};

UserNameField.propTypes = {
    error: PropTypes.string,
    userName: PropTypes.string,
    onChange: PropTypes.func,
};

export default UserNameField;
