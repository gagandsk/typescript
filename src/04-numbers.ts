(() => {
  let productPrice = 100;
  productPrice = 75;
  console.log('productPrice', productPrice);

  let customerAge: number = 25;
  //customerAge = customerAge + '1'; //251
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  let productInStock: number;
  console.log('productInStock', productInStock);
  if(productInStock > 10) {
    console.log('is greater');
  }

  let discount = parseInt('100');
  console.log('discount', discount);
  if(discount <= 200) {
    console.log('discount apply');
  } else {
    console.log('discount not apply');
  }

  let hex = 0xfff;
  console.log('hex', hex);

  let bin = 0b1010; //en decimal es un 10
  console.log('bin', bin);

   //el tipado siempre es en minuscula
  //const myNumber: Number = 10;
  const myNumber2: number = 10;
})();
