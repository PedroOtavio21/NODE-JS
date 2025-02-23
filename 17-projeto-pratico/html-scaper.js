// Importa os módulos do Node.js para manipulação de arquivos, caminhos e entrada do usuário
const fs = require("node:fs")
const path = require("node:path")
const readline = require("node:readline")

// Executa a função principal do programa
run()

// Função que substitui caracteres especiais (<, >, &) por suas entidades HTML equivalentes
function escapeHtmlSpecialCharacters(text) {
  return text.replace(/[<>&]/g, (match) => {
    switch (match) {
      case "<":
        return "&lt;"
      case ">":
        return "&gt;"
      case "&":
        return "&amp;"
      default:
        return match
    }
  })
}

// Função que lê um arquivo, processa o escape de caracteres HTML e salva o resultado em outro arquivo
function escapeHtmlFile(inputFilePath, outputFilePath) {
  try {
    // Lê o conteúdo do arquivo de entrada
    const fileContent = fs.readFileSync(inputFilePath, "utf-8")
    
    // Converte os caracteres especiais
    const escapedContent = escapeHtmlSpecialCharacters(fileContent)
    
    // Escreve o conteúdo processado no arquivo de saída
    fs.writeFileSync(outputFilePath, escapedContent, "utf-8")
    
    console.log(`Arquivo escapado com sucesso: ${outputFilePath}`)
  } catch (error) {
    // Captura e exibe erros caso a leitura/escrita do arquivo falhe
    console.log("Erro:", error.message)
    process.exit(1) // Encerra o programa com código de erro
  }
}

// Função que solicita um caminho de arquivo ao usuário via entrada padrão
function askFilePath(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer)
      rl.close()
    })
  })
}

// Função assíncrona que interage com o usuário para obter os caminhos dos arquivos
async function userInteraction() {
  // Captura argumentos passados via terminal (exemplo: node html-escaper.js <inputPath> <outputPath>)
  let inputPath = process.argv[2]
  
  // Se o caminho de entrada não foi fornecido, pergunta ao usuário
  if (!inputPath) {
    inputPath = await askFilePath("Informe o caminho do arquivo de entrada: ")
  }
  inputPath = path.resolve(inputPath) // Converte o caminho para um formato absoluto

  // Define um nome padrão para o arquivo de saída
  const defaultName = `escaped_${path.basename(inputPath)}.txt`
  
  // Pergunta ao usuário o caminho do arquivo de saída (ou usa o nome padrão se nada for informado)
  const answer = await askFilePath(`Informe o caminho do arquivo de saída (padrão: ${defaultName}): `)
  let outputPath = answer.length > 0 ? answer : defaultName
  outputPath = path.resolve(outputPath) // Converte o caminho para um formato absoluto

  // Executa o processamento do arquivo
  escapeHtmlFile(inputPath, outputPath)
}

// Função principal do programa
function run() {
  if (process.argv.length >= 4) {
    // Se os argumentos foram passados pelo terminal, processa diretamente
    escapeHtmlFile(
      path.resolve(process.argv[2]),
      path.resolve(process.argv[3])
    )
  } else {
    // Caso contrário, exibe uma mensagem e inicia a interação com o usuário
    console.log("---------------------")
    console.log("HTML Tag Escaper v1.0")
    console.log("---------------------\n")
    console.log("Argumentos não informados! Por favor, informe os caminhos dos arquivos para realizar o escape.")
    userInteraction()
  }
}
