import { Routes } from '@angular/router';
import { AddEmployeeNumberComponent } from './Components/add-employee-number/add-employee-number.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './Components/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './Components/attribute-directive/attribute-directive.component';
import { IfelseComponent } from './Components/controlFlow/ifelse/ifelse.component';
import { ForSwitchComponent } from './Components/controlFlow/for-switch/for-switch.component';
import { PipeComponent } from './Components/pipe/pipe.component';
import { TemplateDrivenFormsComponent } from './Angular Forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './Angular Forms/reactive-forms/reactive-forms.component';

export const routes: Routes = [

    {
        path:'add-emp',
        component: AddEmployeeNumberComponent
        
    },
    {
        path:'emp-list',
        component:EmployeeListComponent
    },
    {
        path:'data-bind',
        component:DataBindingComponent
    },
    {
        path:'structural-dir',
        component:StructuralDirectiveComponent
    },
    {
        path:'attribute-dir',
        component:AttributeDirectiveComponent
    },
    {
        path:'controlFlowIfElse',
        component:IfelseComponent
    },
    {
        
    path:'ControlFlowForandswitch',
    component:ForSwitchComponent

    },
    {
        
        path:'Pipe',
        component:PipeComponent
    },
    {
        
        path:'template-dirven',
        component:TemplateDrivenFormsComponent
    },
    {
        
        path:'Reactive-form',
        component:ReactiveFormsComponent
    }



];
