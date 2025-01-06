import { addProduct, calcStock, products } from './product.service';

addProduct({
  name: 'Product 1',
  createdAt: new Date(1994, 1, 1),
  stock: 12
});

addProduct({
  name: 'Product 2',
  createdAt: new Date(1994, 1, 1),
  stock: 4,
  size: 'S'
});

console.log(products);
const total = calcStock();
console.log(`Total productos en stock: ${total}`);
