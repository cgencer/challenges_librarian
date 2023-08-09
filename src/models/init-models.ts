import type { Sequelize } from "sequelize";
import { Content as _Content } from "./Contents";
import type { ContentAttributes, ContentCreationAttributes } from "./Contents";
import { User as _User } from "./Users";
import type { UserAttributes, UserCreationAttributes } from "./Users";

export {
  _Content as Content,
  _User as User,
};

export type {
  ContentAttributes,
  ContentCreationAttributes,
  UserAttributes,
  UserCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Content = _Content.initModel(sequelize);
  const User = _User.initModel(sequelize);


  return {
    Content: Content,
    User: User,
  };
}
