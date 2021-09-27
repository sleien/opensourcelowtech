import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let height = document.getElementsByTagName('nav')[0]?.offsetHeight;
    document.getElementById('nav--spacer')!.style.height = height + 'px';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    let height = document.getElementsByTagName('nav')[0]?.offsetHeight;
    document.getElementById('nav--spacer')!.style.height = height + 'px';
  }


}
