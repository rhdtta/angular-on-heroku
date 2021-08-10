import { Component, OnInit } from '@angular/core';
import { dropListService } from '../drop-list.service';

@Component({
  selector: 'rs-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  droplist: any;
  constructor(private dropListService: dropListService) { }

  ngOnInit(){
    this.droplist = this.dropListService.get();
  }
}
