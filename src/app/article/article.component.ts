import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { SupprimerArticleService } from '../services/supprimer-article.service';
import { ArchiverArticleService } from '../services/archiver-article.service';
import { AjoutArticleService } from '../services/ajout-article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent  implements OnInit {
  // url="https://jsonplaceholder.typicode.com/posts"
  

    /** declaration de la variable 'users' qui sera utilisée pour stocker les données des utilisateurs récupérées du service.  */
posts:any;
tabPost:[]= [];
// articlesParPage:number=8
// pageActuelle:number=1
// recupArticle:any=0
// Initialiser les articles ici (par exemple, en les récupérant depuis JSONPlaceholder)
  articles=[];
  // title: string ="";
  // body: string ="";

/** constructeur qui prend en paramètre un service UserService qui sera injecté automatiquement par Angular grâce à l'injection de dépendance.  */
constructor(
  private articleService : ArticleService,
  private supprimerArticleService : SupprimerArticleService,
  private archiverService: ArchiverArticleService,
  private apiService: AjoutArticleService
  
  ){}
 
  
  isVisible: boolean=true;
visibleFunction(){
  this.isVisible=!this.isVisible;

}
//userData est une  instance (objet) de la classe UserService
ngOnInit(): void {
  
  // Exemple: Simuler l'archivage d'un article avec ID 1
  this.archiverService.archiverArticle(1).subscribe(() => {
    console.log('Article archivé avec succès.');
  });

  
  this.articleService.getPosts().subscribe(posts =>{
    this.posts = posts; 
    console.log(posts, "post");
    // localStorage.getItem('post')
    localStorage.setItem("post", JSON.stringify(this.posts));
    const recupTab = localStorage.getItem("post");
    if (recupTab !== null) {
      this.tabPost = JSON.parse(recupTab);
    } else {
      // Gérer le cas où la clé "post" n'existe pas dans le stockage local
      console.error("La clé 'post' n'existe pas dans le stockage local.");
    }
    // this.tabPost = JSON.parse(localStorage.getItem("post"));
    console.log(this.tabPost, "local");
    console.log( typeof this.tabPost, "typeof tabPost");
    console.log(typeof this.posts, 'post');
    
    
  })
  console.log(this.tabPost, 'tabpost');
 
  
  

// const recupTab=localStorage.getItem('post');
// console.log(recupTab);
//  const recupTabVar=JSON.parse(recupTab)

}

articlesArchiver(id: number){
   // Exemple: Simuler l'archivage d'un article avec ID 1
   this.archiverService.archiverArticle(id).subscribe(() => {
    console.log('Article archivé avec succès.');
    alert(this.archiverService)
    console.log(this.archiverService,'ici cest la console');
  });

 
   
    
  }

  




 // Ajoutez une méthode pour gérer la suppression d'un article
 //La méthode supprimerArticle(id) de ce service est appelée avec l'ID de l'article à supprimer
 supprimerArticle(id: number): void {
  //this.supprimerArticleService.supprimerArticle(id).subscribe(() => {...}); : Cela indique qu'un service appelé supprimerArticleService est utilisé pour effectuer une opération de suppression d'article.
  // Le subscribe indique qu'une fois que la suppression est effectuée avec succès, le reste du code sera executer
  this.supprimerArticleService.supprimerArticle(id).subscribe(() => {
    // console.log(`Article avec l'ID ${id} supprimé avec succès.`);
    // Retirez l'article de la liste côté client
    //this.posts = this.posts.filter((article: { id: number; }) => article.id !== id); : Cela utilise la méthode filter pour créer un nouveau tableau (this.posts) en excluant l'article avec l'ID spécifié. La condition dans la fonction de rappel de filter est que les articles dont l'ID est différent de l'ID spécifié sont inclus dans le nouveau tableau. Ainsi, cela a pour effet de retirer l'article avec l'ID spécifié de la liste côté client (this.posts).
    this.posts = this.posts.filter((article: { id: number; }) => article.id !== id);
  });
}

postsArticles: any[] = [];
  nouvelArticle = { title: '', body: '' };
  isAjoutModalOuvert = false;

  ouvrirAjoutModal() {
    this.isAjoutModalOuvert = true;
  }

  fermerAjoutModal() {
    this.isAjoutModalOuvert = false;
  }

ajouterArticle() {
    const titreTemporaire = this.nouvelArticle.title;
    const contenuTemporaire = this.nouvelArticle.body;

    

    this.apiService.ajouterArticle(this.nouvelArticle).subscribe((response: any) => {
      console.log('Réponse du service après ajout d\'article :', response);
      this.posts.push(response); // Ajouter le nouvel article à la liste existante
      this.fermerAjoutModal(); // Fermer le modal
      console.log('tableau', this.tabPost);

      // Réinitialiser les champs en utilisant les valeurs temporaires
      this.nouvelArticle = { title: '', body: '' };
    });
    // Récupérer les articles locaux
    // const localArticles = 
    localStorage.setItem('post', JSON.stringify(this.tabPost));

//     // Afficher les valeurs pour le débogage
    console.log('Valeurs après ajout :', titreTemporaire, contenuTemporaire);
    this.fermerAjoutModal()
  }
 
  //function pour modifier les articles
 

  









// pagination Debut
   // Méthode pour déterminer les articles à afficher sur la page actuelle
  //  getArticlesPage(): any[] {
  //   const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
  //   const indexFin = indexDebut + this.articlesParPage;
  //   return this.posts.slice(indexDebut, indexFin);
  // }
   // Méthode pour générer la liste des pages
  //  get pages(): number[] {
  //   const totalPages = Math.ceil(this.posts.length / this.articlesParPage);
  //   return Array(totalPages).fill(0).map((_, index) => index + 1);
  // }

  // Méthode pour obtenir le nombre total de pages
  // get totalPages(): number {
  //   return Math.ceil(this.posts.length / this.articlesParPage);
  // }

  // pagination Fin


}
