import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

export default class User extends Model {
  public id!: number;
  public email: string;
  public password: string;
}

User.init({
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING(250),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
}, { tableName: 'user', sequelize});
