import { Component, OnInit } from '@angular/core';
import sliderJson from '../../assets/files/slider.json';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  public slides:{image:string, alt:string, title:string}[] = sliderJson;
  public imgLink = this.slides![Math.floor(Math.random() * (this.slides.length))].image;

  ngOnInit(): void {
  }

}
