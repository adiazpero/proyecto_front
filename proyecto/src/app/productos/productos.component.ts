import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any[];


  constructor(private productosService: ProductosService, private activatedRoute: ActivatedRoute, private router: Router) {

  }


  ngOnInit() {
    //Productos => ver todos
    this.productosService.getAll()
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err)
      });



    //Productos: filtrar por categorias => camaras/objetivos/accesorios
    this.activatedRoute.params.subscribe(async params => {
      //console.log(params)
      const response = await this.productosService.getByCategoria(params.categoria);
      this.productos = response;
      console.log(response)
    });
  }



  async manejarCheckMarca($event) {
    const response = await this.productosService.getByMarca($event.target.value);
    this.productos = response;
    //console.log(response)
  }


  async manejarCheckResolucion($event) {
    var response = [];
    switch (parseInt($event.target.value)) {
      case 0:
        response = await this.productosService.getByResolucion(12, 17);
        this.productos = response;
        console.log(response);
        break;

      case 1:
        response = await this.productosService.getByResolucion(18, 25);
        this.productos = response;
        console.log(response);
        break;

      case 2:
        response = await this.productosService.getByResolucion(30, 36);
        this.productos = response;
        console.log(response);
        break;

      default:
        response = await this.productosService.getAll();
        this.productos = response;
    };
  }




  async manejarCheckIso($event) {
    var response = [];
    switch (parseInt($event.target.value)) {
      case 0:
        response = await this.productosService.getByIso(6300, 12900);
        this.productos = response;
        console.log(response);
        break;

      case 1:
        response = await this.productosService.getByIso(25500, 51300);
        this.productos = response;
        console.log(response);
        break;

      case 2:
        response = await this.productosService.getByIso(100000, 521300);
        this.productos = response;
        console.log(response);
        break;

      default:
        response = await this.productosService.getAll();
        this.productos = response;
    };
  }

  //Pendiente comprobacion

  async manejarCheckMarcaObjetivo($event) {
    const response = await this.productosService.getByMarcaObjetivo($event.target.value);
    this.productos = response;
    // console.log(response)
  }



  async manejarCheckFocal($event) {
    var response = [];
    switch (parseInt($event.target.value)) {
      case 0:
        response = await this.productosService.getByFocal(15, 25);
        this.productos = response;
        console.log(response);
        break;

      case 1:
        response = await this.productosService.getByFocal(25, 51);
        this.productos = response;
        console.log(response);
        break;

      case 2:
        response = await this.productosService.getByFocal(52, 86);
        this.productos = response;
        console.log(response);
        break;

      default:
        response = await this.productosService.getAll();
        this.productos = response;
    };
  }




}
