const fs = require('node:fs')
const path = require('node:path')
const caminho = path.join(__dirname, 'arquivo.txt')

// Método responsável à criar uma stream de leitura
const streamLeitura = fs.createReadStream(caminho)
// const streamLeitura = fs.createReadStream('wallpaper.png')
const buffer = []

// método que ser como uma espécie de listener, onde a partir do evento de "dados", fará algo
streamLeitura.on('data', (chunk) => {
    buffer.push(chunk)
    console.log('Um chunk foi processado.')
})

// Outro listener responsável ao evento de end, onde ao final da operação (leitura dos dados), fará algo
streamLeitura.on('end', () => {
    console.log('Buffer:\n', buffer)
    const dadosCompletos = Buffer.concat(buffer).toString()
    console.log('Dados lidos:\n', dadosCompletos)
})