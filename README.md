# Comandos terminal TypeScript
Nos genera el .js del archivo typescript en es6;

```
npx tsc src/hello.ys
```

Nos genera los .js del los archivos typescript en es6 y los guarda en el directorio ```dist```;
```
npx tsc src/*.ts --target es6 --outDir dist
```

Por defecto nos lo generará en ES3
