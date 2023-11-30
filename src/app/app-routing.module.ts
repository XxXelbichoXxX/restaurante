import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { CommandsComponent } from './screens/commands/commands/commands.component';
import { AddCommandComponent } from './screens/commands/add-command/add-command.component';
import { EditCommandComponent } from './screens/commands/edit-command/edit-command.component';
import { DeleteCommandComponent } from './screens/commands/delete-command/delete-command.component';
import { TicketComponent } from './screens/commands/ticket/ticket.component';
import { EmployeesComponent } from './screens/employees/employees/employees.component';
import { AddEmployeeComponent } from './screens/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './screens/employees/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './screens/employees/delete-employee/delete-employee.component';
import { MenuComponent } from './screens/food/menu/menu.component';
import { AddFoodComponent } from './screens/food/add-food/add-food.component';
import { EditFoodComponent } from './screens/food/edit-food/edit-food.component';
import { DeleteFoodComponent } from './screens/food/delete-food/delete-food.component';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'commands', component: CommandsComponent },
  { path: 'add-command', component: AddCommandComponent },
  { path: 'edit-command', component: EditCommandComponent },
  { path: 'delete-command', component: DeleteCommandComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'edit-employee', component: EditEmployeeComponent },
  { path: 'delete-employee', component: DeleteEmployeeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'add-food', component: AddFoodComponent },
  { path: 'edit-food', component: EditFoodComponent },
  { path: 'delete-food', component: DeleteFoodComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  CommandsComponent,
  AddCommandComponent,
  EditCommandComponent,
  DeleteCommandComponent,
  TicketComponent,
  EmployeesComponent,
  AddEmployeeComponent,
  EditEmployeeComponent,
  DeleteEmployeeComponent,
  MenuComponent,
  AddFoodComponent,
  EditFoodComponent,
  DeleteFoodComponent,
  LoginComponent
]
