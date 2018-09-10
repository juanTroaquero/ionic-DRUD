import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ArticuloService } from '../services/articulo.services'
import { DetailtPage } from '../pages/detailt/detailt';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';


export const firebaseConfig = {
  apiKey: "AIzaSyB9spcBQuiv8ikkaHaGHTRO71iQnv51fLs",
  authDomain: "mycrud-7bb68.firebaseapp.com",
  databaseURL: "https://mycrud-7bb68.firebaseio.com",
  projectId: "mycrud-7bb68",
  storageBucket: "mycrud-7bb68.appspot.com",
  messagingSenderId: "550652123864"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailtPage,
    
    
  ],
  
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
AngularFireDatabaseModule,
AngularFireAuthModule,


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailtPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ArticuloService
  ]
})
export class AppModule {}
