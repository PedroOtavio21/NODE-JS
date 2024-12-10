# Aula 11 - Trabalhando com informações do Sistema Operacional
Nessa aulta, iremos trabalhar com o uso do módulo nativo "os", que trabalha utilizando informações do sistema operacional

## Principais métodos
Primeiramente, antes de testar os principais métodos, você deverá importar o módulo com:

```js
const os = require("node:os")
```

### plataform
Retorna o tipo de sistema operacional que você utiliza em sua máquina

```js
const platforma = os.platform() 
console.log("Plataforma do SO:", platforma)
```

### arch
Retorna a arquitetura de seu sistema operacional

```js
const arquitetura = os.arch() 
console.log("Arquitetura do SO:", arquitetura)
```

### cpus
Retorna uma array de contendo o processador de sua máquina, onde cada posição do array representa um núcleo da CPU. Ou seja, a quantidade de posições do array, representa a quantidade de núcleos da CPU

```js
const processadores = os.cpus() 
console.log("CPUs presentes no computador:", processadores[0])
```

### totalmem
Retorna a quantidade total de memória presente em seu computador. Ou seja, ele irá retornar a quantidade total de memória RAM disponível, mas não a memória total disponível para uso!

```js
const memoria = os.totalmem()
console.log("Total de memória RAM do pc:", memoria / 1024 / 1024 / 1024, "GB")
```