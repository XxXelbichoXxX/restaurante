import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFoodComponent } from './delete-food.component';

describe('DeleteFoodComponent', () => {
  let component: DeleteFoodComponent;
  let fixture: ComponentFixture<DeleteFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteFoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
