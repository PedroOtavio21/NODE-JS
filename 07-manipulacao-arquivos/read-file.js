const fs = require('node:fs')

const path = './arquivo.txt'

// Função utilizada para verificar se arquivo existe, retornando um valor booleano 
const exists = fs.existsSync(path)

// Leitura de arquivo de maneira síncrona
// try{
//     const data = fs.readFileSync('./arquivo.txt', 'utf-8')
//     console.log(data)
// } catch (error) {
//     console.log('Error ao ler o arquivo: ', error.message)
// }

// Leitura de arquivo de maneira assíncrona
if (exists) {
    fs.readFile(path, 'utf-8', (err, data) => {
        if(err){
            console.log('Erro ao ler o arquivo desejado: ', err.message)
            return
        }
        console.log(data)
    })
} else {
    console.log('O arquivo não existe ou o caminho não está correto')
}