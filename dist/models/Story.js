"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../db/database"));
class Story extends sequelize_1.Model {
    static associate(models) {
        Story.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }
}
Story.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
    },
    title: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    body: {
        type: new sequelize_1.DataTypes.STRING(1024),
        allowNull: false,
    }
}, {
    tableName: 'stories',
    sequelize: database_1.default, // passing the `sequelize` instance is required
});
exports.default = Story;
