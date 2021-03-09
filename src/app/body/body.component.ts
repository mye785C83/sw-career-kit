import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  bigData: boolean = false;
  hologram: boolean = false;
  smartSensor: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onShowBigData(event: WheelEvent): void{
    console.log(event.target);
    // @ts-ignore
    this.bigData = true;
    this.hologram = false;
    this.smartSensor = false;
  }

  onShowHologram(event: WheelEvent): void{
    console.log(event.target);
    // @ts-ignore
    this.bigData = false;
    this.hologram = true;
    this.smartSensor = false;
  }

  onShowSmartSensor(event: WheelEvent): void{
    console.log(event.target);
    // @ts-ignore
    this.bigData = false;
    this.hologram = false;
    this.smartSensor = true;
  }

}
