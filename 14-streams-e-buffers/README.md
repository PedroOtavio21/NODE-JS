# Aula 14 - Entendendo Streams e Buffers

## O que são?
**Streams**: Fluxos de dados contínuos, como um rio de informações que podem ser lidas ou escritas de forma incremental

**Buffers**: Áreas temporárias de armazenamento de dados, especialmente úteis quando trabalhamos com streams

## Principais características das streams
Usada para lidar com dados em pequenos pedaços (ou *chunks*), o que torna o processo eficiente

Ideal para otimizar operações em grandes volumes de dados e para processar fluxos contínuos

Tipos de streams:
- Readable Stream

- Writeable Stream

- Duplex Stream

- Transform Stream

## Principais características dos buffers 
Áreas temporárias (normalmente na RAM) para armazenar dados binários

São úteis para representar dados binários brutos, armazenando uma sequeência de números inteiros (representação dos bytes)

Possuem um tamanho fixo, ou seja, não é possível mudar o tamanho de um buffer após ele ser criado

Operações com buffers:
- Escrita, ou seja, adicionar dados ao buffer

- Leitura, ou seja, extrair dados do buffer

- Manipulação, ou seja, é possível realizar diversas operações diretamente em dados binários