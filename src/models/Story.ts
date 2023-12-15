import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../db/database';
import User from './User';

interface StoryAttributes {
  id: number;
  userId: number;
  title: string;
  body: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface StoryCreationAttributes extends Optional<StoryAttributes, 'id'> {}

class Story extends Model<StoryAttributes, StoryCreationAttributes> implements StoryAttributes {
  public id!: number;
  public userId!: number;
  public title!: string;
  public body!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associate(models: { User: typeof User }) {
    Story.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  }
}

Story.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    title: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    body: {
      type: new DataTypes.STRING(1024),
      allowNull: false,
    }
  },
  {
    tableName: 'stories',
    sequelize, // passing the `sequelize` instance is required
  }
);

export default Story;
