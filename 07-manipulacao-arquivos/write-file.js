// Modo síncrono de escrita de arquivos
const fs = require('node:fs')

// try {
//   fs.writeFileSync("arquivo.txt", "Olá, mundo!", "utf-8")
//   console.log("Arquivo criado com sucesso.")
// } catch (error) {
//   console.log("Erro ao escrever o arquivo: ", error.message)
// }

// Modo síncrono de escrita de arquivos
const content = "Conteúdo do novo arquivo assíncrono"

fs.writeFile("./arquivo.txt", content, "utf-8", (error) => {
  if (error) {
    console.log("Erro ao escrever o arquivo: ", error.message)
    return
  }

  console.log("Arquivo criado com sucesso de forma assíncrona.")
})
