// O módulo é padrão do Node, para leitura e escrita de arquivos
const fs = require('node:fs')

// Módulo padrão para a leitura de caminho de diretórios ou arquivos
const path = require('node:path')
const file = path.join(__dirname, 'arquivo.txt')

console.log('Início da aplicação')

// Função presente no módulo, utilizada para leitura do conteúdo de uma arquivo
fs.readFile(file, 'utf-8', (err, data) => { // Além disso, é uma execução assíncrona!
    if (err) throw err
    console.log(data)
})

console.log('Fim')