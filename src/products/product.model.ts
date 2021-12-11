export class Product {
    public id: number;
    public title: string;
    public description: string;
    public price: number;
    
    constructor(title: string, description: string, price: number, id?: number) {
        this.title = title;
        this.description = description;
        this.price = price;
        
        if (!id) {
            this.id = Math.floor(Math.random() * 1000) // generate random id with maximum of 1000
        }else{
            this.id = id;
        }
    }
}