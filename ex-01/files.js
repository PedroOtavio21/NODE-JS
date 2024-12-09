// Criação de arquivo de texto
const fs = require('node:fs')

function createFile(nameFile, content){
    const exists = fs.existsSync(nameFile)

    if (exists) {
        console.log('O arquivo que você deseja criar já existe!')
    } else {
        fs.writeFile('./' + nameFile, content, 'utf-8', (error) => {
            if (error) {
                console.log("Erro ao criar arquivo com conteúdo desejado.", error.message)
                return
            }
    
            console.log('O arquivo foi criado com sucesso!')
        })
    }
}

function showFile(nameFile){
    const exists = fs.existsSync(nameFile)

    if (exists) {
        fs.readFile(nameFile, 'utf-8', (error, data) => {
            if (error) {
                console.log('Erro ao ler arquivo desejado: ', error.message)
                return
            }

            console.log(data)
        })
    } else {
        console.log('O arquivo desejado não encontrado ou não existe para realizar leitura.')
    }
}

function updateFile(nameFile, newContent){
    const exists = fs.existsSync(nameFile)

    if (exists) {
        fs.writeFile(nameFile, newContent, 'utf-8', (error) => {
            if (error) {
                console.log('Erro ao reescrever o arquivo já existente', error.message)
                return
            }

            console.log('O arquivo desejado foi atualizado com sucesso.')
        })
    } else {
        console.log('O arquivo desejado não existe. Não será possível reescrevê-lo.')
    }
}

function deleteFile(nameFile){
    const exists = fs.existsSync(nameFile)

    if (exists) {
        fs.unlink(nameFile, (error) => {
            if (error) {
                console.log('Erro ao excluir o arquivo desejado: ', error.message)
                return
            }

            console.log('Arquivo excluído com sucesso!')
        })
    }
}