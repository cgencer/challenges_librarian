import { Contents } from "./Contents.js";
import type { ContentsAttributes, ContentsCreationAttributes } from "./Contents.js";

export class Books extends Contents implements ContentsAttributes {
  constructor() {
    super();
    this.type = 'book';
  }
}

export class Comments extends Contents implements ContentsAttributes {
  constructor() {
    super();
    this.type = 'comment';
  }
}
