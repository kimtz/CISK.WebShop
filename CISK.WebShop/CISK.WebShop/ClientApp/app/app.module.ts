
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import {ProductsComponent} from './components/products/products.component';
import { ShoppingcartService } from './components/shoppingcart/shoppingcart.service'
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component'

var DBconfig = {
    apiKey: "AIzaSyAZmESyxia6654uUbnN79qPHQY9EKXpzj8",
    authDomain: "myfirebaseproject-bed6a.firebaseapp.com",
    databaseURL: "https://myfirebaseproject-bed6a.firebaseio.com",
    storageBucket: "myfirebaseproject-bed6a.appspot.com",
    messagingSenderId: "382128963127"
};

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        ProductsComponent,
        ShoppingcartComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        AngularFireModule.initializeApp(DBconfig),
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'products', component: ProductsComponent },
            { path: 'cart', component: ShoppingcartComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [ShoppingcartService]
})

export class AppModule {
}
