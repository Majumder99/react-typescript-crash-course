let variable: string | number;

variable = "sourav";
// variable = true
variable = 12;

let variableArray: (string | number)[];

variableArray = [1, 2, 3, 4, "sourav"];

let object: {
  username: string;
  age: number;
  phone?: string;
};

let person: object = {
  username: "sourav",
  age: 22,
  phone: "12321",
};

let functionName = (num: number): number => {
  return 3;
};

// type aliases

type UserType = {
  username: string;
  age: number;
  theme: "dark" | "light";
};

let betterFunction = (user: UserType) => {
  user.theme = "light";
};
