import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybookCtaComponent } from './playbook-cta.component';

describe('PlaybookCtaComponent', () => {
  let component: PlaybookCtaComponent;
  let fixture: ComponentFixture<PlaybookCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaybookCtaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaybookCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
