import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contents-item',
  templateUrl: './contents-item.component.html',
  styleUrls: ['./contents-item.component.css']
})
export class ContentsItemComponent implements OnInit {
  public isSec1Collapsed = true;
  public isSec2Collapsed = true;
  public isSec3Collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
