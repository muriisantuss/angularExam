import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'author', component: AuthorComponent},
  {path: 'book', component: BookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
