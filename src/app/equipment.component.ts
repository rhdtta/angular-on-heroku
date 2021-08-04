import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rs-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  @Input() branch: any
  constructor() { }

  ngOnInit(): void {
  }

}
