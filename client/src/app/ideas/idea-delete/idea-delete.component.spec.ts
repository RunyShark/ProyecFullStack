import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaDeleteComponent } from './idea-delete.component';

describe('IdeaDeleteComponent', () => {
  let component: IdeaDeleteComponent;
  let fixture: ComponentFixture<IdeaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
