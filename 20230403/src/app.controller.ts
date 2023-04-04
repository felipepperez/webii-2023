import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { FirebaseService } from './providers/firebase/firebase.service';

@Controller()
export class AppController {
  constructor(private readonly firebaseService: FirebaseService) { }

  @Get()
  getProducts(): any {
    return this.firebaseService.getProducts();
  }

  @Post('/create')
  createProduct(@Body() body: any): any {
    return this.firebaseService.createProduct(body);
  }

  @Post('/update')
  updateProduct(@Body() body: any): any {
    return this.firebaseService.updateProduct(body);
  }

  @Delete('/delete')
  deleteProduct(@Body() body: any): any {
    return this.firebaseService.deleteProduct(body);
  }
}
