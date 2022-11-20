import React from "react";
import PropTypes from "prop-types";

const ConnectUserWindow = ({ value, connect, setUserName, error }) => {
    const connectWithEnter = (event) => {
        if (event.code === "Enter") {
            event.preventDefault();
            event.stopPropagation();
            connect();
        }
    };
    return (
        <div className="username-enter">
            <div className="input-group mb-3">
                <input
                    value={value}
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Your's username"
                    onKeyDown={connectWithEnter}
                />
                <button
                    onClick={connect}
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2">
                    Join
                </button>
                {error && (
                    <div class="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
};

ConnectUserWindow.propTypes = {
    value: PropTypes.string,
    error: PropTypes.string,
    connect: PropTypes.func,
    setUserName: PropTypes.func,
};

export default ConnectUserWindow;
