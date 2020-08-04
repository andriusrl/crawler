import fetch, {
    Blob,
    Headers,
    Request,
    RequestInit,
    Response,
    FetchError
} from "node-fetch";
import { URL } from "url";
import { Agent } from "http";


const urlApi: string = `https://apigateway.centauro.com.br/ecommerce/v4.3/produtos?codigoModelo=`
// const urlPage = Number(process.argv[2]);
const urlPage: string = `https://www.centauro.com.br/tenis-nike-zoom-rival-fly-masculino-934745.html?cor=2R7`

const position1: number = urlPage.indexOf(".br/", 1) + 3
const position2: number = urlPage.indexOf(".html?", 1) + 5

const requestUrl: string = urlApi + urlPage.slice(position1, position2)

console.log(`posicao1: ${position1} e 2: ${position2}`)

console.log(requestUrl)

// getProduct(`https://apigateway.centauro.com.br/ecommerce/v4.3/produtos?codigoModelo=/tenis-nike-zoom-rival-fly-masculino-934745.html`)

// async function getProduct(urlPage: string): Promise<any> {
//     const response = await fetch(urlPage, { method: 'GET', headers: {Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGlnYXRld2F5LmRjLnNibmV0Iiwic3ViIjoid3d3LmNlbnRhdXJvLmNvbS5iciIsImlhdCI6MTUxNjIzOTAyMiwiY2xpZW50X2lkIjoiZTU3Nzk3ZDYtN2Y3Mi00MzMwLWJjOTItOTM3MWRiNjI0YjQ5In0.Mc2PpOJwltFymE3He95TpGTBPDAbhmxNw-cJEsYTghnGefWwhyiD--EopZquF2uH0bdF7K95SkK5RNaZ05Mh3ShuTbqPtD8D7kSr_zQO80nAyIHleLwQzrqrn5GF9piwVSt7YfVDWxj8rNA5HlXQpdTuu0vEUjHQk4hpapB8MtmE1qg9-bymyhD4Hm7x2XHMa-4AtPxhBotPBUwQKWNTbh3OUbCAETknA2tnwfFCSSS3nXot6Icuwx3hvtnkFTk3XitjPwLZ8xTlIJ5Uyk8MjjdG-poMFHKLrdvF7YzhAHUoNn-9Y91jIaYrSA_hDjgb-1y25Jw7UR_lO5F3ceSimg`}})
//     .then((res) => {
//         // console.log(res.json())
//        return res.json()
//   })

//   console.log(response.disponibilidade.cores)
// }