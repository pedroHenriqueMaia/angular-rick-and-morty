import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RequestService } from 'src/app/service/request';
import { MOCK_CHARACTER, MOCK_EPISODE, MOCK_LOCATION } from 'src/app/utils/mocks/mocks';
import { CharacterPageComponent } from './character-page.component';

describe('CharacterPageComponent', () => {
  let component: CharacterPageComponent;
  let requestService: RequestService;
  let fixture: ComponentFixture<CharacterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterPageComponent ],
      imports: [HttpClientTestingModule],
      providers: [RequestService, { provide: ActivatedRoute, useValue: {params: of(1)}}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterPageComponent);
    requestService = TestBed.inject(RequestService);
    component = fixture.componentInstance;
    component.result = MOCK_CHARACTER;
    component.characteriesByLocation = [MOCK_CHARACTER];
    component.episodes = [MOCK_EPISODE];
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

  it('listCharacter', async () => {
    spyOn(requestService, 'RequestCharacter').and.returnValue(Promise.resolve(MOCK_CHARACTER));
    spyOn(requestService, 'RequestMultiplesEpisodes').and.returnValue(Promise.resolve([MOCK_EPISODE]));
    spyOn(requestService, 'RequestMultiplesCharacteries').and.returnValue(Promise.resolve([MOCK_CHARACTER]));
    spyOn(requestService, 'RequestLocation').and.returnValue(Promise.resolve(MOCK_LOCATION));
    await component.listCharacter(1);
    expect(requestService.RequestCharacter).toHaveBeenCalledTimes(1);
    expect(requestService.RequestMultiplesEpisodes).toHaveBeenCalledTimes(1);
    expect(requestService.RequestMultiplesCharacteries).toHaveBeenCalledTimes(1);
    expect(requestService.RequestLocation).toHaveBeenCalledTimes(1);
    expect(component.characteriesByLocation).toEqual([MOCK_CHARACTER])
    expect(component.episodes).toEqual([MOCK_EPISODE])
    expect(component.result).toEqual(MOCK_CHARACTER)
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
