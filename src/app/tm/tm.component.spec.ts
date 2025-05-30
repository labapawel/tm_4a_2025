import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TMComponent } from './tm.component';

describe('TMComponent', () => {
  let component: TMComponent;
  let fixture: ComponentFixture<TMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
