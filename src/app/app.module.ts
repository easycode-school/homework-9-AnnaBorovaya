import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';
import { PipeExamplePipe } from './pipes/pipe-example.pipe';
import { GetDataPipe } from './pipes/get-data.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeExampleComponent,
    PipeExamplePipe,
    GetDataPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
