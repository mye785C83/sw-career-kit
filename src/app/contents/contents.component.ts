import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {
  @Input() bigData: boolean = false;
  @Input() smartSensor: boolean = false;
  @Input() hologram: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
