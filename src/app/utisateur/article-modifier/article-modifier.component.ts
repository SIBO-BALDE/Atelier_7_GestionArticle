import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-article-modifier',
  templateUrl: './article-modifier.component.html',
  styleUrls: ['./article-modifier.component.css']
})
export class ArticleModifierComponent implements OnInit {
  article: any;
  posts: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
    // private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    const articleId = this.route.snapshot.params['id'];
    this.articleService.getPostById(articleId).subscribe(data => {
      this.article = data;
    });
  }

  editerArticle(): void {
    // Créez un objet contenant les champs modifiés
    const updatedFields = {
      title: this.article.title,
      body: this.article.body
      // Ajoutez les autres champs que vous souhaitez mettre à jour
    };

    // Appel du service pour mettre à jour partiellement l'article
    this.articleService.editerArticle(this.article.id, updatedFields).subscribe(() => {
      // Redirection vers les détails de l'article après la mise à jour
      this.router.navigate(['/article', this.article.id]);
    });
  }

  // openEditModal(content: any): void {
  //   // Ouvrir le modal avec le service NgbModal
  //   this.modalService.open(content, { centered: true, size: 'lg' });
  // }
}

