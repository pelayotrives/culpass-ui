import React from "react";
import { Box } from "../../src/components/Layout";
import { mount } from "cypress/react18";

describe('Box Component', () => {
  it('renders with default props', () => {
    mount(<Box>Default Box</Box>);
    cy.get('div').contains('Default Box');
  });

  it('renders with different HTML elements', () => {
    mount(<Box as="div">Div Box</Box>);
    cy.get('div').should('exist');
    cy.get('div').contains('Div Box');

    mount(<Box as="section">Section Box</Box>);
    cy.get('section').should('exist');
    cy.get('section').contains('Section Box');
  });

  it('applies custom class names', () => {
    mount(<Box className="custom-class">Box with Custom Class</Box>);
    cy.get('div').should('have.class', 'custom-class');
  });

  it('renders with additional props', () => {
    mount(<Box id="box-id" data-test="box-data">Stack with Additional Props</Box>);
    cy.get('div#box-id').should('exist');
    cy.get('div[data-test="box-data"]').should('exist');
  });
});
