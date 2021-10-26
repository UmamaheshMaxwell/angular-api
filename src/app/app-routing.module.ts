import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from '../../src/app/products/products.component'
import { AddReportComponent } from './add-report/add-report.component';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', children:[{ path: '', component: SearchComponent}]},
  {path: 'search', component: SearchComponent},
  {path: 'add-report', component: AddReportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
