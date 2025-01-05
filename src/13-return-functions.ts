(() => {
  const calcTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total;
  }

  // esta funcion es 'void', no retorna nada
  const printTotal = (prices: number[]): void => {
    const rta = calcTotal([1,2,3,4,5,6,7,8,9]);
    console.log(`Suma total: ${rta}`);
  }

  const rta = printTotal([1,2,3,4,5,6,7,8,9]);

})();
