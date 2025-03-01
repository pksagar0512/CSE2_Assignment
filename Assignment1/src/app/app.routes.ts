import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:"service",
        component:ServiceComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"contact",
        component:ContactComponent
    }
];
