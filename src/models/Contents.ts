import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import lodash from 'lodash';
const { isObject, isUndefined, isNull, has } = lodash;

export interface ContentsAttributes {
  id: number;
  uuid?: string;
  title?: string;
  name?: string;
  content?: string;
  type?: string;
  parent_id?: string;
  owner_id?: number;
  score?: number;
  status?: string;
  content_json?: object;
  parent_type?: string;
  main_category?: string;
  attributes?: object;

  createdAt?: Date;
  updatedAt?: Date;
}

export type ContentsPk = "id";
export type ContentsId = Contents[ContentsPk];
export type ContentsOptionalAttributes = "id" | "title" | /*"name" |*/ "content" | "type" | "parent_id" | "owner_id" | "score" | "uuid" | "status" | "createdAt" | "content_json" | "parent_type" | "updatedAt" | "main_category" | "attributes";
export type ContentsCreationAttributes = Optional<ContentsAttributes, ContentsOptionalAttributes>;

export class Contents extends Model<ContentsAttributes, ContentsCreationAttributes> implements ContentsAttributes {
  id!: number;
  uuid?: string;
  title?: string;
//  name?: string;
  content?: string;
  type?: string;
  parent_id?: string;
  owner_id?: number;
  score?: number;
  status?: string;
  content_json?: object;
  parent_type?: string;
  main_category?: string;
  attributes?: object;

  createdAt?: Date;
  updatedAt?: Date;

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
/*
    name: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.title ?? ''}`;
      },
    },
  */
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(16),
      allowNull: false
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
    attributes: {
      type: DataTypes.JSON,
      allowNull: true
    },
    uuid: {
      type: DataTypes.UUID,
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
