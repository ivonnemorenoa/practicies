import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignaturaComponent } from './asignatura.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';



@NgModule({
  declarations: [
    AsignaturaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          breaks: false,
          pedantic: false,
          smartLists: true,
          smartypants: false,
        },
      },
    
    }),
  ],
  exports: [
    AsignaturaComponent
  ],
})
export class AsignaturaModule { }
