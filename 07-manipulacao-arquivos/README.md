# Aula 7 - Manipulação de arquivos com o módulo fs
Nesta aula, conheceremos um módulo nativo do Node.js, utilizado para leitura e escrita de arquivos

**Nota**: Em algumas funções a seguir, foram utilizadas inicialmente seu formato *síncrono*, porém o recomendado 
seria utilizar o **formato padrão** dos métodos, que são *assíncronos*! 

### Escrita em arquivos
Para escrever um arquivo de texto simples podemos usar o método “writeFileSync” ou **writeFile**. 
Primeiramente, crie um arquivo chamado “write-file.js” como usado na aula:

```js
// Não esqueça da boa prática de nomenclatura dos módulos nativos do node abaixo!
const fs = require('node:fs')

try {
  fs.writeFileSync("arquivo.txt", "Olá, mundo!", "utf-8")
  console.log("Arquivo criado com sucesso.")
} catch (error) {
  console.log("Erro ao escrever o arquivo: ", error.message)
}
```

Note que, se você realizar o mesmo procedimento em um **arquivo existente**, ele irá **sobrescrever o mesmo**, 
com o novo conteúdo desejado! Além do mais, a função acima executa a escrita em arquivos de forma síncrona, como citado 
anteriormente.

### Leitura de arquivos
Agora crie o arquivo “read-file.js”, para realizar a leitura do arquivo já existente:

```js
const fs = require('node:fs')

try {
  const data = fs.readFileSync("./arquivo.txt", "utf-8")
  console.log(data)
} catch (error) {
  console.log("Erro ao ler o arquivo: ", error.message)
}
```

## Uso correto de código!
Apesar de ser possível fazer a leitura e escrita de forma síncrona, é comum utilizarmos a forma assíncrona:


Note que no método síncrono, era utilizado um **tratamento de erro try/catch**. Porém aqui, o erro é passado como 
parâmetro da função

```js
// write-file
const fs = require("node:fs")

const content = "Conteúdo do novo arquivo assíncrono"

fs.writeFile("./arquivo.txt", content, "utf-8", (error) => {
  if (error) {
    console.log("Erro ao escrever o arquivo: ", error.message)
    return
  }

  console.log("Arquivo criado com sucesso de forma assíncrona.")
})

// read-file
const fs = require('node:fs')

fs.readFile(filename, "utf-8", (error, data) => {
  if (error) {
    console.log("Erro ao ler o arquivo: ", error.message)
    return
  }
  
  const entries = data.split(",")
  console.log(entries)
  entries.forEach((entry) => console.log(entry))
})
```

### Existencia de arquivos
Com o “fs” também é possível utilizar vários outros métodos, como o **exists** para **verificar a existência** do arquivo:

```js
const fs = require("node:fs")

const filename = "arquivo.csv"

const exists = fs.existsSync(filename)

if (exists) {
  fs.readFile(filename, "utf-8", (error, data) => {
    if (error) {
      console.log("Erro ao ler o arquivo: ", error.message)
      return
    }
  
    const entries = data.split(",")
    console.log(entries)
    entries.forEach((entry) => console.log(entry))
  })
} else {
  console.log("O arquivo não existe!")
}
```

### Renomear arquivos existentes
O rename, que serve para renomear um arquivo:

```js
const fs = require("node:fs")

fs.rename("arquivo.txt", "arquivo.csv", (error) => {
  if (error) {
    console.log("Erro ao renomear o arquivo: ", error.message)
    return
  }

  console.log("Arquivo renomeado com sucesso!")
})

```

### Deletar arquivos existentes
E o **unlink**, que serve **para excluir** um arquivo:

```js
const fs = require("node:fs")

fs.unlink("arquivo.csv", (error) => {
  if (error) {
    console.log("Erro ao excluir o arquivo: ", error.message)
    return
  }

  console.log("Arquivo excluído com sucesso!")
})
```