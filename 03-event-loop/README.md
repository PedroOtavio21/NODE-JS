# Aula 3 - Entendendo o Event Loop

### O que é?
É um conceito fundamental no Node.js que permite que o JavaScript seja executado de **forma não bloqueante e eficiente**

É a base da **assincronicidade** e da **alta concorrência** no Node.js (execução de inúmeras tarefas em paralelo)

### Eventos e Callbacks
Eventos são a base do Evente Loop. Exemplos de eventos que incluem solicitações HTTP, temporarizadores, eventos do sistema, etc

Callbacks são funções que são **registradas para serem executadas** quando um **evento ocorrer**

Os eventos são registrados em elementos, como um objeto HTTP Server, que emite eventos quando as solicitações são recebidas

Exemplo de código:
```js
// O módulo é padrão do Node, para leitura e escrita de arquivos
// A utilização da palavra 'node' antes do módulo, indica que é um módulo padrão do Node
const fs = require('node:fs')

// Módulo padrão para a leitura de caminho de diretórios ou arquivos
const path = require('node:path')
const file = path.join(__dirname, 'arquivo.txt')

console.log('Início da aplicação')

// Função presente no módulo, utilizada para leitura do conteúdo de uma arquivo
fs.readFile(file, 'utf-8', (err, data) => { // Além disso, é uma execução assíncrona!
    if (err) throw err
    console.log(data)
})

console.log('Fim')
```

### Funcionamento básico
Gerencia a execução de tarefas **assíncronas** em JavaScript

Permite que várias operações sejam executadas **concorretamente sem bloquear a thread principal**

**Nota:** Uma thread seria como uma espécie de **processador virtual** que processa uma determinada tarefa

Opera em um loop infinito, **constantemente verificando e executando tarefas na fila de eventos**

### Componentes
**Call Stack (Pilha de Chamadas):**
Responsável por rastrear as funções em execução e aguardando para serem chamadas

**Callback Queue (Fila de Callbacks):**
Armazena as funções a serem executadas quando o Call Stack estiver vazio

**Event Loop:**
Coordena a transferência de funções da *Callback Queue* para a *Call Stack*