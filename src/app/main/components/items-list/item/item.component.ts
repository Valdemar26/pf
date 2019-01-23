import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../../../../services/toastr.service';
import { IRestaurant } from '../../../../models/restaurant';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  buttonText = 'Замовити';
  orderText = 'В корзину';
  continueText = 'Продовжити';
  makeOrder = false;

  @Input() item;

  restaurants: IRestaurant[] = [
    {
      'id': 7,
      'name': 'Брускета з ростбіфом - 185 г',
      'description': 'Рівномірне співвідношення білків і вуглеводів та оптимальна кількість жирів сприяють підтримці комфортної ваги. Продуманий раціон дозволяє отримати близько 2000 ккал на добу.',
      'price': 94,
      'imageUrl': '../../../../assets/img/restourant/bryskety/brysketa-rostbif.jpg'
    }
  ];

  constructor(
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  orderProduct() {
    const myArray =
      { id: 1,
        name: 'Брускета з ростбіфом - 185 г',
        price: this.item * 94 || 94,
        pieces: (this.item * 94 || 94) / 94,
        imageUrl: '/assets/img/restourant/bryskety/brysketa-rostbif.jpg'
      };
    let get_item = [];
    const data = localStorage.getItem('restaurant');
    get_item = JSON.parse(data) || [];
    if (get_item.length === 0) {
      localStorage.setItem('restaurant', JSON.stringify([myArray]));
      this.toastService.showToast(
        'success',
        `Замовлення на ${myArray.name} кількістю ${myArray.pieces} шт. додано!`,
        3000);
      this.makeOrder = true;
    } else {
      get_item.push(myArray);
      localStorage.setItem('restaurant', JSON.stringify(get_item));
      this.toastService.showToast(
        'success',
        `Замовлення на ${myArray.name} кількістю ${myArray.pieces} шт. додано!`,
        3000);
      this.makeOrder = true;
    }
  }

}
