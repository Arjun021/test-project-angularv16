import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PublicLayoutComponent } from './public-layout.component';
import { PublicRoutingModule } from './public-layout-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';



@NgModule({
  declarations: [
    PublicLayoutComponent,
    HomeComponent,
    AboutComponent,
    PricingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PublicRoutingModule
  ]
})
export class PublicLayoutModule { }
