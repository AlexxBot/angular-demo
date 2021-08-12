import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any[] = []

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

    this.listarProducts()
  }

  listarProducts(): void{
    this.productService.getProducts().subscribe((lista) => {
      //console.log(lista)
      this.products = lista;
    });
  }
  eliminar(id: string): void {
    console.log("entro al metodo eliminar con este id : ", id)
    this.productService.deleteProduct(id).subscribe()
  }

  actualizar(id : string): void {
    console.log("entro al metodo de actualizar", id)
    this.router.navigate(['/products/'+ id])
  }

}
