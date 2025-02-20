import { createFile, updateFile, showFile, deleteFile } from "./file.mjs";

createFile('Conteúdo inicial do arquivo. \nCriado com o módulo fs do Node.js')
showFile()
updateFile('Conteúdo modificado!')
showFile()
deleteFile()