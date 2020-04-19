import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion'; import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; import { MatTabsModule } from '@angular/material/tabs';
const MaterialComponents = [
  MatButtonModule,
  MatSliderModule, MatExpansionModule, MatToolbarModule,
  MatCardModule, MatIconModule, MatTabsModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
