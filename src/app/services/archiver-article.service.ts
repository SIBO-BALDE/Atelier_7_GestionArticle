import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchiverArticleService {
  
  //url="https://jsonplaceholder.typicode.com/posts";: Cette ligne initialise une variable url avec une URL. Cette URL pointe probablement vers une API REST qui fournit des données d'articles. Le service semble être conçu pour interagir avec cette API.
  url="https://jsonplaceholder.typicode.com/posts";

  //constructor(private http: HttpClient) { }: Le constructeur de la classe prend un paramètre http de type HttpClient. Cela suggère que cette classe dépend du service HttpClient pour effectuer des requêtes HTTP.
  constructor( private http : HttpClient) { }

   // Méthode pour archiver un article
   archiverArticle(articleId: number): Observable<any> {
    // Implémentez ici la logique pour archiver l'article
    // Vous pouvez utiliser l'API JSONPlaceholder pour simuler cela
    const archiveUrl = `${this.url}/${articleId}`;
    return this.http.delete(archiveUrl);
    // const updateData = { archived: true };
    // return this.http.patch(archiveUrl, updateData);
  }

// Méthode pour récupérer la liste des articles archivés
//https://jsonplaceholder.typicode.com/posts?archived=true
getArticlesArchives(): Observable<any> {
  // Implémentez ici la logique pour récupérer la liste des articles archivés
  // Vous pouvez utiliser l'API JSONPlaceholder pour simuler cela
  const archivesUrl = `${this.url}/?archived=true`;
  return this.http.get(archivesUrl);
}

}
