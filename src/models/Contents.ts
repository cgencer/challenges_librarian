import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ContentAttributes {
  id: number;
  title?: string;
  content?: string;
  type?: string;
  parent?: string;
  owner?: number;
  createdAt: Date;
  updatedAt: Date;
  content_json?: object;
}

export type ContentPk = "id";
export type ContentId = Content[ContentPk];
export type ContentOptionalAttributes = "id" | "title" | "content" | "type" | "parent" | "owner" | "createdAt" | "updatedAt" | "content_json";
export type ContentCreationAttributes = Optional<ContentAttributes, ContentOptionalAttributes>;

export class Content extends Model<ContentAttributes, ContentCreationAttributes> implements ContentAttributes {
  id!: number;
  title?: string;
  content?: string;
  type?: string;
  parent?: string;
  owner?: number;
  createdAt!: Date;
  updatedAt!: Date;
  content_json?: object;


  static initModel(sequelize: Sequelize.Sequelize): typeof Content {
    return Content.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    parent: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    owner: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    content_json: {
      type: DataTypes.JSON,
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
    tableName: 'Contents',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Contents_pkey",
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
