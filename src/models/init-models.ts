import type { Sequelize } from "sequelize";
import { Contents as _Content } from "./Contents";
import type { ContentsAttributes, ContentsCreationAttributes } from "./Contents";
import { Users as _User } from "./Users";
import type { UsersAttributes, UsersCreationAttributes } from "./Users";

export {
  _Content as Content,
  _User as User,
};

export type {
  ContentsAttributes,
  ContentsCreationAttributes,
  UsersAttributes,
  UsersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Content = _Content.initModel(sequelize);
  const User = _User.initModel(sequelize);

  return {
    Content: Content,
    User: User,
  };
}
