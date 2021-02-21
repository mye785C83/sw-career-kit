import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShow = true;

  constructor() { }

  ngOnInit(): void {
  }

  onShowDescription(){
    this.isShow = !this.isShow;
  }
}
