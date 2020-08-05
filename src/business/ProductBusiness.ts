import fetch from "node-fetch";
import { Product } from "../model/Product";
import dotenv from "dotenv";

dotenv.config();

export class ProductBusiness {
    public async getProduct(urlPage: string): Promise<Product> {
        const position1: number | undefined = urlPage?.indexOf(".br/", 1) + 3
        const position2: number | undefined = urlPage?.indexOf(".html", 1) + 5
        const requestUrl: string = process.env.URL_API + urlPage?.slice(position1, position2)

        const response = await fetch(requestUrl, { method: 'GET', headers: { Authorization: process.env.AUTHORIZATION as string } })
            .then((res) => {
                return res.json()
            })

        return new Product(
            response.disponibilidade.nome,
            parseFloat(response.precos[0].valor.replace(',', '.')),
            response.imagens[0].urls.filter((image: { resolucao: string; }) => { return image.resolucao === "500x500" })[0].url,
            response.disponibilidade.cores.map((cor: { nomeCor: string; }) => { return cor.nomeCor })
        )

    }
}