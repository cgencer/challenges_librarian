import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ContentsAttributes {
  id: number;
  title?: string;
  name?: string;
  content?: string;
  type?: string;
  parent?: string;
  owner?: number;
  score?: number;
  createdAt?: Date;
  content_json?: object;
  parent_type?: string;
  updatedAt?: Date;
  main_category?: string;
  taxonomy?: object;
  extras?: object;
}

export type ContentsPk = "id";
export type ContentsId = Contents[ContentsPk];
export type ContentsOptionalAttributes = "id" | "title" | "name" | "content" | "type" | "parent" | "owner" | "score" | "createdAt" | "content_json" | "parent_type" | "updatedAt" | "main_category" | "taxonomy" | "extras";
export type ContentsCreationAttributes = Optional<ContentsAttributes, ContentsOptionalAttributes>;

export class Contents extends Model<ContentsAttributes, ContentsCreationAttributes> implements ContentsAttributes {
  id!: number;
  title?: string;
  name?: string;
  content?: string;
  type?: string;
  parent?: string;
  owner?: number;
  score?: number;
  createdAt?: Date;
  content_json?: object;
  parent_type?: string;
  updatedAt?: Date;
  main_category?: string;
  taxonomy?: object;
  extras?: object;


  static initModel(sequelize: Sequelize.Sequelize): typeof Contents {
    return Contents.init({
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
    name: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.title ?? ''}`;
      },
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
    score: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.extras ?? 0}`;
      },
    },
    content_json: {
      type: DataTypes.JSON,
      allowNull: true
    },
    parent_type: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    main_category: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    taxonomy: {
      type: DataTypes.JSON,
      allowNull: true
    },
    extras: {
      type: DataTypes.JSON,
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
