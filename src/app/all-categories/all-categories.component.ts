import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dropListService } from '../drop-list.service';

@Component({
  selector: 'rs-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {
  allCategories= new Array();
  allCategoriesName = new Array();
  constructor(private activatedRoute: ActivatedRoute,
    private dropListService: dropListService) { }

  ngOnInit(){
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        let location = paramMap.get('location');
        
        let droplist = this.dropListService.get();
        
        let i = droplist.findIndex((x: any) => x.name === location);
        let branches = droplist[i].branches;

        this.allCategoriesName = [];
        this.allCategories = [];
        branches.forEach((x: any) => {
          x.categories.forEach((y: any) => {
            if(this.allCategoriesName.indexOf(y.name) < 0){
              this.allCategoriesName.push(y.name);
              this.allCategories.push(y);
            }
          })
        })
        // console.log('all', this.allCategories)
        

      })
  }

}
