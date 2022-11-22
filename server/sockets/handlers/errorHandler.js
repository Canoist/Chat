const { logBgRed } = require("../../config/utils/styledLogs");

module.exports = (err, req, res, next) => {
    logBgRed(err);

    // For client side
    if (res) {
        const status = err.status || err.statusCode || 500;
        const message = err.message || "Something went wrong. Try again later";
        res.status(status).json({ message });
    }
};
