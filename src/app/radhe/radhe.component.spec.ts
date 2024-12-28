import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadheComponent } from './radhe.component';

describe('RadheComponent', () => {
  let component: RadheComponent;
  let fixture: ComponentFixture<RadheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
