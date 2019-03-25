import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClosetPage } from './closet.page';
import { ClosetResolver } from './closet.resolver';

const routes: Routes = [
  {
    path: '',
    component: ClosetPage,
    resolve: {
      data: ClosetResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClosetPage],
  providers: [
    ClosetResolver
  ]
})
export class ClosetPageModule {}
