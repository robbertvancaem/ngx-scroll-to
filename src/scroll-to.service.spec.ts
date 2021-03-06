import { Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { TestBed, async } from '@angular/core/testing';
import { ScrollToService } from './scroll-to.service';

class MockDocument { }
class MockPlatform { }

describe('ScrollToService', () => {

	let service: ScrollToService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			providers: [
				{
					provide: DOCUMENT, useClass: MockDocument
				},
				{
					provide: PLATFORM_ID, useClass: MockPlatform
				},
				ScrollToService
			]
		});

		service = TestBed.get(ScrollToService);
	}));

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should have a public function (private API) called `ɵonTrigger`', () => {
		expect(service.ɵonTrigger instanceof Function).toBeTruthy();
	});
});
