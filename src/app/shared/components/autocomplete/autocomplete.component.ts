import {
  AfterViewInit,
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LabelValue } from 'app/core/models';
import { OptionsList } from './models/options-list';

@Component({
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  selector: 'app-autocomplete',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true,
    },
  ],
})
export class AutocompleteComponent
  implements OnInit, AfterViewInit, OnChanges, ControlValueAccessor
{
  @Input() placeholder: string = '';
  @Input() disabled: boolean;
  @Input() minTermLength?: number;
  @Input() searchMethod?: (search: string, value: LabelValue) => boolean;
  @Input() options?: LabelValue[] = [];

  showDropdown = false;

  value: string = null;

  private _optionsList: OptionsList;

  private _onChange = (_: any) => {};
  private _onTouched = () => {};

  get filteredOptions() {
    return this._optionsList.filteredOptions;
  }

  @ViewChild('inputSearch') inputSearch: ElementRef<HTMLInputElement>;
  @ViewChild('dropdown') dropdown: ElementRef<HTMLElement>;

  @HostListener('input', ['$event.target.value'])
  handleInputValue(term: string) {
    this.value = term;
    this._filter(this.value);
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (
      this.inputSearch.nativeElement.contains(event.target) ||
      this.dropdown.nativeElement.contains(event.target)
    ) {
      return;
    }
    this.showDropdown = false;
  }

  constructor() {
    this._optionsList = new OptionsList();
  }

  writeValue(value: LabelValue): void {
    if (value) {
      this.value = value.label;
    }
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  private _filter(expression: string) {
    if (!expression) {
      this._onChange(null);
    }
    this._optionsList.filter(expression);
    if (!this.showDropdown) {
      this.showDropdown = true;
    }
  }

  onSelect(item: LabelValue) {
    this._onChange(item.value);
    this.value = item.label;
    this._close();
  }

  private _close() {
    if (!this.showDropdown) {
      return;
    }
    this.showDropdown = false;
    this._optionsList.resetFilteredOptions();
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.options) {
      this._optionsList.setOptions(changes.options.currentValue || []);
    }
    if (changes.searchMethod) {
      this._optionsList.setFilterFn(changes.searchMethod.currentValue);
    }
  }

  onFocus() {
    this.showDropdown = true;
  }

  ngAfterViewInit() {}
}
