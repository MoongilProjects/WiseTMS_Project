import { NgModule } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
    imports: [
        CalendarModule,
        AutoCompleteModule,
        TableModule,
        DropdownModule,
        InputTextModule,
        PaginatorModule,
      TabViewModule,
      PanelMenuModule,
    ],
    exports: [
      CalendarModule,
      AutoCompleteModule,
      TableModule,
      DropdownModule,
      InputTextModule,
      PaginatorModule,
      TabViewModule,
      PanelMenuModule,
    ],
    providers: [
        
    ]
})
export class PrimeNGModule {
}
