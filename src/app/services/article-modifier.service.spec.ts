import { TestBed } from '@angular/core/testing';

import { ArticleModifierService } from './article-modifier.service';

describe('ArticleModifierService', () => {
  let service: ArticleModifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleModifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
