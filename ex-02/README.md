# Exercício 2 - Monitor de Sistema
Crie um monitor de sistema que deverá **exibir detalhes do computador** e seus componentes a **cada 1 segundo**. Além disso, os **detalhes** exibidos serão **registrados em um arquivo** de log chamado "log.txt", localizado na pasta "log" na raiz do sistema de arquivos. Este exercício deve ser feito usando apenas os módulos nativos do Node.js.

**Requisitos**:

1. Crie uma função que:

- A cada 1 segundo, exiba detalhes do computador, incluindo:

    - Nome do sistema operacional.

    - Arquitetura do sistema.

    - Modelo do processador.

    - Tempo de atividade do sistema.

    - Uso de memória (%).

2. Crie uma outra função que:

- A cada 1 segundo, registre os detalhes exibidos no arquivo "log.txt" localizado na pasta "log" na raiz do sistema de arquivos.

- Cada registro deve ser acrescentado ao arquivo, separado por uma linha em branco.

3. Crie a pasta "log" na raiz do sistema de arquivos se ela não existir.