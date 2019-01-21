import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { MainRoutingModule } from './main-routing.module';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemComponent } from './components/items-list/item/item.component';
import { DataService } from './components/items-list/data.service';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [
    IndexComponent,
    ItemsListComponent,
    ItemComponent
  ],
  providers: [
    DataService
  ]
})
export class MainModule { }
