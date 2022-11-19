import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MOCK_CHARACTER } from 'src/app/utils/mocks/mocks';

import { CardCharacterComponent } from './card-character.component';

describe('CardCharacterComponent', () => {
  let component: CardCharacterComponent;
  let fixture: ComponentFixture<CardCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCharacterComponent);
    component = fixture.componentInstance;
    component.result = MOCK_CHARACTER;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verifyStatus return {background-color: #0bd50b}', () => {
    const result = component.verifyStatus('Alive');
    expect(result).toEqual({'background-color': '#0bd50b'})
  });

  it('verifyStatus return {background-color: #d10000}', () => {
    const result = component.verifyStatus('Dead');
    expect(result).toEqual({'background-color': '#d10000'})
  });

  it('verifyStatus return {background-color: #dcdc00}', () => {
    const result = component.verifyStatus('Unknow');
    expect(result).toEqual({'background-color': '#dcdc00'})
  });

  it('verifyStatus return {background-color: #dcdc00} default', () => {
    const result = component.verifyStatus('test');
    expect(result).toEqual({'background-color': '#dcdc00'})
  });
});
