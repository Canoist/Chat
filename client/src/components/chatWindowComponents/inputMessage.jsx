import React from "react";
import PropTypes from "prop-types";

const InputMessage = ({ value, onChange, sendMessage }) => {
    const sendMessageKeyDown = (event) => {
        if (event.code === "Enter" && event.ctrlKey) {
            event.preventDefault();
            event.stopPropagation();
            sendMessage();
        }
    };
    return (
        <div className="footer">
            <div className="input-group mb-3">
                <span
                    className="input-group-text"
                    id="inputGroup-sizing-default">
                    Message:
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Введите здесь сообщение"
                    value={value}
                    onKeyDown={sendMessageKeyDown}
                    onChange={(e) => onChange(e.target.value)}
                />
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={sendMessage}>
                    Send
                </button>
            </div>
        </div>
    );
};

InputMessage.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    sendMessage: PropTypes.func,
};

export default InputMessage;
