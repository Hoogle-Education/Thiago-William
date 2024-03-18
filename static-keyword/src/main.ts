class Person {

  private name: string;
  private age: number;
  private height: number;

  constructor(name: string, age: number, height: number) {
    this.name = name;
    this.age = age;
    this.height = height;
  }

}

class Account {

  static withdrawTax = 7.0;

}

class Calculator {
  static sum(a: number, b: number) {
    return a + b;
  }
}

class RequestBuilder {
  static of(path: string) {
  }
}

RequestBuilder.of('users')

Calculator.sum(1, 2);

Account.withdrawTax = 20.0;
Math.abs(-1);

interface PersonInterface {
  name: string;
  age: number;
  height: number;
}

interface Student {
  ra: string
}


const joao: PersonInterface & Student = {
  name: "Joao",
  age: 20,
  height: 1.8,
  ra: "123abc"
}

// ------ 

// singleton pattern

class Admin {

  private static singletonAdmin: Admin | null = null;

  public code: number;

  private constructor() {
    this.code = Math.floor(Math.random() * 1000);
  }

  public static getInstance(): Admin {
    if(Admin.singletonAdmin != null) {
      return Admin.singletonAdmin!;
    }

    Admin.singletonAdmin = new Admin();
    return Admin.singletonAdmin;
  }

}

console.log(Admin.getInstance())
console.log(Admin.getInstance())
console.log(Admin.getInstance())