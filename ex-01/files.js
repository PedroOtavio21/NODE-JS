// Criação de arquivo de texto
import fs from 'node:fs'

export function createFile(content){
    fs.writeFile('meuarquivo.txt', content, 'utf-8', (error) => {
        if (error) {
            console.log('Erro ao criar arquivo: ', error.message)
            return
        }

        console.log('Arquivo criado com sucesso.')
    })
}

export function showFile(){
    fs.readFile('meuarquivo.txt', 'utf-8', (error, content) => {
        if (error) {
            console.log('Erro ao realizar leitura de arquivo: ', error.message)
            return
        }

        console.log(content)
    })
}

export function updateFile(newContent){
    fs.writeFile('meuarquivo.txt', newContent, 'utf-8', (error) => {
        if (error) {
            console.log('Erro ao atualizar conteúdo de arquivo.')
            return
        } 

        console.log('Arquivo atualizado com sucesso!')
    })
}

export function deleteFile(nameFile){
    fs.unlink('meuarquivo.txt', (error) => {
        if (error) {
            console.log('Erro ao deletar arquivo desejado!')
        }

        console.log('Arquivo excluído com sucesso!')
    })
}
