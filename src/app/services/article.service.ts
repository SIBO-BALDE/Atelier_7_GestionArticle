import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: any;
  articleId = 1;
  url="https://jsonplaceholder.typicode.com/posts";
  constructor( private http : HttpClient) { }
  
//fonction qui permet de recuperer les artices
  getPosts(): Observable<any>{
    return this.http.get<any>(this.url);
  }

  getPostById(id: number): Observable<any> {
  
    return this.http.get<any>(`${this.url}/${id}`);
  }

  /**methode qui nous permet de modifiery */
  editerArticle(id: number, updatedData: any): Observable<any> {
  
    return this.http.patch(`${this.url}/${id}`, updatedData);
  }

  //fontion qui permet de supprimmer un articles


 
}


