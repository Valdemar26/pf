import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [IndexComponent]
})
export class MainModule { }
