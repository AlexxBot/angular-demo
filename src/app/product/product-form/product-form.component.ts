import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  submitted: boolean = false;
  product: Product
  id: string
  constructor(private productService: ProductService, private route :ActivatedRoute) { 
    console.log()
  }

  ngOnInit(){
    /* this.product._id = '';
    this.product.name = '';
    this.product.category = '';
    this.product.price = 0;
    this.product.imgURL =''; */

    const routeParams = this.route.snapshot.paramMap;
    this.id = String(routeParams.get('id'));
    //console.log('este es el id : ', this.id)

    this.productService.recuperarProduct(this.id).subscribe((product) => {
      console.log('esta es la respuesta del recuperar product ', product)
      this.product = product
    })

    
  }

}
