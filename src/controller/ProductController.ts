import { ProductBusiness } from "../business/ProductBusiness";

export class ProductController {
    async getProduct(urlPage: string){
        try {
            const result = new ProductBusiness().getProduct(urlPage)
            console.log(await result)
        } catch (err){
            console.log(err)
        }
    }
}