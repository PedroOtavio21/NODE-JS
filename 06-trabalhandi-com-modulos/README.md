# Aula 6 - Trabalhando com módulos no Node.js
Nesta aula, serão revisadas as duas maneiras de se trabalhar com módulos no JavaScript pelo Node.Js. 

Primeiramente, inicie um projeto npm no repositório com:

```npm
npm init -y
```

O formato padrão de módulos no JavaScript é a utilização de CommonJS:
```js
// Módulo
function sum(a, b){
    return a + b
}

module.exports = sum

// Principal
const sum = require('./sum')
console.log(sum(5, 3)) // 8
```

Agora, é possível trabalhar com ESModules pelo node, em versões mais recentes da Linguagem, porém é necessário utilizar uma nomenclatura diferente no arquivo

```js
// Módulo ESM
function subtract(x, y){
    return a - b
}

export default subtract

// Principal
import subtract from "./subtract.jsm"

console.log(subtract(5, 3))
```

Mas para trabalhar com módulos ESM no Node, por não ser o formato padrão, é necessário mudar a configuração do tipo de importação no package.json:

```json
// ...
	"type": "module",
// ...
```