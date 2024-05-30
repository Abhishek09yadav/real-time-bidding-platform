
// models/item.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Item = sequelize.define('Item', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    starting_price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    current_price: {
        type: DataTypes.DECIMAL,
        defaultValue: DataTypes.DECIMAL
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

Item.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Item;
