import type { Sequelize } from "sequelize";
import { Contents as _Contents } from "./Contents";
import type { ContentsAttributes, ContentsCreationAttributes } from "./Contents";
import { Users as _Users } from "./Users";
import type { UsersAttributes, UsersCreationAttributes } from "./Users";

export {
  _Contents as Contents,
  _Users as Users,
};

export type {
  ContentsAttributes,
  ContentsCreationAttributes,
  UsersAttributes,
  UsersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Contents = _Contents.initModel(sequelize);
  const Users = _Users.initModel(sequelize);

  return {
    Contents: Contents,
    Users: Users,
  };
}
