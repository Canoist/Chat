import React, { useState } from "react";
import Message from "./message";
import PropTypes from "prop-types";
import socket from "../../utils/socket";
import { useEffect } from "react";

const MessageWrapper = ({ messages, userName }) => {
    const [templateMessages, setTemplateMessages] = useState([]);

    useEffect(() => {
        socket.on("ROOM:JOINED", (users) => {
            setTemplateMessages((prev) => [
                ...prev,
                `Пользователь ${users[users.length - 1].user} подключился`,
            ]);
        });
    }, []);

    return (
        <div className="message-wrapper">
            {!!templateMessages.length &&
                templateMessages.map((tempMessage, index) => (
                    <p key={index} className="message-wrapper__user-connect">
                        {tempMessage}
                    </p>
                ))}
            {!!messages.length &&
                messages
                    .map((message) => (
                        <Message
                            key={message.id}
                            data={message}
                            userName={userName}
                        />
                    ))
                    .reverse()}
        </div>
    );
};

MessageWrapper.propTypes = {
    messages: PropTypes.array,
    userName: PropTypes.string,
};

export default MessageWrapper;
