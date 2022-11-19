import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RequestService } from 'src/app/service/request';

import { CharacterComponent } from './character.component';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let requestService: RequestService;
  let fixture: ComponentFixture<CharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterComponent ],
      imports: [HttpClientTestingModule],
      providers: [RequestService, { provide: ActivatedRoute, useValue: {params: of(1)}}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComponent);
    requestService = TestBed.inject(RequestService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit', () => {
    spyOn(component, 'listCharacter').and.callThrough();
    component.ngOnInit();
    expect(component.listCharacter).toHaveBeenCalledTimes(1);
  });

  it('searchValue', () => {
    spyOn(component, 'listCharacter').and.callThrough();
    component.searchValue({search: 'test'});
    expect(component.listCharacter).toHaveBeenCalledTimes(1);
    expect(component.results).toEqual([]);
    expect(component.searchCharatcer).toEqual('test');
  });

  it('listCharacter 2 params', () => {
    spyOn(requestService, 'RequestCharacteries').and.callThrough();
    component.listCharacter(1, 'rick');
    expect(requestService.RequestCharacteries).toHaveBeenCalledTimes(1);
    expect(requestService.RequestCharacteries).toHaveBeenCalledWith(1, 'rick');
  });

  it('listCharacter 1 param', () => {
    spyOn(requestService, 'RequestCharacteries').and.callThrough();
    component.listCharacter(1);
    expect(requestService.RequestCharacteries).toHaveBeenCalledTimes(1);
    expect(requestService.RequestCharacteries).toHaveBeenCalledWith(1);
  });

  it('onScrolledDown 1 param', () => {
    spyOn(component, 'listCharacter').and.callThrough();
    component.onScrolledDown();
    expect(component.listCharacter).toHaveBeenCalledTimes(1);
    expect(component.listCharacter).toHaveBeenCalledWith(2);
    expect(component.page).toEqual(2);
  });

  it('onScrolledDown 2 params', () => {
    component.searchCharatcer = 'rick';
    spyOn(component, 'listCharacter').and.callThrough();
    component.onScrolledDown();
    expect(component.listCharacter).toHaveBeenCalledTimes(1);
    expect(component.listCharacter).toHaveBeenCalledWith(2, 'rick');
    expect(component.page).toEqual(2);
  });

  it('onScrollTop', () => {
    component.onScrollTop();
    expect(component['document'].documentElement.scrollTop).toEqual(0);
  });
});
