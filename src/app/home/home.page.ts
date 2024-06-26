import { Component } from '@angular/core';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@awesome-cordova-plugins/streaming-media/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private streamingMedia: StreamingMedia) {}

  starttheAudio() {
    const options: StreamingAudioOptions = {
     successCallback: () => { console.log('Successful streaming'); },
     errorCallback: () => { console.log('Error'); }, 
     initFullscreen: false
    };
    this.streamingMedia.playAudio('http://soundbible.com/grab.php?id=2196&type=mp3', options);
  }

  starttheVideo() {
    const options: StreamingVideoOptions = {
    successCallback: () => {console.log(); },
    errorCallback: () => { console.log(); },
    orientation: 'portrait'
    };
    this.streamingMedia.playVideo('http://techslides.com/demos/sample-videos/small.mp4', options);
  }
}
