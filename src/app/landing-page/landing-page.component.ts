import { AfterViewInit, Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ConfigService } from '../services/config.service';

declare var fbq: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit, AfterViewInit {

  purchaseValue: number = 39.90;

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
    private configService: ConfigService,
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

  // Função para rastrear o evento de compra pelo Pixel do Facebook
  trackPixelPurchase(value: number) {
    fbq('track', 'Purchase', { value: value, currency: 'BRL' });
  }

  // Função para enviar o evento para a API de Conversões
  trackPurchase(value: number) {
    const eventData = {
      email: 'anonimo@exemplo.com',
      currency: 'BRL',
      value: value
    };
    this.configService.sendEvent('Purchase', eventData).subscribe();
  }

  // Função para acionar ambos os métodos quando uma compra é feita
  onPurchase() {
    this.trackPixelPurchase(this.purchaseValue);
    this.trackPurchase(this.purchaseValue);
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
