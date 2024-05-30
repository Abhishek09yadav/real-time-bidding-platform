// models/notification.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Notification = sequelize.define('Notification', {
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

Notification.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Notification;