import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TarjetaDetailComponent } from '../tarjeta/tarjeta-detail/tarjeta-detail.component';
import { TarjetaListComponent } from '../tarjeta/tarjeta-list/tarjeta-list.component';
import { TarjetaCreateComponent} from '../tarjeta/tarjeta-create/tarjeta-create.component';

const routes: Routes = [

  {
    path: 'tarjetas',
    children: [{
      path: 'list',
      component: TarjetaListComponent
    },
    {
    path: 'add',
    component: TarjetaCreateComponent
    },
    {
      path: ':id',
      component: TarjetaDetailComponent,
      outlet: 'detail'
    }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }