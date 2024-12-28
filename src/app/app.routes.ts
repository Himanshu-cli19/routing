import { Routes } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { ErrorComponent } from './error/error.component';
import { MainComponent } from './main/main.component';
import { KrishnaComponent } from './krishna/krishna.component';
import { RadheComponent } from './radhe/radhe.component';

export const routes: Routes = [
    {
        path:'',
        component:ServiceComponent
    },
    
    {
        path:'main',
        component:MainComponent
    },
    {
        path:'radhe',
        component:RadheComponent
    },
    {
        path:'krishna',
        component:KrishnaComponent
    },
    {
        path:'**',
        component:ErrorComponent
    }

];
