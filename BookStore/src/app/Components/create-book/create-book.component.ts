import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AddBookResponseModel } from 'src/app/ApiResponseModels/AddBookResponseModel';
import { BookModel } from 'src/app/Model';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  public addBookForm : FormGroup ;
  showMessage:boolean=false;
  constructor(private _bookService: BookService) { 
    this.addBookForm = new FormGroup(
      {
        title: new FormControl(null,Validators.required), 
        description: new FormControl()
      })
  }

  ngOnInit(): void {
    console.log(this.addBookForm.value);
  }
  saveBook(): void{
    this._bookService.addBook(this.addBookForm.value).subscribe(x=>{
      this.showMessage=true;
    });
  }
  public CloseMessage():void{
    this.showMessage=false;
  }
}
