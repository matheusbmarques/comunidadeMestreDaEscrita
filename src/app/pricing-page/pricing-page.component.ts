import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

declare var fbq: any;

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.scss']
})
export class PricingPageComponent implements OnInit {
  
  purchaseValue: number = 39.90;

  constructor(
    private configService: ConfigService,
  ) { }

  ngOnInit(): void {
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

}
