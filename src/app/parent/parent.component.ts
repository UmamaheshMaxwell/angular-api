import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  activeTab = 'search';

  constructor() { }

  ngOnInit(): void {
    
  }

  search(activeTab: any){
    this.activeTab = activeTab;
  }

  report(activeTab: any){
    this.activeTab = activeTab;
  }

}
