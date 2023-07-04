import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[noEmojis]',
  standalone: true,
})
export class NoEmojisDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    const inputValue: string = event.target.value;
    const withoutEmojis: string = this.removeEmojis(inputValue);
    this.el.nativeElement.value = withoutEmojis;
    event.stopPropagation();
  }

  private removeEmojis(value: string): string {
    return value.replace(/\p{Emoji}/gu, '');
  }
}
