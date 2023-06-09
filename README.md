# Challenge ONE - Decodificador <img src="/img/footer.svg" style="width: 150px"/>

Este projeto consiste em um decodificador simples que permite criptografar e descriptografar mensagens de texto, um desafio que faz parte do programa Oracle Next Education. O decodificador utiliza uma substituição de letras minúsculas, sem acentos, por palavras-chave.

<p align="center"><img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&amp;logo=html5&amp;logoColor=white" alt="shields"><img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E" alt="shields"><img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&amp;logo=css3&amp;logoColor=white" alt="shields"></p>

## 📑 Instruções de uso

1. Faça o download dos arquivos HTML, CSS e JavaScript fornecidos.

2. Abra o arquivo HTML (`index.html`) em seu navegador da web.

3. Na página do decodificador, você verá um campo de texto onde poderá digitar sua mensagem de texto.

4. Digite um texto em letras minúsculas, sem acentos, no campo de texto.

5. Clique no botão "Criptografar" para codificar a mensagem digitada.

6. Clique no botão "Descriptografar" para decodificar a mensagem criptografada.

7. O resultado da operação de codificação ou decodificação será exibido abaixo do campo de texto, na seção de resultados.

8. Se desejar copiar o resultado para a área de transferência, clique no botão "Copiar".

## Prévia

### Desktop

![Versão Desktop](https://github.com/FelipeG-Almeida/decodificador/assets/73674044/9f581d9c-0625-4c18-aff5-a7b938261659)

### Tablet e Mobile

<img src="https://github.com/FelipeG-Almeida/decodificador/assets/73674044/95905cd6-00e3-419c-b020-4c290b9c6108" style="height: 530px"/>
<img src="https://github.com/FelipeG-Almeida/decodificador/assets/73674044/8a051a49-4c64-46a1-a2cd-aad762f9f110" style="height: 530px"/>

## 🛠️ Tecnologias utilizadas

- HTML
- CSS
- JavaScript

## 🔐 Lógica do algoritmo de codificação

A mensagem recebida é codificada da seguinte forma:

- A letra `a` é convertida para `ai`
- A letra `e` é convertida para `enter`
- A letra `i` é convertida para `imes`
- A letra `o` é convertida para `ober`
- A letra `u` é convertida para `ufat`

Também é possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

Por exemplo:
`gato` => `gaitober`

`gaitober` => `gato`

## 📁 Estrutura de arquivos

- `index.html`: Arquivo HTML principal que contém a estrutura da página e os elementos visuais.
- `css/`: Diretório contendo arquivos CSS para estilização da página.
  - `reset.css`: Arquivo CSS para redefinir os estilos padrão do navegador.
  - `base.css`: Arquivo CSS contendo estilos básicos para o layout da página.
  - `result.css`: Arquivo CSS contendo estilos para a seção de resultados.
  - `text.css`: Arquivo CSS contendo estilos para o campo de texto e suas informações.
  - `footer.css`: Arquivo CSS contendo estilos para o rodapé da página.
- `js/script.js`: Arquivo JavaScript contendo a lógica de codificação e decodificação das mensagens.

## Badge do Desafio

![Badge](https://github.com/FelipeG-Almeida/decodificador/assets/73674044/924fdd92-d140-4f1a-948d-0ed6c5fc4716)

---
