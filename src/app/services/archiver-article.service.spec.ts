import { TestBed } from '@angular/core/testing';

import { ArchiverArticleService } from './archiver-article.service';

describe('ArchiverArticleService', () => {
  let service: ArchiverArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchiverArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
