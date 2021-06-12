import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductReviewComponent } from './pages/product-review/product-review.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { ActionBarComponent } from './shared/action-bar/action-bar.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LoginComponent } from './auth/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsService } from './services/products.service';
import { StarReviewComponent } from './shared/star-review/star-review.component';
import { CartService } from './services/cart.service';
import { NotificationComponent } from './shared/notification/notification.component';
import { NotificationService } from './services/notification.service';
import { RouterService } from './services/router.service';
import { AddItemComponent } from './components/add-item/add-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'cart-details', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    ProductDetailsComponent,
    CartComponent,
    ProductReviewComponent,
    AddReviewComponent,
    ActionBarComponent,
    CheckoutComponent,
    LoginComponent,
    ProductCardComponent,
    StarReviewComponent,
    NotificationComponent,
    AddItemComponent
  ],
  bootstrap: [AppComponent],
  providers: [ProductsService, CartService, NotificationService, RouterService]
})
export class AppModule {}
