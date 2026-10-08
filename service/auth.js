const jwt = require("jsonwebtoken");

const secret = "Dhiraj$123@$";

function setUser(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        role: user.role,
    };

    return jwt.sign(payload, secret);
}

function getUser(token) {
    if (!token) return null;

    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
};