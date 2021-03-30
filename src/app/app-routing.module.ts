import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { ProdutoListComponent } from './components/produto/produto-list/produto-list.component';


const routes: Routes = [
  { path: '',         component: HomeComponent  },
  { path: 'produto',  component: ProdutoComponent },
  { path: 'produtos', component: ProdutoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
