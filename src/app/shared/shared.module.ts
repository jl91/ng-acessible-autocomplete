import { NgModule } from '@angular/core';

import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AutocompleteComponent
  ],
  declarations: [
    AutocompleteComponent
  ],
  providers: [],
})
export class SharedModule {
}
