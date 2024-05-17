import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent implements OnInit {
  
  isMenuOpen = false;

  @Output() navigateToAnchorLink = new EventEmitter();

  @Output() toggleSideNav = new EventEmitter();

  constructor() { }

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
