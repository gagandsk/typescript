(() => {
  type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
      createdAt: Date,
      stock: number,
      size?: Sizes
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data)
  }

  addProduct({
    title: 'Product 1',
    createdAt: new Date(1994, 1, 1),
    stock: 12
  });

  addProduct({
    title: 'Product 2',
    createdAt: new Date(1994, 1, 1),
    stock: 12,
    size: 'S'
  });

  addProduct({
    title: 'Product 3',
    createdAt: new Date(1994, 1, 1),
    stock: 12,
  });

  console.log(products);

})();
