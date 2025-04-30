import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInsereComponent } from './admin-insere.component';

describe('AdminInsereComponent', () => {
  let component: AdminInsereComponent;
  let fixture: ComponentFixture<AdminInsereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminInsereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminInsereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
