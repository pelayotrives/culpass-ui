import React from "react"
import { Button } from "../../src/components"
import { mount } from "cypress/react18"

describe('Button Component', () => {
  it('renders with default props', () => {
    mount(<Button>Default Button</Button>);
    cy.get('button').should('have.class', 'text-white');
    cy.get('button').contains('Default Button');
  });

  it('renders with different sizes', () => {
    mount(<Button size="sm">Small Button</Button>);
    cy.get('button').should('have.class', 'px-4 py-2 text-base');

    mount(<Button size="lg">Large Button</Button>);
    cy.get('button').should('have.class', 'px-6 py-3 text-xl');
  });

  it('renders with different intents', () => {
    mount(<Button intent="solid2">Secondary Button</Button>);
    cy.get('button').should('have.class', 'bg-secondary-1');

    mount(<Button intent="outline1">Outline Button</Button>);
    cy.get('button').should('have.class', 'border-primary-1');
  });

  it('renders with icon on the left', () => {
    mount(<Button icon="add" iconPosition="left">Button with Icon</Button>);
    cy.get('button').find('svg').should('have.class', 'mr-2');
  });

  it('renders with icon on the right', () => {
    mount(<Button icon="add" iconPosition="right">Button with Icon</Button>);
    cy.get('button').find('svg').should('have.class', 'ml-2');
  });

  it('renders disabled state', () => {
    mount(<Button disabled>Disabled Button</Button>);
    cy.get('button').should('be.disabled');
    cy.get('button').should('have.class', 'disabled:cursor-not-allowed');``
  });

  it('triggers onClick event', () => {
    const onClick = cy.stub().as('onClickHandler');
    mount(<Button onClick={onClick}>Clickable Button</Button>);
    cy.get('button').click();
    cy.get('@onClickHandler').should('have.been.calledOnce');
  });
});