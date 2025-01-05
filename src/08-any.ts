(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'Hola';

  //Formas de hacer un casting
  const rta = (myDynamicVar as string).toLocaleLowerCase(); //nuestro 'myDynamicVar' es tratado como string
  console.log('rta:', rta);

  myDynamicVar = 123;
  const rta2 = (<number>myDynamicVar).toFixed(); //nuestro 'myDynamicVar' es tratado como number
  console.log('rta2: ', rta2);
})();
