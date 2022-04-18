import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AddBooksComponent } from './components/admin/add-books/add-books.component';
import { BooksListComponent } from './components/admin/books-list/books-list.component';
import { EditBooksComponent } from './components/admin/edit-books/edit-books.component';
import { GetSavedBooksComponent } from './components/employee/get-saved-books/get-saved-books.component';
import { RequestBooksComponent } from './components/employee/request-books/request-books.component';
import { AuthGuardsGuard } from './guards/auth-guards.guard';
import { NavbarComponent } from './sharedModules/navbar/navbar.component';

const routes: Routes = [
  // {path:'navbar',component:NavbarComponent},
  {path:'editBooks',component:EditBooksComponent,canActivate:[AuthGuardsGuard]},
  {path:'booksList',component:BooksListComponent,canActivate:[AuthGuardsGuard]},
  {path:'addBooks',component:AddBooksComponent,canActivate:[AuthGuardsGuard]},
  {path:'userRequest/:id',component:RequestBooksComponent,canActivate:[AuthGuardsGuard]},
  {path:'userSavedBooks',component:GetSavedBooksComponent,canActivate:[AuthGuardsGuard]},
  {path:'',component:LoginComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

