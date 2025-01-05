(() => {
  type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL';

  function createProductToJsonV1(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes){
      return {
        title,
        createdAt,
        stock,
        size
      }
    }

    const product1 = createProductToJsonV1('P1', new Date(), 95, 'S');
    console.log(product1);

    //arrow function: (parameter) => { return parameter }
    const createProductToJsonV2 = (
      title: string,
      createdAt: Date,
      stock: number,
      size?: Sizes ) => {
        return {
          title,
          createdAt,
          stock,
          size
        }
      }

    //parametro 'size' es opcional
    const product2 = createProductToJsonV2('P2', new Date(), 95);
    console.log(product2);
    console.log(product2.title);
    console.log(product2.size); //(property) size: Sizes | undefined

})();
