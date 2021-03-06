import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { IntroGuard } from './guards/intro.guard';

const routes: Routes = [
   {
      path: 'login',
      loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
      canLoad: [IntroGuard, AutoLoginGuard] // Check if we should show the introduction or forward to inside
    },
    {
      path: 'signup',
      loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule),
      canLoad: [IntroGuard] // Check if we should show the introduction or forward to inside

    },
    {
      path: 'intro',
      loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
    },
    {
      path: 'tabs',
      loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
      canLoad: [AuthGuard] // Secure all child pages
    },
    {
      path: 'intro',
      loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
    },
    {
      path: 'login',
      loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
    },
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
