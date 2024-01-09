const pessoa = {
  nome: "test",
};

fruits = [
  // { name: "apple", quantity: 2 },
  // { name: "orange", quantity: 0 },
];

// falsy values = false, 0, '', null, undefined, NaN
console.log(pessoa.nome);
console.log("tem nome", !!pessoa.nome);

// if (pessoa.nome) {
//     console.log(pessoa.nome);
// }

const isArrayEmpty = (array) => array.length === 0

primeira_fruta = (!isArrayEmpty(fruits) && fruits[0].name) || 'nao possui fruta';

console.log(primeira_fruta)

const student1 = {
  name: 'john',
  score: 0,
}

const student2 = {
  name: 'john',
}

// nullish coalescence operator
// testa se o primeiro membro eh nulo, e nao se eh truthy or falsy
nota = student2.score ?? 'sem nota'

console.log(nota)