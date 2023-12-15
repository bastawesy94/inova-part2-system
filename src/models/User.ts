import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../db/database';
import Story from './Story';

interface UserAttributes {
  id: number;
  userName: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> { }

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public userName!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associate(models: { Post: typeof Story }) {
    User.hasMany(models.Post, { foreignKey: 'userId', as: 'stories' });
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    }
  },
  {
    tableName: 'users',
    sequelize, // passing the `sequelize` instance is required
  }
);

export default User;
