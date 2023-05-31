import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { AlbumesComponent } from './albumes/albumes.component';

const routes: Routes = [
  { path: '', component: TablaUsuariosComponent },
  { path: 'detalle-usuario/:id', component: DetalleUsuarioComponent },
  { path: 'albumes', component: AlbumesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }