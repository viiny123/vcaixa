# Introduction 
Esse projeto consiste em uma api com NodeJS + TypeScript + MongoDB

# Getting Started
Esses são os passos para rodar a aplicação tanto backend quanto front end.
1. abrir projeto no vscode e rodar o comando 'yarn' na raiz do projeto para instalar as dependências
2. para subir o projeto rodar o comando 'yarn start', a api irá subir no endereço http://localhost:3000/
3. para auxilio estou compartilhando uma collaction do postman com as requisições: https://www.getpostman.com/collections/4734518b8a79e905b463


# improvements
Tem muitos pontos a serem melhorados.
Por minha linguagem de backend de dominio ser o c#/.net core eu não quis inventar moda no node, fiz o mais simples possível
Utilizei um MVC bem simples. Mas meu desejo era utilizar um DDD + CQRS.
Eu poderia ter reutilizado mais código, retirado as responsabilidades dos controllers e criado serviços reutilizaveis.
Vocês vão ver que algumas classes ficaram com mais responsabilidades então não apliquei muito o SOLID, mas tentei deixar o código bem legivel e simples
Gostaria de ter utilizado Injeção de dependências mas não me arrisquei no node.
Esse código é resultado de 3 dias de estudo, onde trabalho o dia todo e tive que desenvolve-lo a noite.