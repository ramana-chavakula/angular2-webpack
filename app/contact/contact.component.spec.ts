import {
  beforeEach, beforeEachProviders, describe,
  expect, it, inject
} from '@angular/core/testing';
import { ContactComponent } from './contact.component.ts';

beforeEachProviders(() => [ContactComponent]);

describe('ContactComponent', () => {
  it('should create the component',
      inject([ContactComponent], (contactComponent: ContactComponent) => {
    expect(contactComponent).toBeTruthy();
  }));

  it('should display a message',
      inject([ContactComponent], (contactComponent: ContactComponent) => {
    expect(contactComponent.message).toEqual('Contact me on chnvrm@gmail.com');
  }));
});