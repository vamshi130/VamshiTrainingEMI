import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './Components/employees/employees.component';
import { EmployeePipePipe } from './SharedModules/employee-pipe.pipe';
import { NavbarcolourDirectiveDirective } from './SharedModules/customDirectives/navbarcolour-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeePipePipe,
    NavbarcolourDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
