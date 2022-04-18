import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { AddBooksComponent } from './components/admin/add-books/add-books.component';
import { RequestBooksComponent } from './components/employee/request-books/request-books.component';
import { EditBooksComponent } from './components/admin/edit-books/edit-books.component';
import { BooksListComponent } from './components/admin/books-list/books-list.component';
import { NavbarComponent } from './sharedModules/navbar/navbar.component';
import { MaterialModule } from './sharedModules/Material/material/material.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastrModule } from 'ngx-toastr';
import { BooksFilterPipePipe } from './sharedModules/pipes/books-filter-pipe.pipe';
import { SaveRequestedBookComponent } from './components/employee/save-requested-book/save-requested-book.component';
import { GetSavedBooksComponent } from './components/employee/get-saved-books/get-saved-books.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddBooksComponent,
    RequestBooksComponent,
    EditBooksComponent,
    BooksListComponent,
    NavbarComponent,
    BooksFilterPipePipe,
    SaveRequestedBookComponent,
    GetSavedBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    FormsModule,
    FlexLayoutModule
  ],
  providers: [BooksListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
