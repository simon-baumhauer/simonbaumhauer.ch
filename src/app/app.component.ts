import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 images = ['laptop_1.avif', 'laptop_2.jpg', 'laptop_3.jpg'];
 currentImage = 0;

ngOnInit() {
  this.upadateImage();
}



upadateImage() {
setInterval(() => {
  this.currentImage++;
  this.currentImage = this.currentImage % this.images.length;
}, 8000)
}


}
