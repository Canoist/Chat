import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

const Message = ({ data, userName }) => {
    return (
        <div
            className={`message-wrapper__message ${
                data.userName === userName ? "right-side" : ""
            }`}>
            <p>{data.userName}</p>
            <p>{moment(data.id).format("LLL")}</p>
            <span className="btn btn-info text-dark message">
                {data.message}
            </span>
        </div>
    );
};

Message.propTypes = {
    data: PropTypes.object,
    userName: PropTypes.string,
};

export default Message;
