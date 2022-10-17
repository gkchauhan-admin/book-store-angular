import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/Model';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {

  public books: BookModel[]=[];
   constructor(private _bookService: BookService)
   {
 
   }
   ngOnInit():void{
    this._bookService.getBook().subscribe(x=>{
    this.books=x;
   });
   }
}
