import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarCategoriasComponent } from './components/listar-categorias/listar-categorias.component';
import { CrearCategoriaComponent } from './components/crear-categoria/crear-categoria.component';

const routes: Routes = [
  { path: '', redirectTo: '/listar-productos', pathMatch: 'full' },
  { path: 'listar-productos', component: ListarProductosComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'editar-producto/:id', component: CrearProductoComponent },
  { path: 'listar-categorias', component: ListarCategoriasComponent },
  { path: 'crear-categoria', component: CrearCategoriaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
