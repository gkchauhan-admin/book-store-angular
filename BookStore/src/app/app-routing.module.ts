import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './Components/all-books/all-books.component';
import { CreateBookComponent } from './Components/create-book/create-book.component';

const routes: Routes = [
  {path:'', component:AllBooksComponent},
  {path:'create-new', component:CreateBookComponent},
  {path:'getAll-book', component:AllBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
