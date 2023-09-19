//const [count, setCount] = useState(0)

  //console.log("Meu primeiro debug");

  const myString = "Minha variável";
  
  //console.log(myString);

  const arrayFruits = [
    "Laranja",
    "Caja",
    "Abacaxi",
    "Abacate",
    "Manga",
    "Melancia",
    "Pera"
  ];

  //console.log(arrayFruits);
  //console.log("=========================")
  // arrayFruits.map((fruit) => {
  //   return (
  //     console.log(fruit)
  //   )
  // });

  const arrayObjects = [
    {
      id: 1,
      name: "José da Silva",
      age: 15
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

  // arrayObjects.map((person) => {
  //   return (
  //     console.log(`${person.name} tem ${person.age} anos`)
  //   )
  // });

  const qtd = 4;

  //Fruta com 4 caracteres
  const fruitResultFind = arrayFruits.find(
    (currentFruit) => currentFruit.length === qtd);
  //console.log(fruitResultFind);

  //Filtrar MÚLTIPLAS frutas pela quantidade de caracteres
  const fruitsResultFilter = arrayFruits.filter(
    (currentFruit) => currentFruit.length === qtd);
  //console.log(fruitsResultFilter);

  //Filtrar itens com determinada substring
  const search = "Abaca";
  const results = arrayFruits.filter(
    //(currentFruit) => currentFruit.includes(search));
    (currentFruit) => currentFruit.startsWith(search));
  console.log(results);