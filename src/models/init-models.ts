import type { Sequelize } from "sequelize";
import { Contents as _Contents } from "./Contents.js";
import type { ContentsAttributes, ContentsCreationAttributes } from "./Contents.js";
import { CrossBindings as _CrossBindings } from "./CrossBindings.js";
import type { CrossBindingsAttributes, CrossBindingsCreationAttributes } from "./CrossBindings.js";
import { Users as _Users } from "./Users.js";
import type { UsersAttributes, UsersCreationAttributes } from "./Users.js";

export {
  _Contents as Contents,
  _CrossBindings as CrossBindings,
  _Users as Users,
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

  return {
    Contents: Contents,
    CrossBindings: CrossBindings,
    Users: Users,
  };
}
