// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DetailArticleService {

//   constructor() { }
//   getArticleDetails(articleId: number): Observable<any> {
//     const url = `${this.apiUrl}/posts/${articleId}`;
//     return this.http.get<any>(url);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailArticleService {
  url = 'https://jsonplaceholder.typicode.com/'; // URL de base de JSONPlaceholder

  constructor(private http: HttpClient) {}

  getArticleDetails(articleId: number): Observable<any> {
   
    return this.http.get<any>(`${this.url}/posts/${articleId}`);
  }
}
