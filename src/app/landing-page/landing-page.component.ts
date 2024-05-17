import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, AfterViewInit {

  // @ts-ignore
  @ViewChild('home', { read: ElementRef }) home: ElementRef;

  // @ts-ignore
  @ViewChild('method', { read: ElementRef }) method: ElementRef;

  // @ts-ignore
  @ViewChild('benefits', { read: ElementRef }) benefits: ElementRef;

  // @ts-ignore
  @ViewChild('results', { read: ElementRef }) results: ElementRef;

  // @ts-ignore
  @ViewChild('pricing', { read: ElementRef }) pricing: ElementRef;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // let id = this.activatedRoute.snapshot.paramMap.get('id');
    // if (id) {
    //   if (id == 'method') {
    //     this.navigateToAchorLinkTrigger(this.method.nativeElement);
    //   } else if (id == 'benefits') {
    //     this.navigateToAchorLinkTrigger(this.benefits.nativeElement);
    //   } else if (id == 'results') {
    //     this.navigateToAchorLinkTrigger(this.results.nativeElement);
    //   } else if (id == 'pricing') {
    //     this.navigateToAchorLinkTrigger(this.pricing.nativeElement);
    //   }
    // }
  }

  // @ts-ignore
  scrollToElement(element): void {
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  // @ts-ignore
  navigateToAchorLinkTrigger(e) {
    this.scrollToElement(e);
  }
}  
