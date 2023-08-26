import type { Sequelize } from "sequelize";
import { Contents as _Contents } from "./Contents.js";
import type { ContentsAttributes, ContentsCreationAttributes } from "./Contents.js";
import { CrossBindings as _CrossBindings } from "./CrossBindings.js";
import type { CrossBindingsAttributes, CrossBindingsCreationAttributes } from "./CrossBindings.js";
import { Users as _Users } from "./Users.js";
import type { UsersAttributes, UsersCreationAttributes } from "./Users.js";
import { Articles as _Articles, Products as _Products, Games as _Games, Comments as _Comments } from "./ContentTypes.js";

export {
  _Contents as Contents,
  _CrossBindings as CrossBindings,
  _Users as Users,
  _Articles as Articles,
  _Products as Products,
  _Games as Games,
  _Comments as Comments,
};

export type {
  ContentsAttributes,
  ContentsCreationAttributes,
  CrossBindingsAttributes,
  CrossBindingsCreationAttributes,
  UsersAttributes,
  UsersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Contents = _Contents.initModel(sequelize);
  const CrossBindings = _CrossBindings.initModel(sequelize);
  const Users = _Users.initModel(sequelize);
  const Articles = _Articles.initModel(sequelize);
  const Products = _Products.initModel(sequelize);
  const Games = _Games.initModel(sequelize);
  const Comments = _Comments.initModel(sequelize);

  return {
    Contents: Contents,
    CrossBindings: CrossBindings,
    Users: Users,
    Articles: Articles,
    Products: Products,
    Games: Games,
    Comments: Comments
  };
}
