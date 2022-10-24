import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { AllBeersComponent } from './pages/all-beers/all-beers.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { DetailsComponent } from './pages/details/details.component';
import { CustomersAlsoBoughtComponent } from './pages/customers-also-bought/customers-also-bought.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { BeerItemComponent } from './components/beer-item/beer-item.component';
import { BadgeSaleComponent } from './components/badge-sale/badge-sale.component';
import { BadgeProductOfTheWeekComponent } from './components/badge-product-of-the-week/badge-product-of-the-week.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { FilterTagComponent } from './components/filter-tag/filter-tag.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { SearchFilterPipe } from './components/pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllBeersComponent,
    ShoppingCartComponent,
    DetailsComponent,
    CustomersAlsoBoughtComponent,
    WishlistComponent,
    BeerItemComponent,
    BadgeSaleComponent,
    BadgeProductOfTheWeekComponent,
    CheckboxComponent,
    FilterBarComponent,
    FilterTagComponent,
    HomeComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
