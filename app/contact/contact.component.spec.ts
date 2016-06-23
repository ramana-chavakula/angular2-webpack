import {
  beforeEach, beforeEachProviders, describe,
  expect, it, inject
} from '@angular/core/testing';
import { ContactComponent } from './contact.component.ts';

describe('ContactComponent', () => {
  let contactComponent: ContactComponent;

  beforeEachProviders(() => [ContactComponent]);

  beforeEach(inject([ContactComponent], (_contactComponent: ContactComponent) => {
    contactComponent = _contactComponent;
  }));

  it('should create the component', () => {
    expect(contactComponent).toBeTruthy();
  });

  it('should display a message', () => {
    expect(contactComponent.message).toEqual('Contact me on chnvrm@gmail.com');
  });
});