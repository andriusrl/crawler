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
import { Product } from "./model/Product";
import { offData } from "../off";


const urlApi: string = `https://apigateway.centauro.com.br/ecommerce/v4.3/produtos?codigoModelo=`
// const urlPage = Number(process.argv[2]);
const urlPage: string = `https://www.centauro.com.br/tenis-nike-zoom-rival-fly-masculino-934745.html?cor=2R7`

const position1: number = urlPage.indexOf(".br/", 1) + 3
const position2: number = urlPage.indexOf(".html", 1) + 5
const requestUrl: string = urlApi + urlPage.slice(position1, position2)

main()

async function main(){
    console.log(await getProduct(requestUrl))
}

async function getProduct(urlPage: string): Promise<any> {
        const response = await fetch(urlPage, { method: 'GET', headers: {Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGlnYXRld2F5LmRjLnNibmV0Iiwic3ViIjoid3d3LmNlbnRhdXJvLmNvbS5iciIsImlhdCI6MTUxNjIzOTAyMiwiY2xpZW50X2lkIjoiZTU3Nzk3ZDYtN2Y3Mi00MzMwLWJjOTItOTM3MWRiNjI0YjQ5In0.Mc2PpOJwltFymE3He95TpGTBPDAbhmxNw-cJEsYTghnGefWwhyiD--EopZquF2uH0bdF7K95SkK5RNaZ05Mh3ShuTbqPtD8D7kSr_zQO80nAyIHleLwQzrqrn5GF9piwVSt7YfVDWxj8rNA5HlXQpdTuu0vEUjHQk4hpapB8MtmE1qg9-bymyhD4Hm7x2XHMa-4AtPxhBotPBUwQKWNTbh3OUbCAETknA2tnwfFCSSS3nXot6Icuwx3hvtnkFTk3XitjPwLZ8xTlIJ5Uyk8MjjdG-poMFHKLrdvF7YzhAHUoNn-9Y91jIaYrSA_hDjgb-1y25Jw7UR_lO5F3ceSimg`}})
        .then((res) => {
            // console.log(res.json())
           return res.json()
      })

    //codigos atras estão comentados porque estou com problemas na internet e estou usando um mock de dados
    // console.log(offData.disponibilidade.cores)
    // const urls: = response.imagens[0].urls
    // console.log(offData.disponibilidade.cores.map(cor=>{return cor.nomeCor}))
    return new Product(
        response.disponibilidade.nome,
        parseFloat(response.precos[0].valor),
        response.imagens[0].urls.filter((image: { resolucao: string; })=>{return image.resolucao==="500x500"})[0].url,
        response.disponibilidade.cores.map((cor: { nomeCor: any; })=>{return cor.nomeCor})
    )
}

// const teste = [
//     {
//         testando: "asdasda"
//     },
//     {
//         testando: "2"
//     },
//     {
//         testando: "3"
//     },
// ]

// console.log(teste.filter(elemento=>elemento.testando==="2"))