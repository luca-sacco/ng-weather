import { LabelValue } from 'app/core/models';

export class OptionsList {
  private _options: LabelValue[] = [];
  private _fiteredOptions: LabelValue[] = [];
  private _filterFn: (term: string, item: LabelValue) => boolean;

  get filteredOptions() {
    return this._fiteredOptions;
  }

  get options() {
    return this._options;
  }

  setOptions(options: LabelValue[]) {
    this._fiteredOptions = this._options = [...options];
  }

  setFilterFn(fn: (term: string, item: LabelValue) => boolean) {
    this._filterFn = fn;
  }

  filter(searchTerm: string) {
    if (!searchTerm) {
      this.resetFilteredOptions();
      return;
    }
    this._fiteredOptions = [];
    if (this._filterFn) {
      this._fiteredOptions = this._options.filter((item) =>
        this._filterFn(searchTerm, item)
      );
    } else {
      this._fiteredOptions = this._options.filter(
        (item) =>
          item.label.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
      );
    }
  }

  resetFilteredOptions() {
    this._fiteredOptions = this._options;
  }
}
