import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() darkMode = true;
  constructor(private scroller: ViewportScroller, private router: Router) {}

  ngOnInit(): void {}

  /**
   * This function scroll down to the about-me section
   */
  goDownToAbout() {
    this.scroller.scrollToAnchor('about-me');
  }

  /**
   * This function scrolss down to the project section
   */
  goDownToProjects() {
    this.scroller.scrollToAnchor('projects');
  }

}
