import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddBookResponseModel } from '../ApiResponseModels/AddBookResponseModel';
import { BookModel } from '../Model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _httpClient: HttpClient) { }
  
  public getBook():Observable<BookModel[]>{
    return this._httpClient.get<BookModel[]>("https://localhost:44324/api/Books/GetAll");
 } 
 
 public addBook(bookModel: BookModel):Observable<AddBookResponseModel>{
  return this._httpClient.post<AddBookResponseModel>("https://localhost:44324/api/Books/AddBook", bookModel);
}
}
