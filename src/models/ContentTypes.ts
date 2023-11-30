import { Contents } from "./Contents.js";
import type { ContentsAttributes, ContentsCreationAttributes } from "./Contents.js";

export class Articles extends Contents implements ContentsAttributes {
  constructor() {
    super();
    this.type = 'article';
  }
}

export class Books extends Contents implements ContentsAttributes {
  constructor() {
    super();
    this.type = 'book';
  }
}

export class Products extends Contents implements ContentsAttributes {
  constructor() {
    super();
    this.type = 'product';
  }
}

export class Comments extends Contents implements ContentsAttributes {
  constructor() {
    super();
    this.type = 'comment';
  }
}
