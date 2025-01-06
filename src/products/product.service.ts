import { Product, Sizes } from './product.model';

export const products: Product[] = []; //es recomendable inicializar el array en vacio

export const addProduct = (data: Product) => {
  products.push(data)
}

export const calcStock = (): number => {
  let total = 0;
  products.forEach((item) => {
    total += item.stock;
  });
  return total;
}
