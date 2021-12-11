import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Product } from "./product.model";
import { NewProductRequest } from "./viewModels/product.viewModel.newProductRequest";
import { NewProductResponse } from "./viewModels/product.viewModel.newProductResponse";
import { ProductsService } from "./products.service";
import { Logger } from '@nestjs/common';
import { ProductPatchRequest } from "./viewModels/product.viewModel.productPatchRequest";

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {}

    @Post()
    addProduct(@Body() request : NewProductRequest) : NewProductResponse {
        return this.productsService.insertProduct(request);
    }

    @Get()
    getProducts() : Product[] {
        return this.productsService.getAllProducts();
    }

    @Get(":id")
    getProduct(@Param('id') id: number) : Product {
        if(id === 1){
            // For some reason, this would never match
            Logger.warn("Matched by ===");
        }
        
        if(id == 1){
            // This always matches (of course only if the param is 1)
            Logger.error("==");
        }

        return this.productsService.getProductById(id);
    }

    @Patch(":id")
    updateProduct(@Param('id') id: number, @Body() request : ProductPatchRequest) : Product {
        return this.productsService.updateProductById(id, request);
    }

    @Delete(":id")
    deleteProduct(@Param('id') id: number, ) {
        return this.productsService.deleteProductById(id);
    }
}