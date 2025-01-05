(() => {
  let myNumber: number;
  let myString: string;

  let myNull = null; //let myNull: any
  let myUndefined = undefined; //let myUndefined: any

  let myNull2: null = null;
  let muUndefined2: undefined = undefined;

  let myNumber1: number | null = null; //
  myNumber1 = 12;

  let myString1: string | undefined = undefined;
  myString1 = 'aaa';

  function hiV1(name: string | null){
    let hello = 'hiV1 -> Hola ';
    if(name) {
      hello += name
    } else {
      hello += 'nobody';
    }
    console.log(hello)
  }

  function hiV2(name: string | null){
    let hello = 'hiV2 -> Hola ';
    hello += name?.toLocaleLowerCase() || 'nobody'; //si 'name' no existe me devuelve un null
    console.log(hello)
  }

  hiV1('Goku');
  hiV1(null);

  hiV2('Vegeta');
  hiV2(null);

})();
