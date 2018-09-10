import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArticuloService } from '../../services/articulo.services';


/**
 * Generated class for the DetailtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailt',
  templateUrl: 'detailt.html',
})
export class DetailtPage {

  //articulo = { ref:null, nomp:null, precio:null, descrip:null };
  articulo:any = { ref:null, nomp:null, precio:null, descrip:null };
  ref = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public articuloService : ArticuloService ) {
    this.ref = navParams.get('ref');

    if(this.ref != 0){
      //this.articulo = articuloService.getArticulo(this.ref);
      this.articuloService.getArticulo(this.ref).subscribe(articulo=> {
          this.articulo=articulo;
      });﻿
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailtPage');
  }

  addArticulo(){
    if(this.ref != 0){
      this.articuloService.editArticulo(this.articulo);
      alert('Artículo editado con éxito!');
    }else{
      this.articuloService.createArticulo(this.articulo);
      alert('Nuevo artículo registrado con éxito!');
    }
    this.navCtrl.pop();
  }

  delArticulo(){
    this.articuloService.deleteArticulo(this.articulo);
    alert('Artículo eliminado con éxito!');
    this.navCtrl.pop();
  }

}
