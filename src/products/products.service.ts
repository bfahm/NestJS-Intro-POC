import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";
import { NewProductRequest } from "./viewModels/product.viewModel.newProductRequest";
import { NewProductResponse } from "./viewModels/product.viewModel.newProductResponse";
import { ProductPatchRequest } from "./viewModels/product.viewModel.productPatchRequest";

@Injectable()
export class ProductsService {
    products: Product[] = [];

    insertProduct(request: NewProductRequest) {
        var productsCount = this.products.length;

        const newProduct = new Product(request.title, request.description, request.price, productsCount + 1);
        this.products.push(newProduct);
        
        return new NewProductResponse(
            newProduct.id, 
            newProduct.title, 
            newProduct.description, 
            newProduct.price
        );
    }

    getAllProducts(): Product[] {
        // Creates a new array with the same elements to prevent changes in the original array
        return [...this.products]; 
    }

    getProductById(id : number): Product {
        const [product, _] = this.FindProduct(id);
        return product;
    }

    updateProductById(id : number, request: ProductPatchRequest): Product {
        const [product, productIndex] = this.FindProduct(id);
        const updatedProduct = {...product};

        updatedProduct.title = request.title || product.title;
        updatedProduct.description = request.description || product.description;
        updatedProduct.price = request.price || product.price;

        this.products[productIndex] = updatedProduct;

        return updatedProduct;
    }

    deleteProductById(id: number) {
        const [product, productIndex] = this.FindProduct(id);
        this.products.splice(productIndex, 1);
    }

    private FindProduct(id: number) : [Product, number] {
        const productIndex = this.products.findIndex(p => p.id == id);
        const product = this.products[productIndex];

        if (!product) {
            throw new NotFoundException("Product not found");
        }
        return [product, productIndex];
    }
}