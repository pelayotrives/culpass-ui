import React from "react";
import { Stack } from "../../src/components/Layout";
import { mount } from "cypress/react18";

describe('Stack Component', () => {
    it('renders with default props', () => {
      mount(<Stack>Default Stack</Stack>);
      cy.get('div').should('have.class', 'flex').and('have.class', 'flex-row');
      cy.get('div').contains('Default Stack');
    });
  
    it('renders with vertical position', () => {
      mount(<Stack position="vertical">Vertical Stack</Stack>);
      cy.get('div').should('have.class', 'flex').and('have.class', 'flex-col');
      cy.get('div').contains('Vertical Stack');
    });
  
    it('renders with vertical reverse position', () => {
      mount(<Stack position="verticalRev">Vertical Reverse Stack</Stack>);
      cy.get('div').should('have.class', 'flex').and('have.class', 'flex-col-reverse');
      cy.get('div').contains('Vertical Reverse Stack');
    });

    it('renders with horizontal position', () => {
        mount(<Stack position="horizontal">Horizontal Stack</Stack>);
        cy.get('div').should('have.class', 'flex').and('have.class', 'flex-row');
        cy.get('div').contains('Horizontal Stack');
      });
  
    it('renders with horizontal reverse position', () => {
      mount(<Stack position="horizontalRev">Horizontal Reverse Stack</Stack>);
      cy.get('div').should('have.class', 'flex').and('have.class', 'flex-row-reverse');
      cy.get('div').contains('Horizontal Reverse Stack');
    });
  
    it('renders with none position', () => {
      mount(<Stack position="none">Hidden Stack</Stack>);
      cy.get('div').should('have.class', 'hidden');
      cy.get('div').contains('Hidden Stack');
    });
  
    it('renders with different HTML elements', () => {
      mount(<Stack as="section">Section Stack</Stack>);
      cy.get('section').should('exist');
      cy.get('section').contains('Section Stack');
  
      mount(<Stack as="article">Article Stack</Stack>);
      cy.get('article').should('exist');
      cy.get('article').contains('Article Stack');
    });
  
    it('applies custom class names', () => {
      mount(<Stack className="custom-class">Stack with Custom Class</Stack>);
      cy.get('div').should('have.class', 'custom-class');
    });
  
    it('renders with additional props', () => {
      mount(<Stack id="stack-id" data-test="stack-data">Stack with Additional Props</Stack>);
      cy.get('div#stack-id').should('exist');
      cy.get('div[data-test="stack-data"]').should('exist');
    });
  });