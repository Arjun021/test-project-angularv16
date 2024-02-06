import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // refrence element of video tag
  @ViewChild("videoPlayer") videoPlayer!: ElementRef;
  // for loading video on pause
  isPlay: boolean = false;

  /**
   * Click event of video play
   */
  onVideoPlay() {
    this.isPlay = !this.isPlay;
    this.videoPlayer.nativeElement.play();
    if(this.isPlay == false){
      this.videoPlayer.nativeElement.load();
    }
  }
}
