const os = require('node:os')

// Retorna o tipo de sistema do usuário (Windows, Linux, etc)
const platform = os.platform()
console.log('Plataforma do SO: ', platform)

// Retorna a arquitetura do sistema operacional do usuário
const arch = os.arch()
console.log('Arquitetura do SO: ', arch)

// Demonstra as principais informações da CPU, além da quantidade de núcleos do processador
const cpus = os.cpus()
console.log('Informações da CPU: ', cpus)

// Retorna o total de memória utilizada da memória RAM
const memory = os.totalmem()
console.log('Total de memória do PC: ', memory / 1024 / 1024 / 1024, 'GB')