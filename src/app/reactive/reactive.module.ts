import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { SwitchPageComponent } from './pages/switch-page/switch-page.component';
import { ReactiveRoutingModule } from './reactive-routing.module';

@NgModule({
  declarations: [BasicPageComponent, DynamicPageComponent, SwitchPageComponent],
  imports: [CommonModule, ReactiveRoutingModule, ReactiveFormsModule],
})
export class ReactiveModule {}
