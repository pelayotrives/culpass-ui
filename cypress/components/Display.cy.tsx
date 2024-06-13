import React from "react";
import { Display } from "../../src/components";
import { mount } from "cypress/react18";

describe('Display Component', () => {
  it('renders with default props', () => {
    mount(<Display>Default Display</Display>);
    cy.get('h2').should('have.class', 'text-display6');
    cy.get('h2').contains('Default Display');
  });

  it('renders with different font sizes', () => {
    mount(<Display fontSize="display1">Display 1</Display>);
    cy.get('h2').should('have.class', 'text-display1');

    mount(<Display fontSize="display2">Display 2</Display>);
    cy.get('h2').should('have.class', 'text-display2');
  });

  it('renders with different line heights', () => {
    mount(<Display lineHeight={1}>Line Height 1</Display>);
    cy.get('h2').should('have.class', 'leading-1');

    mount(<Display lineHeight={3}>Line Height 3</Display>);
    cy.get('h2').should('have.class', 'leading-3');
  });

  it('renders with different font families', () => {
    mount(<Display fontFamily="nunito">Nunito Font</Display>);
    cy.get('h2').should('have.class', 'font-nunito');

    mount(<Display fontFamily="montserrat">Montserrat Font</Display>);
    cy.get('h2').should('have.class', 'font-montserrat');

    mount(<Display fontFamily="instrument">Instrument Serif Font</Display>);
    cy.get('h2').should('have.class', 'font-instrument');
  });

  it('renders with different font weights', () => {
    mount(<Display weight="bold">Bold Weight</Display>);
    cy.get('h2').should('have.class', 'font-bold');

    mount(<Display weight="thin">Thin Weight</Display>);
    cy.get('h2').should('have.class', 'font-thin');
  });

  it('renders with different text alignments', () => {
    mount(<Display align="center">Centered Text</Display>);
    cy.get('h2').should('have.class', 'text-center');

    mount(<Display align="right">Right Aligned Text</Display>);
    cy.get('h2').should('have.class', 'text-right');
  });

  it('renders with italic style', () => {
    mount(<Display italic={true}>Italic Text</Display>);
    cy.get('h2').should('have.class', 'italic');

    mount(<Display italic={false}>Non-italic Text</Display>);
    cy.get('h2').should('not.have.class', 'italic');
  });

  it('renders with underline style', () => {
    mount(<Display underline={true}>Underlined Text</Display>);
    cy.get('h2').should('have.class', 'underline');

    mount(<Display underline={false}>Non-underlined Text</Display>);
    cy.get('h2').should('not.have.class', 'underline');
  });
});
