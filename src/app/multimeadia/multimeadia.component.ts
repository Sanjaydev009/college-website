import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-multimeadia',
  templateUrl: './multimeadia.component.html',
  styleUrls: ['./multimeadia.component.css']
})
export class MultimeadiaComponent implements AfterViewInit {
  @ViewChild('carouselVideo', { static: false }) videoElement!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const carousel = document.getElementById('carouselExampleSlidesOnly');

    if (carousel) {
      carousel.addEventListener('slid.bs.carousel', (event: any) => {
        const activeSlide = event.relatedTarget;
        if (activeSlide.querySelector('video')) {
          this.videoElement.nativeElement.currentTime = 0; // Restart video from the beginning
          this.videoElement.nativeElement.play();
        }
      });
    }
  }
}