import { NgModule } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
    imports: [
        CalendarModule,
        AutoCompleteModule,
        TableModule,
        DropdownModule,
        InputTextModule,
        PaginatorModule,
        TabViewModule,
    ],
    exports: [
      CalendarModule,
      AutoCompleteModule,
      TableModule,
      DropdownModule,
      InputTextModule,
      PaginatorModule,
      TabViewModule,
    ],
    providers: [
        
    ]
})
export class PrimeNGModule {
}
