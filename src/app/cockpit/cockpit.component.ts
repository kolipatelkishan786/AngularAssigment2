import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  newServerName = [];
  newServercontent = [];
  constructor() { }

  ngOnInit() {
  }
  onAddServer() {
   /* this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServercontent
    });*/
  }

  onAddBlueprint() {
   /* this.serverElements.push({
      type: 'Blueprint',
      name: this.newServerName,
      content: this.newServercontent
    });*/
  }

}
