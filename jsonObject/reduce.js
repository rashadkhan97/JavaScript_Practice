const cart = [
  { item: "Laptop", price: 80000 },
  { item: "Mouse", price: 1500 },
  { item: "Keyboard", price: 3000 },
  { item: "Headphone", price: 2500 }
];

const totalPrice = cart.reduce((acc, product) => acc + product.price,0);

console.log("Total Cart Price:", totalPrice);
