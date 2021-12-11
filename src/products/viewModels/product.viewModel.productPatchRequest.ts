export class ProductPatchRequest {
    constructor(
        public title: string,
        public description: string,
        public price: number
    ){}
}