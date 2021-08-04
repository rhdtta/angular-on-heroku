import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dropListService } from './drop-list.service';

@Component({
  selector: 'rs-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  location: any;
  branch: any;
  droplist: any;
  branches = new Array();
  constructor(private activatedRoute: ActivatedRoute,
    private dropListService: dropListService) { }

  ngOnInit(){
    this.droplist = this.dropListService.get();

    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        this.branches = [];
        this.location = paramMap.get('location');
        this.branch = paramMap.get('branch');
        
        if(this.branch == null){

          let location; //holds the location object
          for(var i=0; i<this.droplist.length; i++){
            if(this.droplist[i].name === this.location){
              location = this.droplist[i];
            }
          }

          this.branches = location.branches; //holds the branch object
          console.log(this.branches)
          


          // let categories_ = new Array(); // saves the names of distinct categories 
          // for(let j = 0; j<branches.length; j++){
          //   let categories = branches[j].categories; //hold the categories of a particular branch
            
          //   for(let k=0; k<categories.length; k++){
          //     if(categories_.indexOf(categories[k].name)<0){
          //       this.branches.push(categories[k]);
          //       categories_.push(categories[k].name);
          //     }
          //   }
          // }
          
          
          
        }
      })

      // console.log(this.droplist);


    }
    
    

}
