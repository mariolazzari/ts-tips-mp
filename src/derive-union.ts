// Derive a union type from an object

export const fruitCounts = {
  apple: 1,
  peer: 4,
  banana: 26,
};

type SingleFruitCount =
  | {
      apple: number;
    }
  | {
      banana: number;
    }
  | {
      peer: number;
    };

const singleFruit: SingleFruitCount = {
  banana: 1,
};
console.log("old", singleFruit);

type FruitCounts = typeof fruitCounts;

type NewSingleFruitCount = {
  [K in keyof FruitCounts]: {
    [K2 in K]: number;
  };
}[keyof FruitCounts];

const newSingleFruit: NewSingleFruitCount = {
  apple: 1,
};

console.log("new", newSingleFruit);
