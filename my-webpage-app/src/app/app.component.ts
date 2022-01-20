
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import images from '../assets/images.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-webpage-app';
  public imageList: {
    image:string,
    imagename: string,
    category:any, 
    price:number,
    giftFor:any,
    hover:boolean
  }[] = images;
  public gridImage: any = [];

  public category= ["Trending", "Lifestyle", "Home Decore", "Electronics", "Appliances"];
  public giftForOptions = ["All", "Men", "Women", "Kids", "Teen"];

  filterForm = new FormGroup({
	  category: new FormControl(this.category[0]),
    giftFor: new FormControl(this.giftForOptions[0]),
    sliderRanger: new FormControl(10),
    divOnHover: new FormControl("See More")
	});

  ngOnInit() {
    this.imageList.forEach(obj => {
      if((obj.giftFor.toString().includes(this.filterForm.value['giftFor']) && 
      (obj.category.toString().includes(this.filterForm.value['category'])) &&
      (obj.price <= this.filterForm.value['sliderRanger']))) {
        this.gridImage.push(obj);
      }
    });
  }

  ngDoCheck() {
    let newImageList: any = [];
    this.imageList.forEach(obj => {
      if((obj.giftFor.toString().includes(this.filterForm.value['giftFor']) && 
      (obj.category.toString().includes(this.filterForm.value['category'])) &&
      (obj.price <= this.filterForm.value['sliderRanger']))) {
        newImageList.push(obj);
      }
    });
    this.gridImage = newImageList;
  }

  mouseHover(item:any) {
    item['hover'] = true;
  }

  mouseOut(item:any) {
    item['hover'] = false;
  }
} 