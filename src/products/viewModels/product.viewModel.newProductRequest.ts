export class NewProductRequest {
    constructor(
        public title: string,
        public description: string,
        public price: number
    ){}
}