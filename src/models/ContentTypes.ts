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
    this.type = 'book';
  }
}

export class Reviews extends Contents implements ContentsAttributes {
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

export class Products extends Contents implements ContentsAttributes {
  constructor() {
    super();
    this.type = 'product';
  }
}
