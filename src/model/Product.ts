export class Product {
    constructor(
        private titulo: string,
        private preco: number,
        private imagem: string,
        private coresDisponiveis?: string[] | null
    ) { }
    
    public getTitle(): string {
        return this.titulo
    }

    public getPrice(): number {
        return this.preco
    }

    public getImage(): string {
        return this.imagem
    }

    public getAvaibleColors(): string[] | null | undefined{
        return this.coresDisponiveis
    }
}