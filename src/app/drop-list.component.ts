import { Component, OnInit } from '@angular/core';
import { dropListService } from './drop-list.service';
@Component({
  selector: 'rs-drop-list',
  templateUrl: './drop-list.component.html',
  styleUrls: ['./drop-list.component.css']
})
export class DropListComponent implements OnInit {
  droplist: any;
  constructor(private dropListService: dropListService) { }

  ngOnInit(){
    this.droplist = this.dropListService.get();

    
    // for(let i = 0; i<this.droplist.length; i++){
    //   this.locations.push(this.droplist[i].name);
    // }
    // // console.log(this.locations);

    // for(let i = 0; i<this.locations.length; i++){
    //   console.log(this.droplist[this.locations[i]].);
    // }

  }
  

}
