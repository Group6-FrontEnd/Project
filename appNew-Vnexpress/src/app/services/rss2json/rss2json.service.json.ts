import { TestBed } from '@angular/core/testing';
import { Rss2jsonService } from './rss2json.service';

describe('Rss2jsonService', () => {
  let service: Rss2jsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Rss2jsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

