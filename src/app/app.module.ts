import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { DirectiveAssignComponent } from './directive-assign/directive-assign.component';
import { BasicHighlightDirective } from './basichighlights/basichighlight.directive';
import { BetterhighlightDirective } from './betterhighlight/betterhighlight.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { NameeditorComponent } from './nameeditor/nameeditor.component';


@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectiveAssignComponent,
    BasicHighlightDirective,
    BetterhighlightDirective,
    NameeditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

