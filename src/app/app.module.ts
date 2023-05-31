import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { AlbumesComponent } from './albumes/albumes.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DetalleUsuarioComponent,
    TablaUsuariosComponent,
    AlbumesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
