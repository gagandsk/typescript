(() => {
  let userId: string | number;
  userId = 123;
  userId = 'a1b2c3';

  function greeting(myText: string | number) {
    if(typeof myText === 'string') {
      console.log(`string: ${myText.toLocaleLowerCase()}!`);
    } else {
      console.log(`number: ${myText.toFixed(1)}`);
    }

  }
  greeting('abc');
  greeting(1.99)
})();
