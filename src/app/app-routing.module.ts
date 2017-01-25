import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent }   from './customerList.component';
import { HomeComponent } from './home.component';

//CONST ROUTES holds links to other pages
const routes: Routes = [
								
								{path: '', component: HomeComponent},
								//{path: '', redirectTo: '/customer', pathMatch: 'full'},
								{path: 'customer', component: CustomerListComponent},
								{path: '**', component: CustomerListComponent}
								//{path: 'employees', component: EmployeeListComponent},
								//{path: 'departments/:id', component: DepartmentDetailComponent},
								//{path: '**', component: PageNotFoundComponent}
								] ;
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
	
})

export class AppRoutingModule {}
export const RoutingComponents = [CustomerListComponent, HomeComponent]