import {TestBed, async} from '@angular/core/testing';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';

import {ContactComponent} from './contact.component.ts';

describe('ContactComponent', () => {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent]
    });
  });

  it('should create the component and display a message', async(() => {
    return TestBed
      .compileComponents().then(() => {
        let componentFixture = TestBed.createComponent(ContactComponent);
        let element = componentFixture.nativeElement;
        let componentInstance = componentFixture.componentInstance;
        componentFixture.detectChanges();
        expect(element).toBeTruthy();
        expect(componentInstance.message).toEqual('Contact me on chnvrm@gmail.com');
    });
  }));
});