import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() darkMode = true;
  constructor(private scroller: ViewportScroller, private router : Router) { }

  ngOnInit(): void {
  }


  goDownToAbout() {
    this.scroller.scrollToAnchor("about-me");
  }

  goDownToProjects() {
    this.scroller.scrollToAnchor("projects");
  }

  goDown2() {
    this.scroller.scrollToAnchor("targetGreen");
  }

}
