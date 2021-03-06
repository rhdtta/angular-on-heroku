import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dropListService } from '../drop-list.service';

@Component({
  selector: 'rs-all-subcategories',
  templateUrl: './all-subcategories.component.html',
  styleUrls: ['./all-subcategories.component.css']
})
export class AllSubcategoriesComponent implements OnInit {
  allSubcategories = new Array();
  allSubcategoriesName = new Array();

  constructor(private activatedRoute: ActivatedRoute,
    private dropListService: dropListService) { }

  ngOnInit(){
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        let location = paramMap.get('location');
        let category = paramMap.get('category');

        this.allSubcategoriesName = [];
        this.allSubcategories = [];

        let droplist = this.dropListService.get();
        
        let i = droplist.findIndex((x: any) => x.name === location);
        let branches = droplist[i].branches;

        branches.forEach((x: any) => {
          x.categories.forEach((y: any) => {
            if(y.name === category){
              y.subcategories.forEach((z: any) => {
                if(this.allSubcategoriesName.indexOf(z.name) < 0){
                  this.allSubcategoriesName.push(z.name);
                  this.allSubcategories.push(z);
                }
              })
            }
          })
        })
        
        console.log('suball', this.allSubcategoriesName)
      })
    }
}
