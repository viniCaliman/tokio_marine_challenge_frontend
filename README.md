# tokio_marine_challenge_frontend

Esse é o repositório do front-end do desafio proposto pela tokio marine.

# Como subir o front-end

Para subir o front-end será necessário fazer o clone do repositório e ter o node instalado.

Após clonar o repositório pode digitar o comando "cd" passando o caminho do repositório
 
```cmd

    cd C:\Repositorios\tokio_marine_challenge_frontend\frontend

```

Quando estiver na pasta do projeto execute o comando "npm install" para que as dependencias sejam instaladas

```npm

    npm install

```
Quando as dependencias estiverem instaladas, só precisa rodar o comando "npm run serve" para subir o front-end

```npm

    npm run serve

```

# Técnologias usadas

    "@fortawesome/fontawesome-free": "^6.5.2",
    "@popperjs/core": "^2.11.8",
    "bootstrap": "^5.3.3",
    "core-js": "^3.8.3",
    "v-calendar": "^3.1.2",
    "v-money3": "^3.24.1",
    "vue": "^3.2.13",
    "vue-router": "^4.0.3",
    "vue-the-mask": "^0.11.1"

# Decisões de arquitetura

Para o front-end tentei deixar tudo o mais componentizado possível afim de facilitar a manutenção e permitir maior reutilização dos componentes.
Além de tentar delegar a menor quantidade de responsabilidade possível nos mesmos

# Observações

O projeto tem margem para muitas melhorias de layout, incluindo uma tela de autenticação (A API já possui essa preparação) e outras funcionalidades, mas tentei deixar o projeto mais simples para ser entregue.

