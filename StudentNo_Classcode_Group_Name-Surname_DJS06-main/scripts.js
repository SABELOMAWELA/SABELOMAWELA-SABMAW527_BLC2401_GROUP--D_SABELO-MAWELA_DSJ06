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







