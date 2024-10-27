import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConfigService } from '../services/config.service';

declare var fbq: any;

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent implements OnInit {
  
  isMenuOpen = false;
  purchaseValue: number = 39.90;

  @Output() navigateToAnchorLink = new EventEmitter();

  @Output() toggleSideNav = new EventEmitter();

  constructor(
    private configService: ConfigService,
  ) { }

  ngOnInit(): void {
    const hamburgerCheckbox = document.querySelector<HTMLInputElement>('.hamburger input');
    const header = document.getElementById('header');

    if (hamburgerCheckbox && header) {
      hamburgerCheckbox.addEventListener('change', function () {
        if (this.checked) {
          header.style.display = 'flex';
        } else {
          header.style.display = 'none';
        }
      });
    }
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
  navigateToAchorLinkTrigger(anchorName) {
    this.navigateToAnchorLink.emit(anchorName);
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  doToggleSideNav() {
    this.toggleSideNav.emit();
  }
}
