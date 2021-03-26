import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';




// Material 
import { MatSnackBarModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';


// Services
import { NotificationService } from './services/notification.service';

// Pipes


import { NotificationComponent } from './components/notification/notification.component';
import { LogoutComponent } from './components/logout/logout.component';


@NgModule({
    imports: [
        CommonModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        FormsModule,
        MatSelectModule,
        MatCheckboxModule,
        MatProgressBarModule,
        MatTableModule,
        MatButtonModule,
        MatRadioModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDividerModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatExpansionModule,
        MatMenuModule,
        MatCardModule,

    ],
    declarations: [NotificationComponent, LogoutComponent],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        MatSelectModule,
        MatCheckboxModule,
        MatProgressBarModule,
        MatTableModule,
        MatButtonModule,
        MatRadioModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDividerModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatExpansionModule,
        MatMenuModule,
        MatCardModule,
        NotificationComponent,
        LogoutComponent,

    ],
    providers: [NotificationService, MatDatepickerModule],
    entryComponents: [NotificationComponent, LogoutComponent],

})
export class SharedModule { }
