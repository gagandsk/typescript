(() => {
  type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL';

  const loginV1 = (email: string, password: string) => {
    console.log('loginV1:', email, password);
  }

  const loginV2 = (data: {email: string, password: string} ) => {
    console.log('loginV2:', data.email, data.password);
  }

  loginV1('hola@gmail.com', '123abc');
  loginV2({ email: 'hola@gmail.com', password: '123abc' });

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
      createdAt: Date,
      stock: number,
      size?: Sizes
  }) => {
    products.push(data)
  }

  addProduct({
    title: 'P1',
    createdAt: new Date(1994, 1, 1),
    stock: 12
  });

  addProduct({
    title: 'P2',
    createdAt: new Date(1994, 1, 1),
    stock: 12,
    size: 'S'
  });

  console.log(products);
})();
