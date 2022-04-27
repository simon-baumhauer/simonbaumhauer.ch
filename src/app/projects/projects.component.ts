import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  all = true;
  angular = true;
  javascript = true;
 
  showAll() {
    this.all = true;
    this.angular = true;
    this.javascript = true;
    document.getElementById('showAngular').classList.remove('button-active')
    document.getElementById('showJavascript').classList.remove('button-active')
    document.getElementById('showAll').classList.add('button-active')

  }

  showJavascript() {
    this.all = false;
    this.angular = false;
    this.javascript = true;
    document.getElementById('showAll').classList.remove('button-active')
    document.getElementById('showAngular').classList.remove('button-active')
    document.getElementById('showJavascript').classList.add('button-active')
  }

  showAngular() {
    this.all = false;
    this.angular = true;
    this.javascript = false;
    document.getElementById('showAll').classList.remove('button-active')
    document.getElementById('showJavascript').classList.remove('button-active')
    document.getElementById('showAngular').classList.add('button-active')
  }

}
