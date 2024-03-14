import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Producto = db.define('contact', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },
    message: {
        type: DataTypes.NUMBER
    },
    municipio: {
        type: DataTypes.NUMBER
    }
}, {
    createdAt: false,
    updatedAt: false
})

export default Producto