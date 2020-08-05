import { ProductController } from "./controller/ProductController";

const urlPage: string = process.argv[2] as string;

urlPage ? new ProductController().getProduct(urlPage) : console.log("Coloque uma url no argumento")
