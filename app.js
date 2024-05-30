// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'user'
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

module.exports = User;

// models/item.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./models/user');

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

// models/bid.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./models/user');
const Item = require('./item');

const Bid = sequelize.define('Bid', {
    bid_amount: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

Bid.belongsTo(User, { foreignKey: 'user_id' });
Bid.belongsTo(Item, { foreignKey: 'item_id' });

module.exports = Bid;

// models/notification.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./models/user');

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
