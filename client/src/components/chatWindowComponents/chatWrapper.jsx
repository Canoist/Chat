import React from "react";
import Message from "./message";
import PropTypes from "prop-types";

const ChatWrapper = ({ messages, userName }) => {
    return (
        <div className="chat-wrapper">
            {messages
                .map((mess) =>
                    mess.event === "connection" ? (
                        <p
                            key={mess.id}
                            className="chat__wrapper__user-connect">
                            Пользователь {mess.userName} подключился
                        </p>
                    ) : (
                        <Message
                            key={mess.id}
                            data={mess}
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
