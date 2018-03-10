import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router/';



import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

// angular material modules
import {
 
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    //MatChipsModule,
    /*MatCoreModule,*/
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    //MatNativeDateModule,
    MatPaginatorModule,
    //MatProgressBarModule,
    //MatProgressSpinnerModule,
    MatRadioModule,
    //MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    //MatSliderModule,
    MatSlideToggleModule,
    //MatSnackBarModule,
    //MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
} from '@angular/material';
//import { Mod } from '@angular/cdk';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
				ReactiveFormsModule,

				MatAutocompleteModule,
				MatButtonModule,
				MatButtonToggleModule,
				MatCardModule,
				MatCheckboxModule,
				//MatChipsModule,
				//MatCoreModule,
				MatDatepickerModule,
				MatDialogModule,
				MatExpansionModule,
				MatGridListModule,
				MatIconModule,
				MatInputModule,
				MatListModule,
				MatMenuModule,
				//MatNativeDateModule,
				MatPaginatorModule,
				//MatProgressBarModule,
				//MatProgressSpinnerModule,
				MatRadioModule,
				//MatRippleModule,
				MatSelectModule,
				MatSidenavModule,
				//MatSliderModule,
				MatSlideToggleModule,
				//MatSnackBarModule,
				//MatSortModule,
				MatTableModule,
				MatTabsModule,
				MatToolbarModule,
				MatTooltipModule,

				//CdkTableModule,

        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
