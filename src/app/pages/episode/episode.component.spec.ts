import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule }  from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/service/request';
import { EpisodeComponent } from './episode.component';
import { of } from 'rxjs';
import { MOCK_CHARACTER, MOCK_EPISODE } from 'src/app/utils/mocks/mocks';

describe('EpisodeComponent', () => {
  let component: EpisodeComponent;
  let requestService: RequestService;
  let fixture: ComponentFixture<EpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeComponent ],
      imports: [HttpClientTestingModule],
      providers: [RequestService, { provide: ActivatedRoute, useValue: {params: of(1)}}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeComponent);
    requestService = TestBed.inject(RequestService);
    component = fixture.componentInstance;
    component.result = MOCK_EPISODE;
    component.characteries = [MOCK_CHARACTER];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit', () => {
    spyOn(component, 'listEpisode').and.callThrough();
    component.ngOnInit();
    expect(component.listEpisode).toHaveBeenCalledTimes(1);
  });

  it('listEpisode', async () => {
    spyOn(requestService, 'RequestEpisode').and.returnValue(Promise.resolve(MOCK_EPISODE));
    spyOn(requestService, 'RequestMultiplesCharacteries').and.returnValue(Promise.resolve([MOCK_CHARACTER]));
    await component.listEpisode(1);
    expect(requestService.RequestEpisode).toHaveBeenCalledTimes(1);
    expect(requestService.RequestMultiplesCharacteries).toHaveBeenCalledTimes(1);
    expect(component.result).toEqual(MOCK_EPISODE);
    expect(component.characteries).toEqual([MOCK_CHARACTER]);
  });
});
