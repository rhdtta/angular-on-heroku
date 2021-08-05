import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rs-category-window',
  templateUrl: './category-window.component.html',
  styleUrls: ['./category-window.component.css']
})
export class CategoryWindowComponent implements OnInit {
  @Input() category: any;
  constructor() { }

  ngOnInit(): void {
  }

}
