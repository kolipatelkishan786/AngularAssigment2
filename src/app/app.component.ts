import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  servers = [];
  onAddServer() {
    this.servers.push('AnotherServer');
  }
  onRemoveSrever(id: number) {
    const position = id + 1;
    this.servers.splice(position, 1);
  }
}
