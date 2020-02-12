import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwtcherComponent } from './swtcher.component';

describe('SwtcherComponent', () => {
  let component: SwtcherComponent;
  let fixture: ComponentFixture<SwtcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwtcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwtcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
