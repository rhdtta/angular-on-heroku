import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rs-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(5)
  }

}
