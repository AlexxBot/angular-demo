import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string  =  'https://api-rest-auth-node.herokuapp.com/products'

  constructor(private httpClient : HttpClient) { 
  }


  getProducts(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  saveProduct(product: Product): Observable<any> {
    return this.httpClient.post(this.url, product)
  }

  updateProduct(product: Product): Observable<any>{
    return this.httpClient.put(this.url, product)
  }

  recuperarProduct(id: string): Observable<any> {
    return this.httpClient.get(`${this.url}/${id}`)
  }

  deleteProduct(id: string):Observable<any>{
    return this.httpClient.delete(`${this.url}/${id}`)
  }
}
