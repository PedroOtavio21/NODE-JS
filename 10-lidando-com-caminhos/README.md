# Aula 10 - Lidando com arquivos utilizando o módulo "path"
Anteriormente, foi visto que para lidar com determinados caminhos de diretório ou arquivos nas aplicações com node, era algo que gerava alguns problemas, podendo não encontrar o arquivo desejadado. Porém, nessa aula veremos o módulo nativo do node que facilitará casos como estes.

## Importação de módulo
Para importar o módulo, será algo similar ao uso do módulo "fs", utilizado em aulas passadas.

```js
const path = require('node:path');
```

## Principais métodos

### join
Comina partes/valores de um determinado caminho e os junta em um único valor.

```js
const dir = 'src'
const file = 'app.js'

const fullPath = path.join(dir, file)
console.log(file)
```

### resolve
Resolve um caminho absoluto a partir de segmentos de caminhos passados como parâmetro

```js
const relativePath = '../arquivos/relatorio.pdf'

const absolutePath = path.resolve(relativePath)
console.log(absolutePath)
```

### basename
Retorna o nome do arquivo desejado ou diretório de um caminho, passados como parâmetro

```js
const fileName = path.basename(relativePath) // relatorio.pdf

console.log(fileName)
```

### extname
Retorna o tipo da extensão do arquivo passado como parâmetro da função

```js
const ext = path.extname(absolutePath)

console.log(ext) // .pdf
```