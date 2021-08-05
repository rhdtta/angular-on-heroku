import { keyframes } from '@angular/animations';
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
  category= new Array();
  branches = new Array();
  constructor(private activatedRoute: ActivatedRoute,
    private dropListService: dropListService) { }
    
    ngOnInit(){
      this.droplist = this.dropListService.get();
      
      this.activatedRoute.paramMap
      .subscribe(paramMap => {
        this.branches = new Array();
        // this.branches = [];
        this.location = paramMap.get('location');
        this.branch = paramMap.get('branch');
        
        if(this.branch == null){

          let location; //holds the location array
          for(var i=0; i<this.droplist.length; i++){
            if(this.droplist[i].name === this.location){
              location = this.droplist[i];
            }
          }

          this.branches = location.branches; //holds the branch array
          
          


          let categories_ = new Array(); // saves the names of distinct categories 
          for(let j = 0; j<this.branches.length; j++){
            let categories = this.branches[j].categories; //hold the categories of a particular branch
            
            // for(let k=0; k<categories.length; k++){
            //   if(categories_.indexOf(categories[k].name)<0){
            //     this.category.push(categories[k]);
            //     categories_.push(categories[k].name);
            //   }else{
            //     let i = this.category.findIndex(x => x.name === categories[k].name);
                
            //     categories[k].subcategories.forEach(x => this.category[i].subcategory.push(x));
            
            //   }
            // }
          }

          

          
          
          
        }
        else{
          let i = this.droplist.findIndex((x: any) => x.name === this.location);
          let j = this.droplist[i].branches.findIndex((y:any)=> y.name === this.branch);
          this.branches.push(this.droplist[i].branches[j])
        }
      })

      


    }
    
    

}
