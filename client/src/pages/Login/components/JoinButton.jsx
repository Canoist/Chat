import { Button } from "@mui/material";
import React from "react";

const JoinButton = () => {
    return (
        <Button
            variant="contained"
            type="submit"
            color="warning"
            sx={{
                my: 3,
            }}>
            Join
        </Button>
    );
};
export default JoinButton;
