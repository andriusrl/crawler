# crawler
Captura informações de preço e produto da loja centauro

## Como rodar a aplicação
Crie um arquivo .env com as configurações da api, se tiver baixado o zip com o .env incluso pule esse passo
```
URL_API = https://apigateway.centauro.com.br/ecommerce/v4.3/produtos?codigoModelo=

AUTHORIZATION = Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGlnYXRld2F5LmRjLnNibmV0Iiwic3ViIjoid3d3LmNlbnRhdXJvLmNvbS5iciIsImlhdCI6MTUxNjIzOTAyMiwiY2xpZW50X2lkIjoiZTU3Nzk3ZDYtN2Y3Mi00MzMwLWJjOTItOTM3MWRiNjI0YjQ5In0.Mc2PpOJwltFymE3He95TpGTBPDAbhmxNw-cJEsYTghnGefWwhyiD--EopZquF2uH0bdF7K95SkK5RNaZ05Mh3ShuTbqPtD8D7kSr_zQO80nAyIHleLwQzrqrn5GF9piwVSt7YfVDWxj8rNA5HlXQpdTuu0vEUjHQk4hpapB8MtmE1qg9-bymyhD4Hm7x2XHMa-4AtPxhBotPBUwQKWNTbh3OUbCAETknA2tnwfFCSSS3nXot6Icuwx3hvtnkFTk3XitjPwLZ8xTlIJ5Uyk8MjjdG-poMFHKLrdvF7YzhAHUoNn-9Y91jIaYrSA_hDjgb-1y25Jw7UR_lO5F3ceSimg
```

No terminal navegue para dentro do diretório raiz do projeto
```
cd crawler
```
Instale as dependências
```
npm install
```
Execute a aplicação passando a url por argumento depois do "npm start"
```
npm start https://www.centauro.com.br/tenis-nike-zoom-rival-fly-masculino-934745.html?cor=2R7
```

### Linguagens e bibliotecas utilizadas

- [Typescript](https://www.typescriptlang.org/docs/home.html): versão 3.9.7
- [dotenv](https://github.com/motdotla/dotenv): versão 8.2.0
- [node-fetch](https://www.npmjs.com/package/node-fetch): versão 2.6.0

### 