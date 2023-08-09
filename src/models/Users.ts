import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UserAttributes {
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
}

export type UserPk = "id";
export type UserId = User[UserPk];
export type UserOptionalAttributes = "id" | "firstName" | "lastName" | "birthday" | "wallet" | "createdAt" | "updatedAt" | "bgg_id";
export type UserCreationAttributes = Optional<UserAttributes, UserOptionalAttributes>;

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
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


  static initModel(sequelize: Sequelize.Sequelize): typeof User {
    return User.init({
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
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
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
export {};
