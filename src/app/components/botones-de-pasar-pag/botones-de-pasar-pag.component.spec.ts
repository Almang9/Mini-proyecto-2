import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesDePasarPagComponent } from './botones-de-pasar-pag.component';

describe('BotonesDePasarPagComponent', () => {
  let component: BotonesDePasarPagComponent;
  let fixture: ComponentFixture<BotonesDePasarPagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesDePasarPagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesDePasarPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
