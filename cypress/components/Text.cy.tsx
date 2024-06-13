import React from "react";
import { Text } from "../../src/components";
import { mount } from "cypress/react18";

describe('Text Component', () => {
  it('renders with default props', () => {
    mount(<Text>Default Text</Text>);
    cy.get('p').should('have.class', 'text-paragraph8');
    cy.get('p').contains('Default Text');
  });

  it('renders with different font sizes', () => {
    mount(<Text fontSize="paragraph4">Paragraph 4</Text>);
    cy.get('p').should('have.class', 'text-paragraph4');

    mount(<Text fontSize="paragraph5">Paragraph 5</Text>);
    cy.get('p').should('have.class', 'text-paragraph5');
  });

  it('renders with different font families', () => {
    mount(<Text fontFamily="nunito">Nunito Font</Text>);
    cy.get('p').should('have.class', 'font-nunito');

    mount(<Text fontFamily="montserrat">Montserrat Font</Text>);
    cy.get('p').should('have.class', 'font-montserrat');
  });

  it('renders with different line heights', () => {
    mount(<Text lineHeight={1}>Line Height 1</Text>);
    cy.get('p').should('have.class', 'leading-1');

    mount(<Text lineHeight={3}>Line Height 3</Text>);
    cy.get('p').should('have.class', 'leading-3');
  });

  it('renders with different font weights', () => {
    mount(<Text weight="bold">Bold Weight</Text>);
    cy.get('p').should('have.class', 'font-bold');

    mount(<Text weight="thin">Thin Weight</Text>);
    cy.get('p').should('have.class', 'font-thin');
  });

  it('renders with different text alignments', () => {
    mount(<Text align="center">Centered Text</Text>);
    cy.get('p').should('have.class', 'text-center');

    mount(<Text align="right">Right Aligned Text</Text>);
    cy.get('p').should('have.class', 'text-right');
  });

  it('renders with italic style', () => {
    mount(<Text italic={true}>Italic Text</Text>);
    cy.get('p').should('have.class', 'italic');

    mount(<Text italic={false}>Non-italic Text</Text>);
    cy.get('p').should('not.have.class', 'italic');
  });

  it('renders with underline style', () => {
    mount(<Text underline={true}>Underlined Text</Text>);
    cy.get('p').should('have.class', 'underline');

    mount(<Text underline={false}>Non-underlined Text</Text>);
    cy.get('p').should('not.have.class', 'underline');
  });
});
