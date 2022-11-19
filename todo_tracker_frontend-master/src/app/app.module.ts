import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorService } from './services/tokeninterceptor.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgToastModule } from 'ng-angular-popup';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotesComponent } from './notes/notes.component';
import { ArchiveComponent } from './archive/archive.component';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import { UploadImageComponent } from './upload-image/upload-image.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ImagetaskComponent } from './imagetask/imagetask.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ReminderComponent } from './reminder/reminder.component'
import {MatRippleModule} from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,DashboardComponent,NotesComponent,ArchiveComponent, UploadImageComponent, 
    ImagetaskComponent, DeleteDialogComponent, ChangePasswordComponent, ReminderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,FormsModule, ReactiveFormsModule,MatToolbarModule,
    MatIconModule,MatMenuModule,MatSidenavModule,MatListModule,MatDividerModule,MatChipsModule,
    MatFormFieldModule,MatButtonModule,MatButtonToggleModule,MatCardModule,MatCheckboxModule,
    NgToastModule,MatSelectModule,MatAutocompleteModule,MatDialogModule,MatTooltipModule,MatBadgeModule,
    MatDatepickerModule,MatInputModule,MatNativeDateModule,MatRippleModule,MatSortModule,MatPaginatorModule,
    NgxPaginationModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true},DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
