import React from "react";
import TimeAgo from "react-timeago";
import PropTypes from "prop-types";

const MessageItem = (message, removeMessage) => {
    const user = localStorage.getItem();
    const { content } = message;

    const isMyMessage = user.userId === message.userId;

    return (
        <li className={`item message ${isMyMessage ? "my" : ""}`}>
            <p className="username">{isMyMessage ? "Me" : message.userName}</p>

            <div className="inner">
                <p>{content}</p>

                {isMyMessage && (
                    <button
                        className="btn"
                        onClick={() => removeMessage(message)}>
                        Re
                    </button>
                )}
            </div>

            <p className="datetime">
                <TimeAgo date={message.createdAt} />
            </p>
        </li>
    );
};

MessageItem.propTypes = {
    message: PropTypes.object,
    removeMessage: PropTypes.func,
};

export default MessageItem;
