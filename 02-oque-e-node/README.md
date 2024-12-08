# Aula 2 - O que é Node.js
O Node.js é um ambiente de execução de código JavaScript fora do navegador.

- Ele é baseado no motor V8 do Google Chrome. Ou seja, foi desenvolvido usando como base o núcleo do navegador Chrome

- Desenvolvido por Ryan Dahl, o Node.js permite a execução de código JavaScript no lado do servidor

- Desenvolvido utilizando a linguagem C++, mais performática e de nível mais baixo 

### Principais Características
É um projeto open-source (de código aberto) e possui uma comunidade ativa que contribui com pacote e solução para a própria linguagem

Inclui o **npm**, o gerenciador de pacotes do Node.js que facilita a instalação e gerenciamento de bibliotecas e módulos

É baseado em um modelo de evento não bloqueante que permite a execução eficiente de operações de I/O (Escrever um arquivo no sistema operacional ou receber uma requisição web não bloqueiam a thread principal do código)

- No Node.js, a maioria das operações de I/O (Input/Output) é não bloqueante, oque significa que o código não precisa esperar a conclusão de uma operação antes de continuar

### Casos de uso comuns
**Ferramentas de Linha de Comando**: 
Desenvolvimento de utilitários de linha de comando para automação (Vite, Webpack, etc)

**Integração dom Bancos de Dados**:
Aplicações e serviços web que necessitam utilizar bancos de dados SQL ou NoSQL (como MySQL, PostgreSQL, MongoDB, Redis, etc)

**Servidores Web**:
Desenvolvimento de servidores web escaláveis e eficientes

**APIs Restfull**:
Criação de APIs para serviços web

**Aplicações em Tempo Real**: 
Como bate-papo em tempo real, jogos e streaming de dados

### Sistema de módulos
O Node.js utiliza um sistema de módulos que permite a modularização do código e reutilização de bibliotecas

Seu principal sistema de módulos é o CommonJS, utilizado desde as primeiras versões, mas o suporte aos ESModules está sendo adotado lentamente

É possível utilizar módulos de terceiros do npm, mas o Node.js também conta com seus próprios módulos nativos (como **http**, **fs** e **os**)