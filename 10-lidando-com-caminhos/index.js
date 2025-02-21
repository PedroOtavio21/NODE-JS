const path = require('node:path')

// Método responsável para "formar" um caminho, a partir dos dados desejados
// const fullPath = path.join('src', 'scripts', 'main.js')

const dir = 'src'
const file = 'app.js'

// __dirname = Mostra o caminho completo até o diretório em que você se encontra
// __filename = Simililar ao dirname, porém incrementando o arquivo ao final do caminho
const fullPath = path.join(__dirname, dir, file)
// const relativePath = path.join('.', dir, file) // Passa o caminho relativo ao qual o código está sendo executado

console.log(fullPath)
// console.log(relativePath)

const relativePath = '../arquivos/relatorio.pdf'
const absolutePath = path.resolve(__dirname, relativePath)

// O resolve acaba sendo similar ao método join, porém ele resolve o caminho inserido com o uso das '/' ou '.'
console.log(absolutePath) 

const fileName = path.basename(relativePath)

// Esse método retorna o nome do arquivo ao final do caminho do diretório escolhido
console.log(fileName)

const extension = path.extname(relativePath)

// Esse método retorna a extensão utilizada ao final do arquivo escolhido 
console.log(extension)