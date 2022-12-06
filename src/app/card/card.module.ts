import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardExampleComponent } from './card-example/card-example.component';
import { SharedModule } from '../shared/shared.module';
import { CardIndexComponent } from './card-index/card-index.component';
import { CardRoutingModule } from './card-routing.module';



@NgModule({
  declarations: [
    CardExampleComponent,
    CardIndexComponent],
  imports: [
    CommonModule,
    SharedModule,
    CardRoutingModule
  ]
})
export class CardModule { }
