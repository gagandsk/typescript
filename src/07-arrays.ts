(()=> {
  //let prices = [1,2,3]; //let prices: number[]
  let prices = [1,2,3, 'hola', true]; //let prices: (string | number | boolean)[]
  prices.push(4);
  prices = [5,6,7];

  let products = ['hola', true];
  products.push('bla', false);

  let mixed: (number | string | boolean | Object)[] = ['hola', true, 1];
  mixed.push(123);
  mixed.push('adios');
  mixed.push(false);
  mixed.push({});
  mixed.push([]);

  let numbers = [1,2,3,1,1,1,1,1,123];
  numbers.map(item => item * 2);
})();
