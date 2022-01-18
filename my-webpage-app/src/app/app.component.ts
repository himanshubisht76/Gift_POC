import { Component } from '@angular/core';
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
    category:string, 
    price:number,
    giftFor:any
  }[] = images;
  public gridImage: any = [];
  public categorySelected: string = "";
  public giftForOptionsSelected: string = "";

  public category= ["Trending", "Lifestyle", "Home Decore", "Electronics", "Appliances"];
  public giftForOptions = ["All", "Men", "Women", "Kids", "Teen"];

  ngOnInit() {
    this.gridImage = this.imageList;
    this.categorySelected = this.category[0];
    this.giftForOptionsSelected = this.giftForOptions[0];
  }

  filterByGiftFor(event:any) {
    let newImageList: any = [];
    this.giftForOptionsSelected = event.target.innerText;
    this.imageList.forEach(obj => {
      if((obj.giftFor.toString().includes(event.target.innerText)) 
          && (obj.category == this.categorySelected)) {
        newImageList.push(obj);
      }
    });
    this.gridImage = newImageList;
  }

  filterByCategory(event:any){
    let newImageList: any = [];
    this.categorySelected = event.target.value;
    this.imageList.forEach(obj => {
      if((obj.category == event.target.value) && 
         (obj.giftFor.toString().includes(this.giftForOptionsSelected))) {
        newImageList.push(obj);
      }
    });
    this.gridImage = newImageList;
  }
}
