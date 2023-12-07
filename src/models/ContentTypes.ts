import { Contents } from "./Contents.js";
import type { ContentsAttributes, ContentsCreationAttributes } from "./Contents.js";

export class Books extends Contents implements ContentsAttributes {
  constructor() {
    super();
    this.type = 'book';
  }
}

export class Games extends Contents implements ContentsAttributes {
  constructor() {
    super();
    this.type = 'game';
  }
}

export class Comments extends Contents implements ContentsAttributes {
  constructor() {
    super();
    this.type = 'comment';
  }
}

export class Reviews extends Contents implements ContentsAttributes {
  constructor() {
    super();
    this.type = 'review';
  }
}

export class Products extends Contents implements ContentsAttributes {
  constructor() {
    super();
    this.type = 'product';
  }
}

export class Articles extends Contents implements ContentsAttributes {
  constructor() {
    super();
    this.type = 'article';
  }
}
