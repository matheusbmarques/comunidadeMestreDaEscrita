import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-method-page',
  templateUrl: './method-page.component.html',
  styleUrls: ['./method-page.component.scss']
})
export class MethodPageComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('text1', { static: true }) text1!: ElementRef;
  @ViewChild('text2', { static: true }) text2!: ElementRef;
  @ViewChild('text3', { static: true }) text3!: ElementRef;

  activeStep: number = 1;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  hideText(tabClicked: number): void {
    const text1Element: HTMLElement | null = this.text1?.nativeElement;
    const text2Element: HTMLElement | null = this.text2?.nativeElement;
    const text3Element: HTMLElement | null = this.text3?.nativeElement;

    if (text1Element && text2Element && text3Element) {
      text1Element.style.display = 'none';
      text2Element.style.display = 'none';
      text3Element.style.display = 'none';

      if (tabClicked === 1) {
        text1Element.style.display = 'flex';
        this.activeStep = 1;
      } else if (tabClicked === 2) {
        text2Element.style.display = 'flex';
        this.activeStep = 2;
      } else if (tabClicked === 3) {
        text3Element.style.display = 'flex';
        this.activeStep = 3; 
      }
    }

  }

}
