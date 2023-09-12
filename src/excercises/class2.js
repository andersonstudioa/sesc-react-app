//Imprimindo algo no Console
console.log("Meu primeiro debug");

//Imprimindo variável no Console
const myString = "Meu segundo debug";
console.log(myString);

//Array unidimensional
const arrayFruits = ["Laranja", "Caja", "Abacaxi", "Manga", "Melancia", "Pêra"];
console.log(arrayFruits);

//Imprimir individualmente cada item do array
arrayFruits.map((fruit) => {
  return (
    console.log(fruit)
  )
});

//Array de objetos
const arrayObjects = [
  {
    id: 1,
    name: "José da Silva",
    age: 35

  },
  {
    id: 2,
    name: "Maria Oliveira",
    age: 43
  },
  {
    id: 3,
    name: "João de Souza",
    age: 19
  }
];

arrayObjects.map((person) => {
  return (
    console.log(`${person.name} tem ${person.age} anos`)
  )
});

//Encontrar UMA fruta pela quantidade de caracteres
const qtd = 4;
const fruitsResultFind = arrayFruits.find((fruit) => fruit.length === qtd);
console.log(fruitsResultFind);

//Filtrar MÚLTIPLAS frutas pela quantidade de caracteres
const fruitsResultFilter = arrayFruits.filter((fruit) => fruit.length === qtd);
console.log(fruitsResultFilter);


//Filtrar itens com que contenham uma substring
const search = "an";
const results = arrayFruits.filter((fruit) => fruit.includes(search));
console.log(results);