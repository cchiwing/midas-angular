import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, 
    MatCardModule, MatButtonToggleModule, MatTabsModule, MatAutocompleteModule,
    MatSelectModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatDatepickerModule, 
    MatNativeDateModule, MatCheckboxModule, MatLineModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule,
        MatTabsModule, 
        MatAutocompleteModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatLineModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule,
        MatTabsModule, 
        MatAutocompleteModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatLineModule
    ],
})

export class MaterialModule {  }