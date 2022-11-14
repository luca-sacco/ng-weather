import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutocompleteComponent } from './components';
import { OptionHighlightDirective } from './components/autocomplete/option-highlight.directive';

@NgModule({
  declarations: [AutocompleteComponent, OptionHighlightDirective],
  exports: [AutocompleteComponent],
  imports: [CommonModule, FormsModule],
})
export class SharedModule {}
