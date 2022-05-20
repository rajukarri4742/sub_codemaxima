import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-cmp',
  templateUrl: './video-cmp.component.html',
  styleUrls: ['./video-cmp.component.css']
})
export class VideoCmpComponent implements OnInit {

  @Input() public url?:any;
  totalUrl:any;
  constructor() { }

  actButton: any = 1.0;

  ngOnInit(): void {

    this.totalUrl='https://codingmaxima.in:8080/videos/'+this.url;

  }

  setVideoSpeed(speed: number){
  
    this.actButton = speed;
    var video = <HTMLMediaElement>document.getElementById('play');
    video.playbackRate = speed;
    
  }

}
