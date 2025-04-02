import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDarkModeToggleComponent } from './ngx-dark-mode-toggle.component';

describe('NgxDarkModeToggleComponent', () => {
  let component: NgxDarkModeToggleComponent;
  let fixture: ComponentFixture<NgxDarkModeToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxDarkModeToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxDarkModeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
