const sequencia = [1, 2, 3]
const array = new Array(20)
// 5: 0 1 2 3 4

// stack e heap
// v(&oxfe)
// &oxfe = [1, 2, 3]

// - nao possui tamanho definido
// - pode ser heterogeneo(preferencialmente tipar)
// vetor/lista de tamanho n sempre para em n-1

console.log(array[0])

for (let i = 0; i < sequencia.length; i++) {
  console.log(sequencia[i])
}

for(let num of sequencia) {
  console.log(num)
}

// const estranho = [1, "joao", {name: "joao", idade: 20}]

const elementoAdicionado = sequencia.push(4)
console.log(sequencia)
console.log(elementoAdicionado)

const elementoRemovido = sequencia.pop()
console.log(sequencia)
console.log(elementoRemovido)

sequencia.shift()
console.log(sequencia)

sequencia.unshift(1)
sequencia.unshift(0)
console.log(sequencia)

const fruits1 = ['Banana', 'Orange', 'Lemon'] 
const fruits2 = ['Apple', 'Mango']

const result = fruits1.concat(fruits2)
console.log(result)

const matriz = [[1,2,3],
                [4,5,6],
                [7,8,9]]

const confusedArray = [[1, 2], [3, 4], [4, 5], 6]
console.log(confusedArray.flat(2))

// ... = spread(espalhar) operator

thisFormValue = {
  numberOfGuests: 10,
  moment: Date(),
  firstReservation: true
}

// const reservation = thisFormValue
// console.log(reservation)
const {firstReservation: idtPrimeiraReserva, ...rest} = thisFormValue
const reservation = {idtPrimeiraReserva, ...rest}


// const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const [primeiro, segundo, ...restante] = lista


// console.log(restante)

// const filesToUpload = [...currentFiles, ...selectedFiles]

// -----------------------------------------------------

// Como fazer? (prog. funcional) vs O que? (prog. imperativo)

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// value => boolean
const filteredList = fruits.filter((fruit) => fruit.startsWith("B"))
console.log(filteredList)

// map vs foreach

const fruitsUpperCase = fruits.forEach((fruit) => console.log(fruit))

const usersResponses = [
  {
    accessToken: "123",
    refreshToken: "456",
    expiresIn: 3600,
    data: {
      name: "Joao",
      email: "joao@gmail.com"
    }
  },
  {
    accessToken: "123",
    refreshToken: "456",
    expiresIn: 3600,
    data: {
      name: "maria",
      email: "maria@gmail.com"
    }
  },
  {
    accessToken: "123",
    refreshToken: "456",
    expiresIn: 3600,
    data: {
      name: "beatriz",
      email: "beatriz@gmail.com"
    }
  }
]

const users = usersResponses.map(({data: {name, email}}) => {
  return { name, email}
})

console.log(users)

const firstName = "joAo pedro"
const midName = "R."
const lastName = "silva costa menezes"

console.log(captlizeNames(firstName, midName, lastName));

function captlizeNames(...names) {
  return names.map((name) => 
    name
      .split(' ')
      .map(word => (word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()))
      .reduce((accumulator, current) => {return accumulator + ' ' + current}, '')
  ).reduce((accumulator, current) => {return accumulator + ' ' + current}, '')
}