import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 images = ['laptop_1.avif', 'laptop_2.jpg', 'laptop_3.jpg'];
 headlines = ['Bring engineering to the next level', 'Passion for Code', 'Student in Business Informatics'];
 currentImage = 0;
 showImage = true;

ngOnInit() {
  this.upadateImage();
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


}
