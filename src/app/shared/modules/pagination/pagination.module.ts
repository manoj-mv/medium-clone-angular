import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { UtilityService } from '../../services/utility.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PaginationComponent
  ],
  providers: [UtilityService]
})
export class PaginationModule { }
