import React from "react";
import Message from "./message";

const ChatWrapper = ({ messages, username }) => {
  return (
    <div className="chat-wrapper">
      {messages
        .map((mess) =>
          mess.event === "connection" ? (
            <p key={mess.id} className="chat__wrapper__user-connect">
              Пользователь {mess.username} подключился
            </p>
          ) : (
            <Message key={mess.id} data={mess} username={username} />
          )
        )
        .reverse()}
    </div>
  );
};
export default ChatWrapper;
