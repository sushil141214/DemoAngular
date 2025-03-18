import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeNumberComponent } from './add-employee-number.component';

describe('AddEmployeeNumberComponent', () => {
  let component: AddEmployeeNumberComponent;
  let fixture: ComponentFixture<AddEmployeeNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEmployeeNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEmployeeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
