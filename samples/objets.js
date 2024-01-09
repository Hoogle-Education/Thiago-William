// interface => contrato

// KISS = Keep It Simple & Stupid

function isMultipleOf(number, multiple) {
  return number%multiple == 0
}

function isEven(number) {
  if(isMultipleOf(number, 2)) //if-braceless
    return true //early return
  
  return false
}

class Account {
  constructor(holder, balance) {
    this.holder = holder
    this.balance = balance
    this.isActive = true
    this.isAuthorized = true
  }

  block() {
    this.isActive = false
  }

  withdraw(amount) {
    if(!this.isActive) 
      throw new Error('account is inactive')

    if(this.balance < amount) 
      throw new Error('insufient balance')
    
    if(!this.isAuthorized)
      throw new Error('account is not authorized')

    this.balance -= amount
  }
}

// YAGNI = You Ain't Gonna Need It
// DRY = Don't Repeat Yourself

// codigo ruim é dificil de extender, entender e mudar

// SOLID
// 1. Single Responsability Principle
// 2. Open Closed Principle

function showUser({name, age, email}){

}

// showUser({name: , email: })