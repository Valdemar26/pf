import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public mobileNav = false;
  public popupMenu = false;
  public barEffect = false;

  constructor() { }

  ngOnInit() {}

}
