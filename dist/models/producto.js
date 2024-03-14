"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Producto = connection_1.default.define('contact', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER
    },
    message: {
        type: sequelize_1.DataTypes.NUMBER
    },
    municipio: {
        type: sequelize_1.DataTypes.NUMBER
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Producto;
