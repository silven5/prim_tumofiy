import { Routes } from '@angular/router';
import { CloudComponent } from './cloud/cloud.component';
import { ClassComponent } from './class/class.component';
import { ServiceComponent } from './service/service.component';

export const routes: Routes = [
    {path: 'cloud', component: CloudComponent},
    {path: 'class', component: ClassComponent},
    {path: 'service', component: ServiceComponent}
];
