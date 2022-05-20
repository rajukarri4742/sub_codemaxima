import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements AfterViewInit {
  selectedText: string | null | undefined = '';
  listArray = [
    'Learn Code Debugging with Animation videos',
    'Learn in live hands on classrooms',
    'Structured, flexible curriculum',
    'Collaborate with a global community',
    'Develop real-world projects',
    'Learn from industry leaders',
  ];
  index: number = 2;
  @ViewChild('text2') input: ElementRef<HTMLInputElement> | undefined;
  constructor(private changeDetector: ChangeDetectorRef) {}
  ngAfterViewInit(): void {
    this.selectedText = this.input?.nativeElement.textContent;
    setInterval(() => {
      this.onSelectedText(this.listArray[this.index], this.index);
      this.index++;
      if (this.index > this.listArray.length - 1) {
        this.index = 0;
      }
    }, 4000);
    this.changeDetector.detectChanges(); // this is added to fix eror in console
  }

  onSelectedText(textContent: string | null, index: number): void {
    this.selectedText = textContent;
    this.index = index;
  }
}
