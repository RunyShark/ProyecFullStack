import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaupdateComponent } from './ideaupdate.component';

describe('IdeaupdateComponent', () => {
  let component: IdeaupdateComponent;
  let fixture: ComponentFixture<IdeaupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeaupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
