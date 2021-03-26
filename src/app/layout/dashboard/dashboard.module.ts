import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StatModule } from '../../shared/modules/stat/stat.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { PopupModule } from '@progress/kendo-angular-popup';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import 'hammerjs';


@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatGridListModule,
        StatModule,
        ExcelExportModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatRadioModule,
        MatTableModule,
        MatProgressSpinnerModule,
        PopupModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatNativeDateModule,
        MatIconModule,
        MatTooltipModule,
        ChartsModule,        
        FlexLayoutModule.withConfig({ addFlexToParent: false })
    ],
    declarations: [DashboardComponent],

})
export class DashboardModule { }
