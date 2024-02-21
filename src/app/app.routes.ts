import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ServicecomponentComponent } from './servicecomponent/servicecomponent.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { studentguardGuard } from './guards/studentguard.guard';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { BehaviorsubjectparentComponent } from './behaviorsubjectparent/behaviorsubjectparent.component';
import { PipeComponent } from './pipe/pipe.component';
import { EventpareentComponent } from './eventpareent/eventpareent.component';

export const routes: Routes = [
    {path:'', component:LandingpageComponent},
    {path:'service', component:ServicecomponentComponent},
    {path:'behavior', component:BehaviorsubjectparentComponent},
    {path:'signup', component:SignupComponent},
    {path:'signin', component:SigninComponent},
    {path:'templateform', component:TemplatedrivenformComponent},
    {path:'reactiveform', component:ReactiveformComponent},
    {path:'pipe', component:PipeComponent},
    {path:'event', component:EventpareentComponent},
    {path:'home', redirectTo:'', pathMatch:'full'},
    
    {path:'sample', children:[
        {path:'', component:LandingpageComponent},
        {path:'deposit', component:DisplayContactComponent},
        {path:':i', component:DisplayContactComponent},
    ]},
    {path:'dashboard', children:[
        {path:'', component:DashboardComponent},
        {path:'settings', component:SettingsComponent}
    ], canActivate:[studentguardGuard]},
    {path:'display/:name', component:DisplayContactComponent},
    {path:'**', component:ErrorpageComponent},
];
