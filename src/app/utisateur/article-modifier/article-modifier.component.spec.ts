import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleModifierComponent } from './article-modifier.component';

describe('ArticleModifierComponent', () => {
  let component: ArticleModifierComponent;
  let fixture: ComponentFixture<ArticleModifierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleModifierComponent]
    });
    fixture = TestBed.createComponent(ArticleModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
