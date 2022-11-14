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
    if (
      this.label !== null &&
      this.label !== undefined &&
      this.searcTerm !== null &&
      this.searcTerm !== undefined
    ) {
      this.__highlight();
    }
  }

  ngAfterViewInit() {
    this.label = this.element.innerHTML;
    if (this.label && this.searcTerm) {
      this.__highlight();
    }
  }

  private __highlight() {
    if (!this.searcTerm) {
      this._setHtml(this.label);
      return;
    }
    const regex = new RegExp(this.searcTerm, 'gi');
    const html = this.label.replace(
      regex,
      `<span class=\"font-weight-bold\">$&</span>`
    );
    this._setHtml(html);
  }

  private _setHtml(html) {
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', html);
  }

  private _escapeRegExp(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  //   private _highlightLabel() {
  //     const label = this.label;
  //     if (!this.term) {
  //       this._setInnerHtml(label);
  //       return;
  //     }

  //     const alternationString = this._escapeRegExp(this.term).replace(' ', '|');
  //     const termRegex = new RegExp(alternationString, 'gi');
  //     this._setInnerHtml(
  //       label.replace(termRegex, `<span class=\"highlighted\">$&</span>`)
  //     );
  //   }

  //   private get _canHighlight() {
  //     return this._isDefined(this.term) && this._isDefined(this.label);
  //   }

  private _setInnerHtml(html) {
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', html);
  }

  private _isDefined(value: any) {
    return value !== undefined && value !== null;
  }
}
