// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

names.forEach(name => console.log(name))

provinces.forEach(province => console.log(province))

names.forEach((name, index) => console.log(name, provinces[index]));


provinces.map(province => console.log(province.toUpperCase()))

provinces.map(province => console.log(province.length))

provinces.sort()
console.log(provinces)

const removecape = provinces.filter(province => !province.includes('Cape'));
console.log(removecape)

const hasS = names.map(name => name.includes('s')).some(hasS => hasS)
console.log(hasS)


console.log(products.filter(product => product.product.length <= 5));


const totalPrice = products
 .filter(product => product.price!== '')
.map(product => ({...product, price: Number(product.price) }))
.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice);

const concatenatedNames = products.reduce((acc,product) => acc + ' ' + product.product, '');
console.log(concatenatedNames);

const extremes = products
 .filter(product => product.price!== '')
 .map(product => ({price: Number(product.price) }))
 .reduce(
   (acc, product) => {
     acc.highest = Math.max(acc.highest || product.price, product.price);
     acc.lowest = Math.min(acc.lowest || product.price, product.price);
     return acc;
   },
   {}
 );

console.log(`Highest: ${extremes.highest}. Lowest: ${extremes.lowest}.`);

const transformedProducts = Object.entries(products).reduce(
  (acc, [index, product]) => ({...acc, [index]: {name: product.product, cost: Number(product.price)} }),
  {}
);

console.log(transformedProducts);


