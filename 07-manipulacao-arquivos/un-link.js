const fs = require('node:fs')

fs.unlink('./arquivo.txt', (err) => {
  if (err) {
    console.log('Erro ao excluir o arquivo: ', err.message)
    return
  }
  console.log('Arquivo excluído com sucesso.')
})