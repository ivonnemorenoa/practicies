import { NgModule } from '@angular/core'; //Importacion de TY
import { RouterModule, Routes } from '@angular/router'; //module imports
import { ProfilesComponent } from './components/profiles/profiles.component';
import { AsignaturaComponent } from './components/asignatura/asignatura.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  { path: '', redirectTo : '/profiles', pathMatch : 'full' },
  { path: 'profiles', component : ProfilesComponent },
  { path: 'asignatura', component : AsignaturaComponent },
  { path: 'contactanos', component : ContactoComponent },
  // { path: '/profiles', component : form },
  // { path: '**', component : PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

