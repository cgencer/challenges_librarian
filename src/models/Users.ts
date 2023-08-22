import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UsersAttributes {
  id: number;
  userName: string;
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  birthday?: Date;
  wallet?: string;
  createdAt: Date;
  updatedAt: Date;
  bgg_id?: string;
  bga_id?: string;
  avatar?: string;
}

export type UsersPk = "id";
export type UsersId = Users[UsersPk];
export type UsersOptionalAttributes = "id" | "firstName" | "lastName" | "birthday" | "wallet" | "createdAt" | "updatedAt" | "bgg_id" | "bga_id" | "avatar";
export type UsersCreationAttributes = Optional<UsersAttributes, UsersOptionalAttributes>;

export class Users extends Model<UsersAttributes, UsersCreationAttributes> implements UsersAttributes {
  id!: number;
  userName!: string;
  firstName?: string;
  lastName?: string;
  email!: string;
  password!: string;
  birthday?: Date;
  wallet?: string;
  createdAt!: Date;
  updatedAt!: Date;
  bgg_id?: string;
  bga_id?: string;
  avatar?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Users {
    return Users.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "1923-10-29"
    },
    wallet: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bgg_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bga_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Users',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
