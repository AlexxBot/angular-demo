import { Component } from '@angular/core'

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //BIDINGS
  nombre: string = 'Alex'

  imprimir(){
    console.log('mi nombre es: '+ this.nombre)
    this.nombre ='Juan' 
  }
}
