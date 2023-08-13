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

// interface

interface IUser {
  username: string;
  email: string;
}

interface IEmployee extends IUser {
  employId: Number;
}

let testme = (user: IUser) => {
  user.email = "majumder@gmail.com";
};

let testme2 = (employ: IEmployee) => {
  employ.employId = 2;
};

// Generics
interface IAuthor {
  id: number;
  username: string;
}

interface IPost {
  id: number;
  extra: IAuthor[];
}

interface IPost1<T> {
  extra: T[];
}
