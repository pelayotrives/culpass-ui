import React from "react";
import { Title } from "../../src/components";
import { mount } from "cypress/react18";

describe('Title Component', () => {
  it('renders with default props', () => {
    mount(<Title>Default Title</Title>);
    cy.get('span').should('have.class', 'text-title');
    cy.get('span').contains('Default Title');
  });

  it('renders with different font sizes', () => {
    mount(<Title fontSize="title1">Title 1</Title>);
    cy.get('span').should('have.class', 'text-title-xl');

    mount(<Title fontSize="title2">Title 2</Title>);
    cy.get('span').should('have.class', 'text-title-lg');
  });

  it('renders with different font weights', () => {
    mount(<Title weight="bold">Bold Weight</Title>);
    cy.get('span').should('have.class', 'font-bold');

    mount(<Title weight="thin">Thin Weight</Title>);
    cy.get('span').should('have.class', 'font-thin');
  });

  it('renders with different line heights', () => {
    mount(<Title lineHeight={1}>Line Height 1</Title>);
    cy.get('span').should('have.class', 'leading-1');

    mount(<Title lineHeight={3}>Line Height 3</Title>);
    cy.get('span').should('have.class', 'leading-3');
  });

  it('renders with different text alignments', () => {
    mount(<Title align="center">Centered Text</Title>);
    cy.get('span').should('have.class', 'text-center');

    mount(<Title align="right">Right Aligned Text</Title>);
    cy.get('span').should('have.class', 'text-right');
  });

  it('renders with italic style', () => {
    mount(<Title italic={true}>Italic Text</Title>);
    cy.get('span').should('have.class', 'italic');

    mount(<Title italic={false}>Non-italic Text</Title>);
    cy.get('span').should('not.have.class', 'italic');
  });

  it('renders with underline style', () => {
    mount(<Title underline={true}>Underlined Text</Title>);
    cy.get('span').should('have.class', 'underline');

    mount(<Title underline={false}>Non-underlined Text</Title>);
    cy.get('span').should('not.have.class', 'underline');
  });

  it('renders with different HTML elements', () => {
    mount(<Title as="h1">Heading 1</Title>);
    cy.get('h1').should('exist');
    cy.get('h1').contains('Heading 1');

    mount(<Title as="h6">Heading 6</Title>);
    cy.get('h6').should('exist');
    cy.get('h6').contains('Heading 6');
  });
});
