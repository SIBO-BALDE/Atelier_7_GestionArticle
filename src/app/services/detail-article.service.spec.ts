import { TestBed } from '@angular/core/testing';

import { DetailArticleService } from './detail-article.service';

describe('DetailArticleService', () => {
  let service: DetailArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
