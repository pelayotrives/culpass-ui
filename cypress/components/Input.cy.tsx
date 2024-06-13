import React from "react";
import { Input } from "../../src/components";
import { mount } from "cypress/react18";

describe('Input Component', () => {
  it('renders with default props', () => {
    mount(<Input placeholder="Default Input" />);
    cy.get('input').should('have.class', 'text-paragraph4');
    cy.get('input').should('have.attr', 'placeholder', 'Default Input');
  });

  it('renders with different font sizes', () => {
    mount(<Input fontSize="paragraph1" placeholder="Paragraph 1" />);
    cy.get('input').should('have.class', 'text-paragraph1');

    mount(<Input fontSize="paragraph2" placeholder="Paragraph 2" />);
    cy.get('input').should('have.class', 'text-paragraph2');
  });

  it('renders with different input types', () => {
    mount(<Input type="email" placeholder="Email Input" />);
    cy.get('input').should('have.attr', 'type', 'email');

    mount(<Input type="password" placeholder="Password Input" />);
    cy.get('input').should('have.attr', 'type', 'password');
  });

  it('renders disabled state', () => {
    mount(<Input disabled placeholder="Disabled Input" />);
    cy.get('input').should('be.disabled');
    cy.get('input').should('have.class', 'disabled:cursor-not-allowed');
  });

  it('renders read-only state', () => {
    mount(<Input readOnly placeholder="Read-Only Input" />);
    cy.get('input').should('have.attr', 'readonly');
  });

  it('renders required state', () => {
    mount(<Input required placeholder="Required Input" />);
    cy.get('input').should('have.attr', 'required');
  });

  it('displays validation error state', () => {
    mount(<Input required placeholder="Required Input" />);
    cy.get('input').focus().blur();
    cy.get('input:invalid').should('have.class', 'invalid:border-error');
  });

  it('accepts text input', () => {
    mount(<Input placeholder="Type here" />);
    cy.get('input').type('Hello, World!');
    cy.get('input').should('have.value', 'Hello, World!');
  });
});
