import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, 
    MatCardModule, MatButtonToggleModule, MatTabsModule, MatAutocompleteModule,
    MatSelectModule, MatFormFieldModule, MatInputModule, MatDividerModule } from '@angular/material';

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
        MatSelectModule
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
        MatSelectModule
    ],
})

export class MaterialModule {  }