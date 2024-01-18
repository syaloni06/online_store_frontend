import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SuccessfulComponent } from './successful/successful.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminproductComponent } from './adminproduct/adminproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SuccessfulComponent,
    ProductComponent,
    AdminproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'successful', component:SuccessfulComponent},
      {path: 'home', component:HomeComponent},
      {path: 'product', component:ProductComponent},
      {path: 'admin', component:AdminproductComponent}
    ])
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
