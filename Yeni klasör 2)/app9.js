v// 1. mehsullarin ucuzdan bahaya siralanmasi

// 2. Beş random eded yaradib arraya yigin, sonda ise onlarin cemini gosterin

// 3. Foreach arasdirin, map ve normal for dongusu ile ferqi nedi ona baxin

// 4. Json, fetch, api bunlar nedir nece isleyir








// 1. mehsullarin ucuzdan bahaya siralanmasi

let products = [
  {
    id: 1,
    name: "Iphone 14",
    price: 900,
  },
  {
    id: 2,
    name: "Samsung A70",
    price: 500,
  },
  {
    id: 3,
    name: "BMW",
    price: 50000,
    pet: ["cat", "dog"],
  },
  {
    id: 4,
    name: "Iphone 15 Pro Max",
    price: 2000,
  },
];

let search = prompt("Search: ").toLowerCase();
let productFilter;

if (search === "baha") {
  productFilter = products.filter((product) => product.price > 1000);
} else if (search === "ucuz") {
  productFilter = products.filter((product) => product.price < 1000);
} else {
  productFilter = products.filter((product) =>
    product.name.toLowerCase().includes(search)
  );
}

let sortedProducts = products.slice().sort((a, b) => a.price - b.price);




// 2. Beş random eded yaradib arraya yigin, sonda ise onlarin cemini gosterin
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100)); 
}

console.log("Random ədədlər:", randomNumbers);

let sum = 0;
for (let number of randomNumbers) {
  sum += number;
}

console.log("Cəm:", sum);



// 3. Foreach arasdirin, map ve normal for dongusu ile ferqi nedi ona baxin

// 4. Json, fetch, api bunlar nedir nece isleyir