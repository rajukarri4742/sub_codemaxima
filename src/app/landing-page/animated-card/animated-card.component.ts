import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-animated-card',
  templateUrl: './animated-card.component.html',
  styleUrls: ['./animated-card.component.scss'],
})
export class AnimatedCardComponent implements AfterViewInit {
  selectedText: string | null | undefined = '';
  listArray = [
    'Learn Coding from Top Developers.',
    'Learn Code Debugging with animation videos',
    'Learn in live hands on classrooms',
    'Structured, flexible curriculum',
    'Weekly Code Reviews and live mentoring',
    'Inerview training and one on one sessions',
  ];
  index: number = 2;
  @ViewChild('text2') input: ElementRef<HTMLInputElement> | undefined;
  constructor(private changeDetector: ChangeDetectorRef) { }
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
