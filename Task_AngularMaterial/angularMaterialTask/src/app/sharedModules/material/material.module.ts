import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


const materialComponents:any=[MatToolbarModule,
  MatButtonModule,MatIconModule,MatTableModule,MatPaginatorModule,MatDialogModule,MatCardModule,MatFormFieldModule,MatInputModule,MatSelectModule,
  MatDatepickerModule,MatNativeDateModule
                             ];
@NgModule({
  exports:[materialComponents],
  imports: [materialComponents]
})
export class MaterialModule { }
