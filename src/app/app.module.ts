import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import {ProductDetailsService} from './services/product-details.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterBarComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [ProductDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
