import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaReportePersonalComponent } from './tabla-reporte-personal.component';

describe('TablaReportePersonalComponent', () => {
  let component: TablaReportePersonalComponent;
  let fixture: ComponentFixture<TablaReportePersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaReportePersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaReportePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
