export class NewProductResponse {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public price: number
    ){}
}