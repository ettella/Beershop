import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { AllBeersComponent } from './pages/all-beers/all-beers.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { DetailsComponent } from './pages/details/details.component';
import { CustomersAlsoBoughtComponent } from './pages/customers-also-bought/customers-also-bought.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { InputComponent } from './components/input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllBeersComponent,
    ShoppingCartComponent,
    DetailsComponent,
    CustomersAlsoBoughtComponent,
    WishlistComponent,
    SidebarComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
