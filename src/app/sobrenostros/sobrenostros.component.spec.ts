import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrenostrosComponent } from './sobrenostros.component';

describe('SobrenostrosComponent', () => {
  let component: SobrenostrosComponent;
  let fixture: ComponentFixture<SobrenostrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobrenostrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobrenostrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
