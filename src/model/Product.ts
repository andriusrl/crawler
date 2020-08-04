export class Product {
    constructor(
        private title: string,
        private price: number,
        private image: string,
        private avaibleColors?: string[] | null
    ) { }
    
    public getTitle(): string {
        return this.title
    }

    public getPrice(): number {
        return this.price
    }

    public getImage(): string {
        return this.image
    }

    public getAvaibleColors(): string[] | null | undefined{
        return this.avaibleColors
    }
}