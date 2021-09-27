import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import youtubeJson from '../../assets/files/youtube.json';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  public youtubeLinks: {name:string, items:{id: string, name: string, link: string, thumbnail: string, active: boolean}[]}[] = youtubeJson;
  public link = "";
  public name = "";
  public width: number = 0
  public height: number = 400;
  constructor(
    private route: ActivatedRoute,
    private cdRef:ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['name']) {
        this.link = this.youtubeLinks.map(item => item.items.filter(item => item.id == params['name'])[0]).filter(n => n)[0].link;
        this.name = this.youtubeLinks.map(item => item.items.filter(item => item.id == params['name'])[0]).filter(n => n)[0].id;
      }
    });
  }
  
  ngAfterViewChecked(): void{
    this.width = document.getElementById('player')!.offsetWidth;
    this.cdRef.detectChanges();
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
