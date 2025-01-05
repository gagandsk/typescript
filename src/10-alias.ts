(() => {
  type UserID = string | number;
  let userId: UserID;

  // Literal types
  type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'S';
  shirtSize = 'XS';
  shirtSize = 'XL';
  //shirtSize = 'XXL';

  function greeting(userId: UserID, size: Sizes) {
    console.log(`userId: ${userId} , size: ${size}`)
  }

  greeting(1, "XS");
  greeting(2, "S");
  //greeting("1", "XXS");
})();
