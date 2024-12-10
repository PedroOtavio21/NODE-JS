const os = require('node:os')

// Retorna o tipo de sistema operacional que você utiliza
const platforma = os.platform() 
console.log("Plataforma do SO:", platforma)

// Retorna a arquitetura do computador
const arquitetura = os.arch() 
console.log("Arquitetura do SO:", arquitetura)

// Retorna qual o processador de sua máquina (Quantidade de valores indicam seus núcleos)
const processadores = os.cpus() 
console.log("CPUs presentes no computador:", processadores[0])

// Retorna a quantidade total de memória RAM presente no computador em Bytes
const memoria = os.totalmem()
console.log("Total de memória RAM do pc:", memoria / 1024 / 1024 / 1024, "GB")