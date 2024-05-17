import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-benefits-page',
  templateUrl: './benefits-page.component.html',
  styleUrls: ['./benefits-page.component.scss']
})
export class BenefitsPageComponent implements OnInit, AfterViewInit {

  isFirstSlide: boolean = true;
  isSecondSlide: boolean = false;

  goToPreviousSlide(): void {
    this.isFirstSlide = true;
    this.isSecondSlide = false;
  }

  goToNextSlide(): void {
    this.isFirstSlide = false;
    this.isSecondSlide = true;
  }

  @ViewChild('carousel', { static: true }) carousel!: ElementRef;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.isFirstSlide;
  }

  ngAfterViewInit(): void {
    const carouselElement = this.renderer.selectRootElement('#carousel');
    this.renderer.setProperty(carouselElement, 'data-interval', 0);

    // this.renderer.setProperty(this.carousel.nativeElement, 'data-interval', 0);
  }

}
