import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UciAdminComponent } from './uci-admin.component';

describe('UciAdminComponent', () => {
  let component: UciAdminComponent;
  let fixture: ComponentFixture<UciAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UciAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UciAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
