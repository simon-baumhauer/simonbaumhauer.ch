import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slidehsow',
  templateUrl: './slidehsow.component.html',
  styleUrls: ['./slidehsow.component.scss']
})
export class SlidehsowComponent implements OnInit {
  images = ['laptop_3.jpg', 'laptop_2.jpg', 'laptop_1.avif'];
  headlines = ['Bring engineering to the next level'];
  currentImage = 0;
  showImage = true;

  constructor(private scroller: ViewportScroller, private router: Router) {}
  ngOnInit() {
   
    this.router.navigate(["/"]);
  }
 
 upadateImage() {
 setInterval(() => {
   this.currentImage++;
   this.currentImage = this.currentImage % this.images.length;
   this.showImage = false;
 
   setTimeout(() => {
     this.showImage = true;
   }, 10);
 }, 8000)
 }

 goDown1() {
  this.scroller.scrollToAnchor("targetRed");
}

}
