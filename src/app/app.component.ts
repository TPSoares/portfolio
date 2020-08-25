import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  public component: HTMLElement;

  ngOnInit(){
    AOS.init({
      once: true
    });
    AOS.refresh();
  }

  public ReceiveMessage($event) {
    let el = document.getElementById($event)
    const yOffset = -60; 
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  }
}
