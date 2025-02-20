import fs from 'node:fs'

// Criação de Arquivo
export function createFile(content){
    fs.writeFile('meuarquivo.txt', content, (err) => {
        if (err) {
            console.log('Erro ao criar um arquivo com o texto informado: ', err.message)
            return
        }
        console.log('Arquivo criado com sucesso.')
    })
}

// Reescrita de arquivo
export function updateFile(content){
    fs.writeFile('meuarquivo.txt', content, (err) => {
        if (err) {
            console.log('Erro ao reescrever texto em arquivo: ', err.message)
            return
        }
        console.log('Arquivo reescrito com sucesso.')
    })
}

// Leitura de arquivo
export function showFile(){
    fs.readFile("meuarquivo.txt", 'utf-8', (err, data) => {
        if (err) {
            console.log('Erro ao ler conteúdo de arquivo: ', err.message)
            return
        }
        console.log(data)
    })
}

// Exclusão de arquivo
export function deleteFile(){
    fs.unlink("meuarquivo.txt", (err) => {
        if (err) {
            console.log('Erro ao excluir arquivo desejado: ', err.message)
            return
        }
        console.log('Arquivo excluído com sucesso.')
    })
}