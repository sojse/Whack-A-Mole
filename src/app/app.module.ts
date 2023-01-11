import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MoleGeneratorService } from './mole-generator.service';
import { PlayFieldComponent } from './play-field/play-field.component';
import { TimeCounterService } from './time-counter.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlayFieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TimeCounterService,
    MoleGeneratorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
