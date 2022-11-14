import { LabelValue } from 'app/core/models';

export class OptionsList {
  private _options: LabelValue[] = [];
  private _fiteredOptions: LabelValue[] = [];

  get filteredOptions() {
    return this._fiteredOptions;
  }

  get options() {
    return this._options;
  }

  setOptions(options: LabelValue[]) {
    this._fiteredOptions = this._options = [...options];
  }

  filter(searchTerm: string) {
    if (!searchTerm) {
      this.resetFilteredOptions();
      return;
    }
    this._fiteredOptions = [];
    this._fiteredOptions = this._options.filter(
      (item) => item.label.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
    );
  }

  resetFilteredOptions() {
    this._fiteredOptions = this._options;
  }
}
