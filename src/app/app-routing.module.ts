import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard,AdminGuard } from './shared/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule],
    providers: [AuthGuard,AdminGuard]
})
export class AppRoutingModule {}
