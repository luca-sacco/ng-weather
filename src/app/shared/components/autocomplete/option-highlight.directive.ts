import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[optionHighlight]',
})
export class OptionHighlightDirective
  implements OnInit, OnChanges, AfterViewInit
{
  @Input('optionHighlight') searcTerm: string;

  private element: HTMLElement;
  private label: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.element = this.elementRef.nativeElement;
  }

  ngOnInit(): void {}

  ngOnChanges() {
    if (this._isDefined(this.label) && this._isDefined(this.searcTerm)) {
      this._highlight();
    }
  }

  ngAfterViewInit() {
    this.label = this.element.innerHTML;
    if (this._isDefined(this.label) && this._isDefined(this.searcTerm)) {
      this._highlight();
    }
  }

  private _highlight() {
    if (!this.searcTerm) {
      this._setInnerHtml(this.label);
      return;
    }
    const regex = new RegExp(this.searcTerm, 'gi');
    const html = this.label.replace(
      regex,
      `<span class=\"font-weight-bold\">$&</span>`
    );
    this._setInnerHtml(html);
  }

  private _setInnerHtml(html: any) {
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', html);
  }

  private _isDefined(value: any) {
    return value !== undefined && value !== null;
  }
}
