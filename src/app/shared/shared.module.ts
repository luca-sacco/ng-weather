import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutocompleteComponent } from './components';
import { OptionHighlightDirective } from './components/autocomplete/option-highlight.directive';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AutocompleteComponent,
    ButtonComponent,
    OptionHighlightDirective,
  ],
  exports: [AutocompleteComponent, ButtonComponent],
  imports: [CommonModule, FormsModule],
})
export class SharedModule {}
