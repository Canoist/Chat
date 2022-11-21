import React from "react";
import Message from "./message";
import PropTypes from "prop-types";

const ChatWrapper = ({ messages, userName }) => {
    return (
        <div className="chat-wrapper">
            {messages
                .map((message) =>
                    message.event === "connection" ? (
                        <p
                            key={message.id}
                            className="chat__wrapper__user-connect">
                            Пользователь {message.userName} подключился
                        </p>
                    ) : (
                        <Message
                            key={message.id}
                            data={message}
                            userName={userName}
                        />
                    )
                )
                .reverse()}
        </div>
    );
};

ChatWrapper.propTypes = {
    messages: PropTypes.array,
    userName: PropTypes.string,
};

export default ChatWrapper;
