import { createFile, showFile, updateFile, deleteFile } from "./files.js";

createFile("Conteúdo inicial do arquivo.\nCriado com o módulo fs do Node.js.");
showFile()
updateFile("Conteúdo modificado!")
showFile()
deleteFile()