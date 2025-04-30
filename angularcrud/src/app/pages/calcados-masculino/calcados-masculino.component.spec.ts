import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcadosMasculinoComponent } from './calcados-masculino.component';

describe('CalcadosMasculinoComponent', () => {
  let component: CalcadosMasculinoComponent;
  let fixture: ComponentFixture<CalcadosMasculinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcadosMasculinoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalcadosMasculinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
