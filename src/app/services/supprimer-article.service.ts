import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupprimerArticleService {
// varable de type any pour stocker des données d'articles any signifie que le contenue peut etre de n'importe quel type
  articles: any;
  
  //url="https://jsonplaceholder.typicode.com/posts";: Cette ligne initialise une variable url avec une URL. Cette URL pointe probablement vers une API REST qui fournit des données d'articles. Le service semble être conçu pour interagir avec cette API.
  url="https://jsonplaceholder.typicode.com/posts";

  //constructor(private http: HttpClient) { }: Le constructeur de la classe prend un paramètre http de type HttpClient. Cela suggère que cette classe dépend du service HttpClient pour effectuer des requêtes HTTP.
  constructor( private http : HttpClient) { }

//La méthode supprimerArticle(id: number): Observable<any> { ... } est une méthode qui prend un paramètre id de type number. Elle renvoie un objet de type Observable<any>. Les Observables sont utilisés dans Angular pour gérer les opérations asynchrones.
//À l'intérieur de la méthode, une nouvelle URL spécifique à l'article est construite en ajoutant l'ID de l'article à l'URL de base. Ensuite, la méthode  /http.delete(urlArticle) est appelée pour effectuer une requête HTTP DELETE à l'URL de l'article. Cela suggère que cette méthode est destinée à supprimer  //un article en utilisant son ID.
 //Notez que cette méthode renvoie un Observable, ce qui signifie que l'opération de suppression est asynchrone. Vous devrez probablement vous abonner à cet  //Observable dans le composant ou le service appelant pour être informé du résultat de la requête DELETE.

  supprimerArticle(id: number): Observable<any> {
    const urlArticle = `${this.url}/${id}`;
    return this.http.delete(urlArticle);
  }
}
