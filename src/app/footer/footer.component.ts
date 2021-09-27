import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let height = document.getElementsByTagName('footer')[0]?.offsetHeight;
    document.getElementById('footer--spacer')!.style.height = height + 'px';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    let height = document.getElementsByTagName('footer')[0]?.offsetHeight;
    document.getElementById('footer--spacer')!.style.height = height + 'px';
  }

}
