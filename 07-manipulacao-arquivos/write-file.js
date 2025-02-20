const fs = require("node:fs")

// Escrita em arquivo de forma sincrona
// try {
//   fs.writeFileSync('./arquivo.txt', 'Olá, Mundo!', 'utf-8')
//   console.log('Arquivo criado com sucesso!')
// } catch (error){
//   console.log('Erro ao realizar escrita em arquivo: ', error.message)
// }

// Escrita em arquivo de forma assíncrona
const content = 'Conteúdo para arquivo assíncrono'

fs.writeFile('./arquivo.txt', content, 'utf-8', (err) => {
  if (err) {
    console.log('Erro ao escrever conteúdo em arquivo: ', err.message)
    return
  }
  console.log('Arquivo escrito com sucesso de forma assíncrona.')
})