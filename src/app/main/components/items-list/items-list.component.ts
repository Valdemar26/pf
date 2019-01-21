import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  products;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getItemsList();
  }

  getItemsList(): void {
    this.dataService.getItemsFromJsonFile()
      .subscribe(
        (data: any) => {
          this.products = data;
          console.log('products: ', this.products);
        },
        error => console.log('items-list error: ', error)
      );
  }

}
