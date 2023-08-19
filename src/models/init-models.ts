import type { Sequelize } from "sequelize";
import { Contents as _Contents } from "./Contents";
import type { ContentsAttributes, ContentsCreationAttributes } from "./Contents";
import { CrossBindings as _CrossBindings } from "./CrossBindings";
import type { CrossBindingsAttributes, CrossBindingsCreationAttributes } from "./CrossBindings";
import { Users as _Users } from "./Users";
import type { UsersAttributes, UsersCreationAttributes } from "./Users";

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
