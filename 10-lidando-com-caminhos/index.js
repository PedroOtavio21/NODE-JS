const path = require('node:path')

/*
Tal método recebe como parâmetro um conjunto de valores, 
que serão usados em conjunto para formar o caminho desejado!
*/

const dir = 'src'
const file = 'app.js'

// Variável bastante utilizada pelo node: __dirname
// Responsável por passar o caminho completo do diretório que que o arquivo .js se encontra
const fullPath = path.join(__dirname, dir, file)
// console.log(fullPath)

const relativePath = '../arquivos/relatorio.pdf'

// Similar ao uso do join, porém resolve o caminho completo passado como parâmetro
const absolutePath = path.resolve(__dirname, relativePath)

// Algo silimar ao __dirname, porém utilizando o caminho atual do arquivo
console.log(absolutePath)

// Esse método retorna o último elemento do caminho do diretório, ou seja, o arquivo
const fileName = path.basename(relativePath)
console.log(fileName)

// A função retorna a extensão do último arquivo! .pdf, .js, ext
const ext = path.extname(absolutePath)
console.log(ext)