import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import{DropDownComponent} from './drop-down/drop-down.component';
import {EmployeeDetailComponent} from './employee-detail/employee-detail.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import {EmployeeOverviewComponent} from './employee-overview/employee-overview.component';
import {EmployeeContactComponent} from './employee-contact/employee-contact.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';



const routes: Routes = [

  {path:'departments', component: DepartmentListComponent,  pathMatch: 'full'},
  {
    path: 'departments/:id',
    component: DepartmentDetailComponent,
    children: [
      {path:'overview', component: DepartmentOverviewComponent,  pathMatch: 'full'},
      {path:'contact', component: DepartmentContactComponent,  pathMatch: 'full'}
    ]
  },
  {path: 'employees', component: EmployeeListComponent,  pathMatch: 'full'},
  {
    path: 'employees/:id',
    component: EmployeeDetailComponent,
    // children: [
    //   {path:'overview', component: EmployeeOverviewComponent,  pathMatch: 'full'},
    //   // {path:'contact', component: EmployeeContactComponent,  pathMatch: 'full'}
    //  ]
  },
  {path: 'students', component: StudentListComponent, pathMatch: 'full'},
  {
    path: 'students/:id',
    component: EmployeeDetailComponent,
 children: [
      {path:'overview', component: EmployeeOverviewComponent,  pathMatch: 'full'},
     {path:'contact', component: EmployeeContactComponent,  pathMatch: 'full'}
     ]


},
  {path:'drop-down', component:DropDownComponent,  pathMatch: 'full'},  

  {path:'', component:DefaultPageComponent, pathMatch: 'full'},  
  {path: "**", component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DefaultPageComponent,
                                  DepartmentListComponent, 
                                  EmployeeListComponent, 
                                  PageNotFoundComponent, 
                                  DepartmentDetailComponent, 
                                  DropDownComponent, 
                                  EmployeeDetailComponent,
                                  StudentListComponent]