import { TestBed, inject} from '@angular/core/testing';
import { HeroService } from './hero.service';
import { HttpClient} from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
  });
});

  it('it create my service', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
