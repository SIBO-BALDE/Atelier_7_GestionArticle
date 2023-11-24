import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjoutArticleService {
  baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor( private http:HttpClient) { }
  // ajouterArticle(article: any): Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/posts`, article);
  // }
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/posts`);
  }

  getArticleById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/posts/${id}`);
  }

  ajouterArticle(article: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/posts`, article);
  }

  // modifierArticle(article: any): Observable<any> {
  //   const id = article.id;
  //   // Utilisez la méthode HTTP PUT pour mettre à jour l'article
  //   return this.http.put<any>(${this.baseUrl}/posts/${id}, article);
  // }
}

