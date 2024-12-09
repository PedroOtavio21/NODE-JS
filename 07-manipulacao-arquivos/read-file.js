const fs = require('node:fs')

const fileName = 'arquivo.txt'
// Modo síncrono de leitura de arquivos
// try {
//     const data = fs.readFileSync(fileName, 'utf-8')
//     console.log('Conteúdo do arquivo.')
//     console.log(data)
// } catch (error){
//     console.log("Erro ao ler o arquivo inserido: ", error.message)
// }

// Modo assíncrono de leitura de arquivos
fs.readFile(fileName, "utf-8", (error, data) => {
    if (error) {
        console.log("Erro ao ler o arquivo inserido: ", error.message)
        return
    }

    console.log(data)
})