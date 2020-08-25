import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();

  public showMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public Scroll(component: string) {
    this.messageEvent.emit(component)
    this.showMenu = false;
  }

  public ShowMenu() {
    return this.showMenu;
  }
}
