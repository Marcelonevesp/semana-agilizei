/// <reference types="cypress" />


Given(/^que acesso não possui registro$/, () => {
	cy.server()
    cy.route({
        method: 'GET',
        url: '**/api/1/databases/userdetails/collections/newtable?**',
        status: 200,
        response: {}
    }).as('getNewTable');

});

When(/^acessar a listagem$/, () => {
	cy.visit('WebTable.html');
});

Then(/^devo visualizar a listagem vazia$/, () => {
	cy.get('div[role=row]').should('have.length', 1);
});

Given(/^que acesso possui apenas registro$/, () => {
	cy.server()
    cy.route({
        method: 'GET',
        url: '**/api/1/databases/userdetails/collections/newtable?**',
        status: 200,
        response: 'fx:webtable-get-unico'
    }).as('getNewTable');
});

Then(/^devo visualizar apenas um registro$/, () => {
	cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellPhone');
    cy.get('@gridCellPhone').should('contain.text', '3129876543');
});
