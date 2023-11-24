import { TestBed } from '@angular/core/testing';

import { SupprimerArticleService } from './supprimer-article.service';

describe('SupprimerArticleService', () => {
  let service: SupprimerArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupprimerArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
