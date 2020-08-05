import { ProductBusiness } from "../business/ProductBusiness";

export class ProductController {
    async getProduct(urlPage: string){
        try {
            const result = await (new ProductBusiness().getProduct(urlPage))
            console.log(JSON.stringify({
                "titulo": result.getTitle(),
                "preco": result.getPrice(),
                "imagem": result.getImage(),
                "coresDisponiveis": result.getAvaibleColors()
            }))
        } catch (err){
            console.log(err)
        }
    }
}