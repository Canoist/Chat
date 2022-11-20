import React from "react";
import moment from "moment";

const Message = ({ data, username }) => {
  return (
    <div className={`chat-wrapper__message ${data.username === username ? "right-side" : ""}`}>
      <p>{data.username}</p>
      <p>{moment(data.id).format("LLL")}</p>
      <span className="btn btn-info text-dark message">{data.message}</span>
    </div>
  );
};
export default Message;
