import type { Sequelize } from "sequelize";
import { Contents as _Contents } from "./Contents.js";
import type { ContentsAttributes, ContentsCreationAttributes } from "./Contents.js";
import { CrossBindings as _CrossBindings } from "./CrossBindings.js";
import type { CrossBindingsAttributes, CrossBindingsCreationAttributes } from "./CrossBindings.js";
import { Users as _Users } from "./Users.js";
import type { UsersAttributes, UsersCreationAttributes } from "./Users.js";
import {  Books as _Books, 
          Games as _Games, 
          Comments as _Comments, 
          Products as _Products,
          Reviews as _Reviews } from "./ContentTypes.js";

export {
  _Contents as Contents,
  _CrossBindings as CrossBindings,
  _Users as Users,
  _Books as Books, _Games as Games, _Comments as Comments, _Products as Products, _Reviews as Reviews
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

  const Books = _Books.initModel(sequelize);
  const Games = _Games.initModel(sequelize);
  const Products = _Products.initModel(sequelize);
  const Reviews = _Reviews.initModel(sequelize);
  const Comments = _Comments.initModel(sequelize);

  Books.belongsToMany(Users, {
    through: 'CrossBindings',
    foreignKey: 'contentID',
    otherKey: 'userID'
  });
  Users.belongsToMany(Books, {
    through: 'CrossBindings',
    foreignKey: 'userID',
    otherKey: 'contentID'
  });

/*
Product.belongsToMany(Category, {
  through: 'product_categories',
  foreignKey: 'objectId', // replaces `productId`
  otherKey: 'typeId' // replaces `categoryId`
});
Category.belongsToMany(Product, {
  through: 'product_categories',
  foreignKey: 'typeId', // replaces `categoryId`
  otherKey: 'objectId' // replaces `productId`
});
*/

  return {
    Contents: Contents,
    CrossBindings: CrossBindings,
    Users: Users,
    Books: Books,
    Games: Games,
    Reviews: Reviews,
    Products: Products,
    Comments: Comments,
  };
}
