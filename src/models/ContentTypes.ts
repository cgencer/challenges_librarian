import { Contents } from "./Contents.js";
import type { ContentsAttributes, ContentsCreationAttributes } from "./Contents.js";

/*
enum ConditionStates {
	EXCELLENT,
	MINT,
	REFURBISHED,
	LIKE-NEW,
	SLIGHTLY-USED,
	FAIRLY-USED,
	HEAVILYY-USED,
	SLIGHTLY-DAMAGED,
	HEAVILY-DAMAGED,
	POOR,
	MISSING-PARTS
}
type Conditions = keyof typeof ConditionStates;

interface gameAttributes {
	condition: Conditions;
}

interface bookAttributes {
	condition: Conditions;
}
*/

export class Books extends Contents implements ContentsAttributes /*, bookAttributes */ {
  constructor() {
    super();
    this.type = 'book';
  }
}

export class Games extends Contents implements ContentsAttributes /*, gameAttributes */ {
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
