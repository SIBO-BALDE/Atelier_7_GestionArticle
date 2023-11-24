import { TestBed } from '@angular/core/testing';

import { AjoutArticleService } from './ajout-article.service';

describe('AjoutArticleService', () => {
  let service: AjoutArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
