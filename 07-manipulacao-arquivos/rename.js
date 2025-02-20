const fs = require('node:fs')

// Método utilizado para renomear arquivo
fs.rename('arquivo.txt', 'arquivo.csv', (err) => {
  if (err) {
    console.log('Erro ao renomear arquivo: ', err.message)
    return
  }
  console.log('Arquivo renomeado com sucesso!')
})