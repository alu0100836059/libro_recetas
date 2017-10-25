import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


/* Definimos una interfaz para hacer o imponer un tipo a la respuesta, sino,
  no podríamos acceder/indexar las propiedades del mismo, i.e. data.nombre no
  sería posible. Esta interfaz puede ser definida en archivo a parte pero
  para este ejemplo y por simplificar lo dejaremos aquí.
*/

// interface UserResponse {
//   id: string,
//   name: string
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  results: string[];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.http.get("http://localhost:4250").subscribe(data => {
      this.results = data['results'];
    })
  }
  // ngOnInit(): void {
  //   // Casteamos la respuesta "hacia" un tipo, nuestra interface
  //   this.http.get<UserResponse>('http://localhost:4250').subscribe(data => {
  //     console.log(data);
  //     console.log("User Id: " + data.id);
  //     console.log("User Name: " + data.name);
  //   })
  // }
}
